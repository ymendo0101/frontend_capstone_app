<template>
  <div class="about">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Book Me Calendar</h5>
      </div>
      <div class="card-body">
        <div id="fullcalendar"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */ import axios from "axios";

export default {
  data: function() {
    return {
      appointments: { service: {}, professional: {} }
    };
  },
  mounted: function() {
    axios.get("/api/appointments").then(response => {
      this.appointments = response.data;
      console.log(this.appointments);
      const events = this.appointments.map(appointment => ({
        id: appointment.id,
        title: appointment.title,
        start: appointment.start_datetime,
        end: appointment.end_datetime
      }));

      $("#fullcalendar").fullCalendar({
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay,listMonth"
        },
        weekNumbers: true,
        eventLimit: true,
        editable: true,
        events: events
      });
    });
  }
};
</script>
