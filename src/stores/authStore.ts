import { defineStore } from "pinia";

const USERS_KEY = "portal_users";
const SESSION_KEY = "portal_session";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company?: string;
  website?: string;
  service?: string;
  product?: string;
}

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    users: JSON.parse(localStorage.getItem(USERS_KEY) || "[]") as User[],
    session: JSON.parse(localStorage.getItem(SESSION_KEY) || "null") as User | null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.session,
    fullName: (state) =>
      state.session ? `${state.session.firstName} ${state.session.lastName}` : "",
  },

  actions: {
    saveUsers() {
      localStorage.setItem(USERS_KEY, JSON.stringify(this.users));
    },

    saveSession(user: User) {
      this.session = user;
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    },

    signup(user: User) {
      this.users.push(user);
      this.saveUsers();
      this.saveSession(user);
    },

    login(email: string, password: string) {
      const found = this.users.find(
        (u) => u.email === email && u.password === password
      );
      if (!found) return false;
      this.saveSession(found);
      return true;
    },

    logout() {
      this.session = null;
      localStorage.removeItem(SESSION_KEY);
    },
  },
});
