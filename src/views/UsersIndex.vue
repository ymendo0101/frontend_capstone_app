<template>
  <div class="Users">
    <!-- prettier-ignore -->
    <div class="container-fluid">

      <div class="header">
        <h1 class="header-title">
          Clients
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
              <h5 class="card-title mb-0">Clients</h5>
            </div>
            <div class="card-body">
              <table id="datatables-clients" class="table table-striped" style="width:100%">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users">
                    <td><img v-bind:src="user.image_url" width="32" height="32" class="rounded-circle my-n1" alt="Avatar"></td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone_number}}</td>
                    <!-- <td>{{ appointment.status}}</td> -->
                    <td><span class="badge badge-success">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-xxl-3">
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
              <h5 class="card-title mb-0">Angelica Ramos</h5>
            </div>
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col-sm-3 col-xl-12 col-xxl-4 text-center">
                  <img src="img/avatars/avatar-3.jpg" width="64" height="64" class="rounded-circle mt-2" alt="Angelica Ramos">
                </div>
                <div class="col-sm-9 col-xl-12 col-xxl-8">
                  <strong>About me</strong>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.</p>
                </div>
              </div>

              <table class="table table-sm my-2">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>Charissa Hilt</td>
                  </tr>
                  <tr>
                    <th>Company</th>
                    <td>Matrix Interior Design</td>
                  </tr>
                  <tr>
                    <th>Occupation</th>
                    <td>Desktop publisher</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>charissahilt@rhyta.com</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>+1234123123123</td>
                  </tr>
                  <tr>
                    <th>Website</th>
                    <td>hispanomarketer.com</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td><span class="badge badge-success">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
  mounted: function() {
    $(function() {
      // Datatables clients
      $("#datatables-clients").DataTable({
        responsive: true,
        order: [[1, "asc"]]
      });
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
