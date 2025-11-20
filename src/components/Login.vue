<template>
    <div class="login-page d-flex align-items-center justify-content-center py-5">

        <div class="container">
            <div class="row justify-content-center">

                <!-- Card -->
                <div class="col-12 col-lg-10 login-card d-flex p-0 shadow-lg rounded-4 overflow-hidden">

                    <!-- LEFT IMAGE -->
                    <div
                        class="col-12 col-md-6 p-0 d-none d-md-flex align-items-center justify-content-center bg-dark rounded-start-4 position-relative">
                        <img src="@/assets/images/signup-img.png" class="img-fluid w-100 h-100 object-fit-cover"
                            alt="security" />
               
                    </div>

                    <!-- RIGHT FORM -->
                    <div
                        class="col-12 col-md-6 bg-white d-flex align-items-center justify-content-center p-5 rounded-end-4">
                        <div class="w-100" style="max-width: 380px">

                            <h3 class="fw-bold mb-3 text-center">Login</h3>

                            <form @submit.prevent="submitLogin">

                                <label class="form-label">Business Email</label>
                                <input type="email" v-model="email" class="form-control form-control-lg rounded-3 mb-2"
                                    placeholder="you@company.com" required />

             
                                <div class="mb-2 position-relative">
                                    <input :type="showPassword ? 'text' : 'password'" v-model="password"
                                        class="form-control form-control-lg rounded-3 pe-5" placeholder="••••••••"
                                        required />

                                    <!-- Eye Icon -->
                                    <i class="bi" :class="showPassword ? 'bi-eye-slash' : 'bi-eye'"
                                        @click="showPassword = !showPassword"
                                        style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor:pointer; font-size: 1.2rem; color:#6b7280;"></i>
                                </div>


                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" id="keepSigned" />
                                    <label class="form-check-label small" for="keepSigned">
                                        Keep me signed in
                                    </label>
                                </div>

                                <button class="btn btn-primary w-100 py-2 rounded-3 fw-semibold" type="submit">
                                    Login
                                </button>

                                <button class="btn btn-outline-secondary w-100 mt-3 py-2 rounded-3 fw-semibold">
                                    <i class="bi bi-google me-1"></i> Sign in with Google
                                </button>
                            </form>

                            <p class="text-center  text-muted mt-3">
                                Don’t have a partner account?
                                <router-link to="/" class="fw-semibold text-primary text-decoration-none">Create one →</router-link>
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
import { useAuthStore } from "../stores/authStore";

export default defineComponent({
    name: "Login",

    data() {
        return {
            email: "",
            password: "",
            showPassword: false,
        };
    },

    methods: {
        submitLogin() {
            const auth = useAuthStore();
            const loggedIn = auth.login(this.email, this.password);

            if (!loggedIn) {
                alert("Invalid credentials");
                return;
            }

            this.$router.push("/dashboard");
        },
    },
});
</script>
