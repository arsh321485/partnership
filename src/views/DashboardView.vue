<!-- <template>
  <div class="container-fluid portal-wrapper">
    <div class="row">
      <div class="col-12 col-md-3 col-lg-2 p-0">
        <Sidebar />
      </div>

      <main class="col-12 col-md-9 col-lg-10 p-4">
        <h4 class="mb-3">Welcome, {{ userName }}</h4>

        <div class="row g-3 mb-3">
          <div class="col-6 col-lg-3">
            <div class="card p-3">
              <small class="text-muted">Total Deals</small>
              <h4 class="mb-0">0</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template> -->


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
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-center bg-white p-3 rounded-4 shadow-sm mb-4"
        >
          <div>
            <h5 class="mb-1">Welcome, {{ authStore.sessionUser?.firstName }} {{ authStore.sessionUser?.lastName }}</h5>
            <small class="text-muted">
              Managing Services for:
              <span class="fw-semibold">{{ authStore.sessionUser?.service }}</span>
            </small>
          </div>

          <div class="d-flex align-items-center gap-2 mt-3 mt-md-0">
            <span class="badge bg-light text-dark border px-3 py-2">
              <i class="bi bi-shield-lock me-1"></i>
              {{ authStore.sessionUser?.service }}
            </span>

            <button class="btn btn-primary btn-sm">
              <i class="bi bi-plus-circle me-1"></i> Register Deal
            </button>
          </div>
        </div>

        <!-- STATS CARDS -->
        <div class="row g-3 mb-4">
          <div class="col-6 col-lg-3">
            <div class="card dashboard-card p-3 rounded-4 shadow-sm">
              <small class="text-muted text-uppercase fw-semibold small">Total Deals</small>
              <h4 class="mt-1">{{ totalDeals }}</h4>
              <small class="text-success">Synced from your pipeline</small>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="card dashboard-card p-3 rounded-4 shadow-sm">
              <small class="text-muted text-uppercase fw-semibold small">Revenue</small>
              <h4 class="mt-1">${{ totalRevenue.toLocaleString() }}</h4>
              <small class="text-muted">Demo data from stored deals</small>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="card dashboard-card p-3 rounded-4 shadow-sm">
              <small class="text-muted text-uppercase fw-semibold small">Leads</small>
              <h4 class="mt-1">23</h4>
              <small class="text-muted">19 accepted • 52% conv.</small>
            </div>
          </div>

          <div class="col-6 col-lg-3">
            <div class="card dashboard-card p-3 rounded-4 shadow-sm">
              <small class="text-muted text-uppercase fw-semibold small">Engagement Score</small>
              <h4 class="mt-1">87.5</h4>
              <small class="text-muted">Deal success rate 65%</small>
            </div>
          </div>
        </div>

        <!-- CHART + ACTIVITY WILL COME AFTER THIS -->
        <div class="card p-3 rounded-4 shadow-sm">
          <div class="d-flex justify-content-between mb-2">
            <span class="fw-semibold">Deal Pipeline</span>
            <select id="pipelineFilter" class="form-select form-select-sm" style="width:auto;">
              <option value="month">This Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="year">This Year</option>
            </select>
          </div>

          <canvas id="pipelineChart"></canvas>
        </div>
      </main>
    </div>
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
import { useDealStore } from "../stores/dealStore";
import { useAuthStore } from "../stores/authStore";
import Chart from "chart.js/auto";

export default defineComponent({
  name: "DashboardView",
  components: { Sidebar },

  data() {
    return {
      totalDeals: 0,
      totalRevenue: 0,
      averageDeal: 0,
      chart: null as Chart | null,
      datasetOptions: {
        month: [12, 9, 7, 3, 1],
        "3months": [35, 23, 17, 9, 6],
        year: [120, 95, 71, 54, 32],
      } as Record<string, number[]>,
    };
  },

  computed: {
    authStore() {
      return useAuthStore();
    },
  },

  mounted() {
    this.updateDashboard();
    this.setupChart();
  },

  methods: {
    updateDashboard() {
      const dealStore = useDealStore();
      dealStore.loadSeedDeals();

      this.totalDeals = dealStore.totalDeals();
      this.totalRevenue = dealStore.totalValue();
      this.averageDeal =
        this.totalDeals > 0 ? this.totalRevenue / this.totalDeals : 0;
    },

    setupChart() {
      const canvas = document.getElementById(
        "pipelineChart"
      ) as HTMLCanvasElement | null;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Registered", "Qualified", "Proposal", "Negotiation", "Closed"],
          datasets: [
            {
              label: "Deals Pipeline",
              data: this.datasetOptions.month,
              borderWidth: 3,
              tension: 0.4,
            },
          ],
        },
        options: { responsive: true },
      });

      const filterDropdown = document.getElementById(
        "pipelineFilter"
      ) as HTMLSelectElement | null;

      if (filterDropdown) {
        filterDropdown.addEventListener("change", (event: Event) => {
          const target = event.target as HTMLSelectElement;
          this.chart!.data.datasets[0].data = this.datasetOptions[target.value];
          this.chart!.update();
        });
      }
    },
  },
});
</script>
