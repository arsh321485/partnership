<template>
  <div class="container-fluid portal-wrapper">
    <div class="row">
      <!-- SIDEBAR LEFT -->
      <div class="col-12 col-md-3 col-lg-2 p-0">
        <Sidebar />
      </div>

      <!-- MAIN DASHBOARD CONTENT -->
      <main class="col-12 col-md-9 col-lg-10 p-4">

        <!-- HEADER -->
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-center bg-white p-3 rounded-4 shadow-sm mb-4">
          <div>
            <h5 class="mb-1">Welcome, Ritika Bhikonde</h5>
            <small class="text-muted">
              Managing Services for:
              <span class="fw-semibold">Secureitlab consulting services</span>
            </small>
          </div>

          <div class="d-flex align-items-center gap-2 mt-3 mt-md-0">


            <button class="btn">
             <i class="bi bi-bell-fill text-primary fs-5"></i>
            </button>

          </div>
        </div>

        <!-- STATS CARDS -->
        <div class="row g-3 mb-4">
          <div class="col-6 col-lg-4">
            <div class="card dashboard-card p-3 rounded-4 shadow-sm">
              <small class="text-muted text-uppercase fw-semibold small">Total Deals</small>
              <h4 class="mt-1">2</h4>
              <small class="text-success">Synced from your pipeline</small>
            </div>
          </div>

          <div class="col-6 col-lg-4">
            <div class="card dashboard-card p-3 rounded-4 shadow-sm">
              <small class="text-muted text-uppercase fw-semibold small">Revenue</small>
              <h4 class="mt-1">$ 75000</h4>
              <small class="text-muted">Demo data from stored deals</small>
            </div>
          </div>

          <div class="col-6 col-lg-4">
            <div class="card dashboard-card p-3 rounded-4 shadow-sm">
              <small class="text-muted text-uppercase fw-semibold small">Leads</small>
              <h4 class="mt-1">23</h4>
              <small class="text-muted">19 accepted • 52% conv.</small>
            </div>
          </div>


        </div>


        <div class="row g-4">

          <!-- LEFT: DEAL PIPELINE CHART -->
          <div class="col-12 col-lg-7">
            <div class="card p-3 rounded-4 shadow-sm">
              <div class="d-flex justify-content-between mb-2">
                <span class="fw-semibold">Deal Pipeline</span>
                <select id="pipelineFilter" class="form-select form-select-sm" style="width:auto;">
                  <option value="month">This Month</option>
                  <option value="3months">Last 3 Months</option>
                  <option value="year">This Year</option>
                </select>
              </div>

              <canvas id="pipelineChart" style="min-height: 350px;"></canvas>
            </div>
          </div>

          <!-- RIGHT: PRODUCT LIST CARD -->
          <div class="col-12 col-lg-5">
            <div class="card p-3 rounded-4 shadow-sm">
              <h6 class="fw-semibold mb-3">Product List</h6>

              <ul class="list-group small">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                 ISO - 27001
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  ISO - 27701
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  ISO - 22301 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Chart from "chart.js/auto";
import Sidebar from "../components/SidebarPage.vue";

export default defineComponent({
  name: "DashboardView",
   components: { Sidebar },

    data() {
    return {};
  },

  mounted() {
    const canvas = document.getElementById("pipelineChart") as HTMLCanvasElement;

    new Chart(canvas, {
      type: "bar",
      data: {
        labels: ["Lead", "Qualified", "Proposal", "Negotiation", "Closed"],
        datasets: [
          {
            label: "Deals",
            data: [10, 25, 18, 12, 8],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderRadius: 8,
          },
        ],
      },
    });
  },
});
</script>
