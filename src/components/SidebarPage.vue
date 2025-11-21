<template>
  <nav class="sidebar p-3">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div class="sidebar-logo d-flex flex-column">
        <span>SecureITLab</span>
        <small class="text-light" style="font-size: 0.7rem;">Partner Portal</small>
      </div>
    </div>

    <div>
      <small class="text-uppercase text-light" style="font-size: 0.7rem;">Navigation</small>
    </div>

    <ul class="nav flex-column mt-2">
      <li v-for="item in navItems" :key="item.name" class="nav-item">
        <router-link
          :to="item.to"
          class="nav-link"
          active-class="active"
        >
          <i :class="item.icon + ' me-2'"></i>{{ item.name }}
        </router-link>
      </li>
    </ul>

    <div class="mt-auto pt-3 border-top border-secondary">
      <div class="d-flex alignments-center mb-2">
        <div class="me-2">
          <div class="rounded-circle bg-light d-flex align-items-center justify-content-center"
               style="width:32px;height:32px;">
            <i class="bi bi-person text-dark"></i>
          </div>
        </div>
        <div>
          <div style="font-size: 0.85rem;" id="sessionUserName">{{ userName }}</div>
          <small class="text-light" style="font-size: 0.75rem;">Partner Admin · Gold</small>
        </div>
      </div>

      <button class="btn btn-sm btn-outline-light w-100" @click="logout">
        <i class="bi bi-box-arrow-left me-1"></i> Logout
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "SidebarPage",
  data() {
    return {
      userName: localStorage.getItem("partnerName") || "John Doe",
      navItems: [
        { name: "Dashboard", to: "/dashboard", icon: "bi bi-speedometer2" },
        { name: "Deals", to: "/deals", icon: "bi bi-briefcase" },
        { name: "Leads", to: "/leads", icon: "bi bi-people" },
        { name: "Partner Profile", to: "/profile", icon: "bi bi-building" },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

