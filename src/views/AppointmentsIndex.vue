<template>
  <div class="container home">
    <h1>{{ message }}</h1>
    <div v-for="appointment in appointments">
      <!-- <img v-bind:src="appointment." alt="" /> -->
      <h2>Service: {{ appointment.service.name }}</h2>
      <h2>Professional: {{ appointment.professional.name }}</h2>
      <h2>Start time: {{ appointment.start_datetime }}</h2>
      <h2>End time: {{ appointment.end_datetime }}</h2>
      <h2>Status: {{ appointment.status }}</h2>
      <router-link v-bind:to="`/appointments/${appointment.id}`">Appointment Info</router-link>
    </div>
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
      message: "Upcoming Booked Appointments!",
      appointments: []
    };
  },
  created: function() {
    axios.get("/api/appointments").then(response => {
      this.appointments = response.data;
      console.log(this.appointments);
    });
  },
  methods: {}
};
</script>
