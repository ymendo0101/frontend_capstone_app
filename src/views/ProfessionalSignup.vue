<template>
  <div class="professional-signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Professional Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Service:</label>
          <input type="text" class="form-control" v-model="service" />
        </div>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="username" />
        </div>
        <div class="form-group">
          <label>Phone number:</label>
          <input type="text" class="form-control" v-model="phoneNumber" />
        </div>
        <div class="form-group">
          <label>Address:</label>
          <input type="text" class="form-control" v-model="address" />
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input type="integer" class="form-control" v-model="price" />
        </div>
        <div class="form-group">
          <label>License Number:</label>
          <input type="integer" class="form-control" v-model="licenseNumber" />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      service: "",
      username: "",
      phoneNumber: "",
      address: "",
      price: "",
      licenseNumber: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        service: this.service,
        name: this.username,
        phone_number: this.phoneNumber,
        address: this.address,
        price: this.price,
        license_number: this.licenseNumber,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/professionals", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
