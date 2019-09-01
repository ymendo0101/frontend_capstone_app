<template>
  <div class="Users">
    <div class="container home">
      <div v-for="user in users">
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <hr />
        <!-- <img v-bind:src="appointment." alt="" /> -->
        <!-- <h2>Appointment Status: {{ appointment.status }}</h2> -->

        <!--    <router-link v-bind:to="`/users/${user.id}`">Appointment Info</router-link> -->
      </div>
    </div>
  </div>
</template>

<style>
/*.selected {
  color: green;*/
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      users: []
      // message: "Book Me!",
      // message: "Upcoming Booked Appointments!",
      // appointments: []
    };
  },
  created: function() {
    axios.get("/api/users").then(response => {
      this.users = response.data;
      console.log(this.users);
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
