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
                <tr>
                  <td>LD - 2025-050</td>
                  <td>Tech Startup Inc.</td>
                  <td>contact@techstartup.com</td>
                  <td>Tech Startup Inc.</td>
                    <td>Secureitlab consulting services</td>
                      <td>ISO - 270001</td>
                  <td><span class="badge status-badge status-active text-muted">New</span></td>
                  <!-- <td><button class="btn btn-sm btn-outline-secondary">View</button></td> -->
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
import Sidebar from "../components/SidebarPage.vue";

export default defineComponent({
  name: "LeadsView",
  components: { Sidebar },

});
</script>

