<template>
  <div class="Professionals">
    <div class="container home">
      <div v-for="professional in professionals" v-bind:class="{ selected: professional.selected }">
        <p>Name: {{ professional.name }}</p>
        <p>Service: {{ professional.service.name }}</p>
        <p>Email: {{ professional.email }}</p>
        <hr />
        <!-- <img v-bind:src="appointment." alt="" /> -->
        <!-- <h2>Appointment Status: {{ appointment.status }}</h2> -->

        <!--    <router-link v-bind:to="`/professionals/${professional.id}`">Appointment Info</router-link> -->
      </div>
    </div>
  </div>
</template>

<style>
.selected {
  color: green;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      professionals: []
      // message: "Book Me!",
      // message: "Upcoming Booked Appointments!",
      // appointments: []
    };
  },
  created: function() {
    axios.get("/api/professionals").then(response => {
      this.professionals = response.data;
      console.log(this.professionals);
    });
  },
  methods: {},
  computed: {
    // pendingAppointments: function() {
    //   return this.appointments.filter(appointment => appointment.status === "pending");
    // }
  }
};
</script>
