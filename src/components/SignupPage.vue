<template>
    <div class="signup-page d-flex align-items-center justify-content-center py-4">

        <div class="container">
            <div class="row justify-content-center">

                <div class="col-12 col-lg-10 signup-card d-flex p-0 shadow-lg">

                    <!-- LEFT IMAGE -->
                    <div
                        class="col-12 col-md-6 p-0 d-none d-md-flex d-flex align-items-center justify-content-center bg-dark rounded-start-4  left-image">
                        <img src="@/assets/images/signup-img.png"
                            class="img-fluid w-100 h-100 object-fit-cover rounded-start-4" alt="security" />

                    </div>

                    <!-- RIGHT FORM -->
                    <div
                        class="col-12 col-md-6 bg-white rounded-end-4 d-flex align-items-center justify-content-center p-3">
                        <div class="w-100" style="max-width: 380px">


                            <h3 class="fw-bold mb-3 text-center">Sign up</h3>

                            <form>

                                <div class="row g-2">
                                    <div class="col-6">
                                        <label class="form-label mb-0">First Name</label>
                                        <input type="text" v-model="fname" class="form-control  rounded-3" required />
                                    </div>
                                    <div class="col-6">
                                        <label class="form-label mb-0">Last Name</label>
                                        <input type="text" v-model="lname" class="form-control  rounded-3" required />
                                    </div>
                                </div>

                                <label class="form-label mt-2 mb-0">Business Email</label>
                                <input type="email" v-model="email" class="form-control rounded-3" required />


                                <div class="mb-2 position-relative">
                                    <label class="form-label mt-2 mb-0">Password</label>

                                    <input :type="showPassword ? 'text' : 'password'" v-model="password"
                                        class="form-control rounded-3 pe-5" placeholder="••••••••" required />

                                    <!-- Eye Icon -->
                                    <i class="bi" :class="showPassword ? 'bi-eye-slash' : 'bi-eye'"
                                        @click="showPassword = !showPassword" style="position: absolute;
           right: 15px;
           top: 72%;
           transform: translateY(-50%);
           cursor: pointer;
           font-size: 1.15rem;
           color: #6b7280;">
                                    </i>
                                </div>


                                <label class="form-label mt-2 mb-0">Company Name</label>
                                <input type="text" v-model="company" class="form-control  rounded-3" required />

                                <label class="form-label mt-2 mb-0">Website</label>
                                <input type="url" placeholder="https://yourcompany.com" v-model="website"
                                    class="form-control  rounded-3" />



                            
                                <!-- SERVICES MULTISELECT -->
                                <div class="mb-2 position-relative service-multiselect-container">
                                    <label class="form-label mt-2 mb-0">Services</label>

                                    <!-- Fake input -->
                                    <div class="service-multiselect-box form-control rounded-3 d-flex align-items-center justify-content-between"
                                        @click.stop="toggleServiceDropdown">
                                        <div class="d-flex flex-wrap gap-1">
                                            <span v-if="!selectedServices.length" class="text-muted small">Select
                                                Services</span>

                                            <span v-for="service in selectedServices" :key="service"
                                                class="badge rounded-pill bg-light text-dark border small">
                                                {{ serviceShortNames[service] }}
                                            </span>
                                        </div>

                                        <i class="bi"
                                            :class="showServiceDropdown ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
                                    </div>

                                    <!-- DROPDOWN -->
                                    <div v-show="showServiceDropdown" class="service-multiselect-menu shadow-sm p-2"
                                        @click.stop>
                                        <div v-for="opt in serviceOptions" :key="opt.value" class="form-check mb-1">
                                            <input class="form-check-input" type="checkbox" :id="'srv-' + opt.short"
                                                :value="opt.value" v-model="selectedServices" />
                                            <label class="form-check-label small" :for="'srv-' + opt.short">
                                                {{ opt.label }} <span class="text-muted">({{ opt.short }})</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>





                                <router-link to="/dashboard"
                                    class="text-decoration-none fw-semibold btn btn-primary w-100 mt-4 py-2 rounded-3"
                                    type="submit">
                                    Create Partner Account
                                </router-link>

                            </form>


                            <div class="d-flex justify-content-center mb-2">
                                <p class="me-2">Already have an account? </p>


                                <router-link to="/login" class="text-decoration-none text-primary fw-semibold ">
                                    Login →
                                </router-link>
                            </div>

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
    data() {
        return {
            fname: "",
            lname: "",
            email: "",
            password: "",
            company: "",
            website: "",
            service: "",
            showPassword: false,
            selectedServices: [] as string[],
            showServiceDropdown: false,

            serviceOptions: [
                { value: "SecureITLab Consulting Services", label: "SecureITLab Consulting Services", short: "SCS" },
                { value: "SecureITLab Assurance Services", label: "SecureITLab Assurance Services", short: "SAS" },
                { value: "SecureITLab Managed Services", label: "SecureITLab Managed Services", short: "SMS" },
                { value: "TestMyPlan", label: "TestMyPlan", short: "TMP" },
                { value: "VAPTFiX", label: "VAPTFiX", short: "VP" },
                { value: "HI@WORK", label: "HI@WORK", short: "HW" },
            ],

            serviceShortNames: {
                "SecureITLab Consulting Services": "SCS",
                "SecureITLab Assurance Services": "SAS",
                "SecureITLab Managed Services": "SMS",
                "TestMyPlan": "TMP",
                "VAPTFiX": "VP",
                "HI@WORK": "HW",
            } as Record<string, string>,
        };
    },

    methods: {
        toggleServiceDropdown() {
            this.showServiceDropdown = !this.showServiceDropdown;
        },
        handleClickOutside() {
            this.showServiceDropdown = false;
        },
    },

    mounted() {
        document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }
});
</script>
