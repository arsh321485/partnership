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
              <input type="text" class="form-control form-control-sm" placeholder="Deal or customer name">
            </div>
            <div class="col-md-2">
              <label class="form-label small">Status</label>
              <select class="form-select form-select-sm">
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Won</option>
                <option>Lost</option>
              </select>
            </div>
            <div class="col-md-2">
              <label class="form-label small">Stage</label>
              <select class="form-select form-select-sm">
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
                <tr>
                  <td>Dr-2025-156</td>
                  <td>Secureitlab consulting services</td>
                  <td>ISO - 270001</td>
                  <td>Acme Coprporation</td>
                  <td>$ 75000</td>
                  <td><span class="badge text-bg-info">Approved</span></td>
                  <td>Qualified</td>
                  <td>2025-12-15</td>
                  <td><button class="btn btn-sm btn-outline-secondary">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <!-- Register Deal Modal -->
      <div class="modal fade" id="dealModal" tabindex="-1" aria-labelledby="dealModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content rounded-4 border-0 shadow-lg">

            <!-- Header -->
            <div class="modal-header border-0 pb-0">
              <h4 class="modal-title fw-bold" id="dealModalLabel">Register New Deal</h4>
              <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal"></button>
            </div>

            <!-- Body -->
            <div class="modal-body px-4">

              <form>
                <div class="row g-3">

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">Service Type</label>
                    <select class="form-select form-select-md rounded-3">
                      <option>SecureITLab Consulting Services</option>
                      <option>SecureITLab Assurance Services</option>
                      <option>SecureITLab Managed Services</option>
                       <option>TestMyPlan</option>
                        <option>VAPTFiX</option>
                         <option>HI@WORK</option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">Product</label>
                    <select class="form-select form-select-md rounded-3">
                      <option>ISO - 27001</option>
                      <option>ISO - 27701</option>
                      <option>ISO - 22301</option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">Customer Name</label>
                    <input type="text" class="form-control rounded-3" placeholder="Enter customer name">
                  </div>

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">Customer Email</label>
                    <input type="email" class="form-control rounded-3" placeholder="customer@email.com">
                  </div>

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">Customer Phone</label>
                    <input type="text" class="form-control rounded-3" placeholder="+91-00000-00000">
                  </div>

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">Expected Close Date</label>
                    <input type="date" class="form-control rounded-3">
                  </div>

                  <div class="col-md-12">
                    <label class="form-label fw-semibold small">Notes</label>
                    <textarea class="form-control rounded-3" rows="3"
                      placeholder="Any billing terms, exclusivity details, etc."></textarea>
                  </div>

                </div>
              </form>

            </div>

            <!-- Footer -->
            <div class="modal-footer border-0 px-4 pb-4">
              <span class="text-muted small me-auto">
                By registering this deal, you confirm information is accurate.
              </span>
              <button type="button" class="btn btn-light rounded-3 px-4" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary rounded-3 px-4">Submit Deal</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/SidebarPage.vue";


export default defineComponent({
  name: "DealsView",
  components: { Sidebar },


});
</script>
