import { defineStore } from "pinia";
import api from "@/api/api";

export const useAppStore = defineStore({
  id: "appStore",
  state: () => ({
    searchQuery: "",
    isLoading: false,
    error: null,
    data: [],
    openedProduct: [],
  }),
  actions: {
    async getResult(){
      try {
        this.isLoading = true;
        const response = await api.search(this.searchQuery);
        this.data = response.data.items;
        this.isLoading = false;
      } catch (e) {
        this.error = e;
        this.isLoading = false;
      }
    },
    async getProduct(pr){
      try {
        this.isLoading = true;
        const response = await api.product(pr);
        this.openedProduct = response.data.data[0];
        this.isLoading = false;
      } catch (e) {
        this.error = e;
        this.isLoading = false;
      }
    }
  },
});
