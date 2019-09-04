<template>
  <div class="container show">
    <h2>{{ message }}</h2>
    <!--   <img v-bind:src="appointment.image_url" alt="" /> -->
    <div v-if="isProfessional">
      <p>Service: {{ appointment.service.name }}</p>
      <p>Client: {{ appointment.user.name }}</p>
      <p>Email: {{ appointment.user.email }}</p>
      <p>Start time: {{ appointment.start_datetime }}</p>
      <p>End time: {{ appointment.end_datetime }}</p>
      <!--       <td><img v-bind:src="user.image_url" width="32" height="32" class="rounded-circle my-n1" alt="Avatar" /></td> -->
    </div>

    <div v-if="isUser">
      <!--       <td>
        <img v-bind:src="professional.image_url" width="32" height="32" class="rounded-circle my-n1" alt="Avatar" />
      </td> -->
      <p>Service: {{ appointment.service.name }}</p>
      <p>Professional: {{ appointment.professional.name }}</p>
      <p>Email: {{ appointment.professional.email }}</p>
      <p>Start time: {{ appointment.start_datetime }}</p>
      <p>End time: {{ appointment.end_datetime }}</p>
    </div>

    <p v-if="isProfessional">
      Status:
      <select v-model="appointment.status">
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="declined">Declined</option>
      </select>
      <button v-on:click="updateAppointment()">Update Status</button>
    </p>
    <!--    <router-link v-bind:to="`/appointments/${appointment.id}/edit`">Edit appointment</router-link> -->
    <router-link to="/">Back to all appointments</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "See your booked appointment details!",
      appointment: { service: {}, professional: {} },
      isUser: localStorage.getItem("isUser"),
      isProfessional: localStorage.getItem("isProfessional")
    };
  },
  created: function() {
    axios.get("/api/appointments/" + this.$route.params.id).then(response => {
      this.appointment = response.data;
      console.log("created", response.data);
    });
  },
  methods: {
    updateAppointment: function() {
      var params = {
        status: this.appointment.status
      };
      axios.patch("/api/appointments/" + this.appointment.id, params).then(response => {
        this.$router.push("/appointments");
      });
    }
  }
};
</script>
