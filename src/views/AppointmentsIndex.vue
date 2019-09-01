<template>
  <div class="container home">
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-3">
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
            <h5 class="card-title">Pending</h5>
            <h6 class="card-subtitle text-muted">View your pending to be confirmed appointments</h6>
          </div>
          <div class="card-body p-3">
            <div id="tasks-upcoming">
              <div v-for="appointment in pendingAppointments" class="card mb-3 bg-light cursor-grab">
                <div class="card-body p-3">
                  <div class="float-right mr-n2">
                    <label class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" checked />
                      <span class="custom-control-label text-hide">Checkbox</span>
                    </label>
                  </div>
                  <p>Service: {{ appointment.service.name }}</p>
                  <p>Professional: {{ appointment.professional.name }}</p>
                  <p>Email: {{ appointment.professional.email }}</p>
                  <p>Start time: {{ appointment.start_datetime }}</p>
                  <p>End time: {{ appointment.end_datetime }}</p>
                  <p>Status: {{ appointment.status }}</p>
                  <div class="float-right mt-n1">
                    <img
                      src="https://www.pngfind.com/pngs/m/70-705485_tonystark-sticker-robert-downey-jr-con-traje-hd.png"
                      width="36"
                      height="36"
                      class="rounded-circle"
                      alt="Avatar"
                    />
                  </div>
                  <!-- <a class="btn btn-primary btn-sm" href="#">View</a> -->
                  <router-link v-bind:to="`/appointments/${appointment.id}`" class="btn btn-primary btn-sm">
                    Appointment Info
                  </router-link>
                </div>
              </div>
            </div>

            <!--             <a href="#" class="btn btn-primary btn-block">Create new appointment</a> -->
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 col-xl-3">
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
            <h5 class="card-title">Confirmed</h5>
            <h6 class="card-subtitle text-muted">View all confirmed appointments.</h6>
          </div>
          <div class="card-body">
            <div id="tasks-progress">
              <div v-for="appointment in confirmedAppointments" class="card mb-3 bg-light cursor-grab">
                <div class="card mb-3 bg-light cursor-grab">
                  <div class="card-body p-3">
                    <div class="float-right mr-n2">
                      <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" />
                        <span class="custom-control-label text-hide">Checkbox</span>
                      </label>
                    </div>
                    <p>Service: {{ appointment.service.name }}</p>
                    <p>Professional: {{ appointment.professional.name }}</p>
                    <p>Email: {{ appointment.professional.email }}</p>
                    <p>Start time: {{ appointment.start_datetime }}</p>
                    <p>End time: {{ appointment.end_datetime }}</p>
                    <p>Status: {{ appointment.status }}</p>
                    <div class="float-right mt-n1">
                      <img src="img/avatars/avatar.jpg" width="32" height="32" class="rounded-circle" alt="Avatar" />
                    </div>
                    <router-link v-bind:to="`/appointments/${appointment.id}`" class="btn btn-primary btn-sm">
                      Appointment Info
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 col-xl-3">
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
            <h5 class="card-title">Declined</h5>
            <h6 class="card-subtitle text-muted">View your declined appointments.</h6>
          </div>
          <div class="card-body">
            <div id="tasks-hold">
              <div v-for="appointment in declinedAppointments" class="card mb-3 bg-light cursor-grab">
                <div class="card mb-3 bg-light cursor-grab">
                  <div class="card-body p-3">
                    <div class="float-right mr-n2">
                      <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" />
                        <span class="custom-control-label text-hide">Checkbox</span>
                      </label>
                    </div>
                    <p>Service: {{ appointment.service.name }}</p>
                    <p>Professional: {{ appointment.professional.name }}</p>
                    <p>Email: {{ appointment.professional.email }}</p>
                    <p>Start time: {{ appointment.start_datetime }}</p>
                    <p>End time: {{ appointment.end_datetime }}</p>
                    <p>Status: {{ appointment.status }}</p>
                    <div class="float-right mt-n1">
                      <img src="img/avatars/avatar-4.jpg" width="32" height="32" class="rounded-circle" alt="Avatar" />
                    </div>
                    <router-link v-bind:to="`/appointments/${appointment.id}`" class="btn btn-primary btn-sm">
                      Appointment Info
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img {
  width: 32 !important;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Upcoming Booked Appointments!",
      appointments: []
    };
  },
  created: function() {
    axios.get("/api/appointments").then(response => {
      this.appointments = response.data;
      console.log(this.appointments);
    });
  },
  methods: {},
  computed: {
    pendingAppointments: function() {
      return this.appointments.filter(appointment => appointment.status === "pending");
    },
    confirmedAppointments: function() {
      return this.appointments.filter(appointment => appointment.status === "Confirmed");
    },
    declinedAppointments: function() {
      return this.appointments.filter(appointment => appointment.status === "Declined");
    }
  }
};
</script>
