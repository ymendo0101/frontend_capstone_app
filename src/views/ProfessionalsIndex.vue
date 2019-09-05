<template>
  <div class="Users">
    <!-- prettier-ignore -->
    <div class="container-fluid">

      <div class="header">
        <h1 class="header-title">
          Professionals
        </h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="dashboard.html">Dashboard</a></li>
            <li class="breadcrumb-item"><a href="#">Pages</a></li>
            <li class="breadcrumb-item active" aria-current="page">Clients</li>
          </ol>
        </nav>
      </div>

      <div class="row">
        <div class="col-xxl-9">
          <div class="card">
            <div class="card-header">
              <div class="card-actions float-right">
                <a href="#" class="mr-1">
                <i class="align-middle" data-feather="refresh-cw"></i>
              </a>
                <div class="d-inline-block dropdown show">
                  <a href="#" data-toggle="dropdown" data-display="static">
                  <i class="align-middle" data-feather="more-vertical"></i>
                </a>

                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <h5 class="card-title mb-0">Professionals</h5>
            </div>
            <div class="card-body">
              <table id="datatables-professionals" class="table table-striped" style="width:100%">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Email</th>
                    <th>License Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="professional in professionals">
                    <td><img v-bind:src="professional.image_url" width="32" height="32" class="rounded-circle my-n1" alt="Avatar"></td>
                    <td>{{ professional.name }}</td>
                    <td>{{ professional.service.name}}</td>
                    <td>{{ professional.email}}</td>
                    <!-- <td>{{ appointment.status}}</td> -->
                    <td><span class="badge badge-success">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

<!--         <div class="col-xxl-3">
          <div class="card">


          </div> -->
        </div>
      </div>
  </div>
  <!-- </div> -->
</template>

<style>
/*.selected {
  color: green;*/
</style>

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
