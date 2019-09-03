<template>
  <div class="container home">
    <h4>Edit appointment Status</h4>
    <div>
      Change Appointment Status:
      <select v-model="appointment.status">
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Declined">Declined</option>
      </select>
      <!--       <input v-model="appointment.appointment_status_id" type="text" />
 -->
      <!-- <button v-on:click="updateAppointment()">Update</button> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      appointment: {}
    };
  },
  created: function() {
    axios.get("/api/appointments/" + this.$route.params.id).then(response => {
      this.appointment = response.data;
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
