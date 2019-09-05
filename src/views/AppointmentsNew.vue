<template>
  <div class="container new">
    <form v-on:submit.prevent="createAppointment()">
      <h1>New Appointment</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="form-group">
        Service:
        <select v-model="service_id">
          <option v-for="service in services" v-bind:value="service.id">{{ service.name }}</option>
        </select>
        <!-- <input v-model="service" type="text" class="form-control" /> -->
      </div>
      <div class="form-group">
        Professional:
        <select v-model="professional_id">
          <option v-for="professional in professionals" v-bind:value="professional.id">{{ professional.name }}</option>
        </select>
        <!--         <input v-model="professional" type="text" class="form-control" /> -->
      </div>
      <div class="form-group">
        Start Time:
        <input v-model="start_datetime" type="text" class="form-control" />
      </div>
      <div class="form-group">
        End Time:
        <input v-model="end_datetime" type="text" class="form-control" />
      </div>
      <input type="submit" value="Create" class="btn btn-primary" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      services: [],
      professionals: [],
      service_id: null,
      professional_id: null,
      professional: "",
      start_datetime: "",
      end_datetime: ""
    };
  },

  methods: {
    createAppointment: function() {
      console.log("Create the appointment...");
      var formData = new FormData();
      formData.append("service_id", this.service_id);
      formData.append("professional_id", this.professional_id);
      formData.append("start_datetime", this.start_datetime);
      formData.append("end_datetime", this.end_datetime);
      axios
        .post("/api/appointments", formData)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/appointments");
        })
        .catch(error => console.log(error.response));
    }
    // setFile: function(event) {
    //   if (event.target.files.length > 0) {
    //     this.image = event.target.files[0];
  },

  created: function() {
    // get all services and console.log them
    axios.get("/api/services").then(response => {
      this.services = response.data;
      console.log("Services", this.services);
    });

    // get all professionals and console.log them
    axios.get("/api/professionals").then(response => {
      this.professionals = response.data;
      console.log("Professionals", this.professionals);
    });
  }
};
</script>
