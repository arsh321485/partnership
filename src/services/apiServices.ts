import { useAuthStore } from "../store/authStore";
import { useDealStore } from "../store/dealStore";

export const api = {
  signup(user: any) {
    const auth = useAuthStore();
    auth.signup(user);
    return true;
  },

  login(email: string, password: string) {
    const auth = useAuthStore();
    return auth.login(email, password);
  },

  addDeal(deal: any) {
    const deals = useDealStore();
    deals.addDeal(deal);
  },
};
