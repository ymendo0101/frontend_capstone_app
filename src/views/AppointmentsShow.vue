<template>
  <div class="container show">
    <h2>{{ message }}</h2>
    <!--   <img v-bind:src="appointment.image_url" alt="" /> -->
    <p>Service: {{ appointment.service.name }}</p>
    <p>Professional: {{ appointment.professional.name }}</p>
    <p>Email: {{ appointment.professional.email }}</p>
    <p>Start time: {{ appointment.start_datetime }}</p>
    <p>End time: {{ appointment.end_datetime }}</p>
    <p>
      Status:
      <select v-model="appointment.status">
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Declined">Declined</option>
      </select>
      <button v-on:click="updateAppointment()">Update Status</button>
    </p>
    <router-link v-bind:to="`/appointments/${appointment.id}/edit`">Edit appointment</router-link>
    <router-link to="/">Back to all appointments</router-link>
  </div>
</template>

<style>
img {
  width: 100%;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "See your booked appointment details!",
      appointment: { service: {}, professional: {} }
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
