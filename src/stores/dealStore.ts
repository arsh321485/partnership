import { defineStore } from "pinia";

const DEALS_KEY = "portal_deals";

export interface Deal {
  number: string;
  name: string;
  customer: string;
  value: number;
  status: string;
  stage: string;
  closeDate: string;
  date: string;
}

export const useDealStore = defineStore("dealStore", {
  state: () => ({
    deals: JSON.parse(localStorage.getItem(DEALS_KEY) || "[]") as Deal[],
  }),

  actions: {
    saveDeals() {
      localStorage.setItem(DEALS_KEY, JSON.stringify(this.deals));
    },

    loadSeedDeals() {
      if (this.deals.length) return;

      this.deals = [
        {
          number: "DR-2025-156",
          name: "Acme Corp - Enterprise Package",
          customer: "Acme Corporation",
          value: 75000,
          status: "Approved",
          stage: "Qualified",
          closeDate: "2025-12-15",
          date: "Today · 10:15 AM"
        }
      ];

      this.saveDeals();
    },

    addDeal(deal: Deal) {
      this.deals.push(deal);
      this.saveDeals();
    },

    totalDeals() {
      return this.deals.length;
    },

    totalValue() {
      return this.deals.reduce((sum, d) => sum + d.value, 0);
    },
  },
});
