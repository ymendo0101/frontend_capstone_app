<template>
  <div class="container show">
    <h2>{{ message }}</h2>
    <!--   <img v-bind:src="appointment.image_url" alt="" /> -->
    <p>Service: {{ appointment.service.name }}</p>
    <p>Professional: {{ appointment.professional.name }}</p>
    <p>Start time: {{ appointment.start_datetime }}</p>
    <p>End time: {{ appointment.end_datetime }}</p>
    <p>Status: {{ appointment.status }}</p>
    <button v-on:click="destroyAppointment(appointment)">Destroy appointment</button>
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
    destroyRecipe: function(recipe) {
      axios.delete("/api/recipes/" + recipe.id).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>
