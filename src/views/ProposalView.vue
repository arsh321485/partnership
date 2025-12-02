<template>
    <div class="container-fluid portal-wrapper">
        <div class="row">
            <div class="col-12 col-md-3 col-lg-2 p-0">
                <Sidebar />
            </div>

            <main class="col-12 col-md-9 col-lg-10 p-4">

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="section-title">Proposals</h5>

                    <button class="btn btn-primary d-flex align-items-center gap-2">
                        <i class="bi bi-file-earmark-arrow-down"></i>
                        Download Proposal
                    </button>
                </div>

                <div class="card p-3">
                    <div class="table-responsive">
                        <table class="table table-hover align-middle small">
                            <thead class="table-light">
                                <tr>
                                    <th>Deal #</th>
                                    <th>Customer</th>
                                    <th>Services</th>
                                    <th>Products</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>DL - 2025-001</td>
                                    <td>Tech Startup Inc.</td>
                                    <td>SecureITLab consulting services</td>
                                    <td>ISO - 27001</td>
                                    <td><span class="badge status-badge status-active text-muted">Sent</span></td>
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
    name: "ProposalView",
    components: { Sidebar },
});
</script>
