<template>
  <div class="container-fluid portal-wrapper">
    <div class="row">
      <div class="col-12 col-md-3 col-lg-2 p-0">
        <Sidebar />
      </div>

      <main class="col-12 col-md-9 col-lg-10 p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="section-title">Leads</h5>
        </div>

        <div class="card p-3">
          <div class="table-responsive">
            <table class="table table-hover align-middle small">
              <thead class="table-light">
                <tr>
                  <th>Lead #</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Services</th>
                  <th>Products</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="lead in leads" :key="lead.id">
                  <td>{{ lead.code }}</td>
                  <td>{{ lead.customer }}</td>
                  <td>{{ lead.email }}</td>
                  <td>{{ lead.company }}</td>
                    <td>{{ lead.services }}</td>
                      <td>{{ lead.products }}</td>
                  <td><span class="badge status-badge status-active text-muted">{{ lead.status }}</span></td>
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
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
  name: "LeadsView",
  components: { Sidebar },
  setup() {
    const leads = [
      {
        id: 1,
        code: "LD-2025-050",
        customer: "Tech Startup Inc.",
        email: "contact@techstartup.com",
        company: "Tech Startup Inc.",
        services: "Secureitlab Consulting Services",
        products: "Iso-270001",
        status: "New",
      
      },
    ];
    return { leads };
  }
});
</script>

