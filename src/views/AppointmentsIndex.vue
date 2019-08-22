<template>
  <div class="Appointments">
    <h1>{{ message }}</h1>
    <div v-for="appointment in appointments">
      <p>Start_datetime: {{ appointment.start_datetime }}</p>
      <p>End_datetime: {{ appointment.end_datetime }}</p>
      <p>status: {{ appointment.status }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Book Me!",
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
