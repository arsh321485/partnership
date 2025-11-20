<template>
  <div class="container-fluid portal-wrapper">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-12 col-md-3 col-lg-2 p-0">
        <Sidebar />
      </div>

      <!-- Main Content -->
      <main class="col-12 col-md-9 col-lg-10 p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="section-title">Deals</h5>
          <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#dealModal">
            <i class="bi bi-plus-circle me-1"></i> Register Deal
          </button>
        </div>

        <!-- Filters -->
        <div class="card p-3 mb-3">
          <div class="row g-2 align-items-end">
            <div class="col-md-3">
              <label class="form-label small">Search</label>
              <input v-model="search" type="text" class="form-control form-control-sm" placeholder="Deal or customer name">
            </div>
            <div class="col-md-2">
              <label class="form-label small">Status</label>
              <select v-model="statusFilter" class="form-select form-select-sm">
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Won</option>
                <option>Lost</option>
              </select>
            </div>
            <div class="col-md-2">
              <label class="form-label small">Stage</label>
              <select v-model="stageFilter" class="form-select form-select-sm">
                <option>All</option>
                <option>Registered</option>
                <option>Qualified</option>
                <option>Proposal</option>
                <option>Negotiation</option>
              </select>
            </div>
            <div class="col-md-2">
              <label class="form-label small">From</label>
              <input type="date" class="form-control form-control-sm">
            </div>
            <div class="col-md-2">
              <label class="form-label small">To</label>
              <input type="date" class="form-control form-control-sm">
            </div>
            <div class="col-md-1 d-grid">
              <button class="btn btn-dark btn-sm">Filter</button>
            </div>
          </div>
        </div>

        <!-- Table -->
        <div class="card p-0">
          <div class="table-responsive">
            <table class="table table-hover mb-0 align-middle">
              <thead class="table-light small">
                <tr>
                  <th>Deal #</th>
                   <th>Services</th>
                   <th>Products</th>
                  <th>Customer</th>
                  <th>Value</th>
                  <th>Status</th>
                  <th>Stage</th>
                  <th>Expected Close</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="small">
                <tr v-for="deal in deals" :key="deal.id">
                  <td>{{ deal.code }}</td>
                  <td>{{ deal.services }}</td>
                  <td>{{ deal.products }}</td>
                  <td>{{ deal.customer }}</td>
                  <td>{{ deal.value }}</td>
                  <td><span class="badge text-bg-info">{{ deal.status }}</span></td>
                  <td>{{ deal.stage }}</td>
                  <td>{{ deal.expected }}</td>
                  <td><button class="btn btn-sm btn-outline-secondary">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import { useDealStore } from "../stores/dealStore";

export default defineComponent({
  name: "DealsView",
  components: { Sidebar },

  setup() {
    const dealStore = useDealStore();
    const search = ref("");

    onMounted(() => {
      dealStore.loadSeedDeals();
    });

    const addDeal = (deal: any) => {
      dealStore.addDeal(deal);
    };

    return {
      dealStore,
      search,
      addDeal,
    };
  },
});
</script>

