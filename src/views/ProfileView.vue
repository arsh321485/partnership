<template>
  <div class="container-fluid portal-wrapper">
    <div class="row">
      <div class="col-12 col-md-3 col-lg-2 p-0">
        <Sidebar />
      </div>

      <main class="col-12 col-md-9 col-lg-10 p-4">
        <h5 class="section-title mb-3">Partner Profile & Onboarding</h5>

        <div class="row g-3">
          <div class="col-lg-7">
            <div class="card p-3 mb-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <div class="fw-semibold">{{ profile.company }}</div>
                  <small class="text-muted">Partner Code: {{ profile.code }}</small>
                </div>
                <span class="badge status-badge status-active">Active · Gold</span>
              </div>

              <div class="row small">
                <div class="col-md-6 mb-2">
                  <div class="text-muted">Website</div>
                  <a :href="profile.website" target="_blank">{{ profile.website }}</a>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="text-muted">Industry</div>
                  {{ profile.industry }}
                </div>
                <div class="col-md-6 mb-2">
                  <div class="text-muted">Primary Contact</div>
                  {{ profile.contact }}
                </div>
              </div>
            </div>

            <div class="card p-3">
              <div class="fw-semibold mb-2">Documents & Agreements</div>
              <input type="file" class="form-control form-control-sm" />
            </div>
          </div>

          <div class="col-lg-5">
            <div class="card p-3 small">
              <div class="fw-semibold mb-2">Performance Snapshot</div>
              <ul class="list-unstyled mb-0">
                <li class="d-flex justify-content-between mb-1"><span>Total Revenue</span><strong>$0</strong></li>
                <li class="d-flex justify-content-between mb-1"><span>Total Deals</span><strong>0</strong></li>
                <li class="d-flex justify-content-between mb-1"><span>Win Rate</span><strong>65.2%</strong></li>
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
import Sidebar from "../components/Sidebar.vue";
import { useAuthStore } from "../stores/authStore";

export default defineComponent({
  name: "ProfileView",
  components: { Sidebar },

  setup() {
    const auth = useAuthStore();

    const profile = {
      company: auth.session?.company || "Company",
      code: "TS-2024-001",
      website: auth.session?.website || "https://example.com",
      industry: "Technology",
      contact: `${auth.session?.firstName} ${auth.session?.lastName} · ${auth.session?.email}`,
    };

    return { profile };
  }
});
</script>

