<template>
  <div class="container home">
    <h4>Edit appointment</h4>
    <div>
      Start Time:
      <input v-model="appointment.start_time" type="text" />
      End Time:
      <input v-model="appointment.end_time" type="text" />
      <button v-on:click="updateAppointment(appointment)">Update</button>
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
      appointment: {}
    };
  },
  created: function() {
    axios.get("/api/appointments/" + this.$route.params.id).then(response => {
      this.appointment = response.data;
    });
  },
  methods: {
    updateProduct: function(inputAppointment) {
      var params = {
        start_time: inputAppointment.start_time,
        end_time: inputAppointment.end_time
      };
      axios.patch("/api/appointments/" + inputAppointment.id, params).then(response => {
        this.$router.push("/appointments");
      });
    }
  }
};
</script>
