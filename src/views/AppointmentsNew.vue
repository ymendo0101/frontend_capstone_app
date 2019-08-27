<template>
  <div class="container new">
    <form v-on:submit.prevent="createAppointment()">
      <h1>New Appointment</h1>
      <div class="form-group">
        Service:
        <input v-model="service" type="text" class="form-control" />
      </div>
      <div class="form-group">
        Professional:
        <input v-model="professional" type="text" class="form-control" />
      </div>
      <div class="form-group">
        Start Time:
        <input v-model="startDatetime" type="text" class="form-control" />
      </div>
      <div class="form-group">
        End Time:
        <input v-model="endDatetime" type="text" class="form-control" />
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
      service: "",
      professional: "",
      startDatetime: "",
      endDatetime: ""
    };
  },
  // methods: {
  //   setFile: function(event) {
  //     if (event.target.files.length > 0) {
  //       this.image = event.target.files[0];
  //     }
  //   },
  createAppointment: function() {
    console.log("Create the appointment...");
    var formData = new FormData();
    formData.append("service", this.service);
    formData.append("professional", this.professional);
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
};
</script>
