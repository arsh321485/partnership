<template>
  <div class="login-page d-flex align-items-center justify-content-center py-5">

    <div class="container">
      <div class="row justify-content-center">

        <!-- Card -->
        <div class="col-12 col-lg-10 login-card d-flex p-0 shadow-lg rounded-4 overflow-hidden">

          <!-- LEFT IMAGE -->
          <div
            class="col-12 col-md-6 p-0 d-none d-md-flex align-items-center justify-content-center bg-dark rounded-start-4 position-relative">
            <img src="@/assets/images/signup-img.png" class="img-fluid w-100 h-100 object-fit-cover" alt="security" />
          </div>

          <!-- RIGHT FORM -->
          <div class="col-12 col-md-6 bg-white d-flex align-items-center justify-content-center p-5 rounded-end-4">
            <div class="w-100" style="max-width: 380px">

              <h3 class="fw-bold mb-3 text-center">Forgot Password</h3>
              <p class="text-muted text-center mb-4">
                Enter your registered email address to receive password reset link.
              </p>

              <form @submit.prevent="handleSubmit">

                <label class="form-label">Business Email</label>
                <input type="email" v-model="email" class="form-control form-control-lg rounded-3 mb-3"
                  placeholder="you@company.com" required />

                <button class="btn btn-primary w-100 py-2 rounded-3 fw-semibold" type="submit">
                  Send Reset Link
                </button>

              </form>

              <p class="text-center text-muted mt-3">
                Remember your password?
                <router-link to="/login" class="fw-semibold text-primary text-decoration-none">
                  Back to Login →
                </router-link>
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ForgotPasswordPage",

  data() {
    return {
      email: "",
    };
  },

  methods: {
    handleSubmit() {
      console.log("Reset link sent to:", this.email);
      alert("If the email exists, a reset link will be sent.");
    }
  }
});
</script>
