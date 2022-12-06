import {defineStore} from "pinia";
import api from "../api/api";

export const useAppStore = defineStore({
  id: "appStore",
  state: () => ({
    searchQuery: "",
    searchPage: 1,
    isLoading: false,
    searchLastPage: false,
    total: 0,
    error: null,
    data: [],
    openedProduct: [],
    openedSupplement: []
  }),
  actions: {
    async getResult(){
      try {
        this.isLoading = true;
        const response = await api.search(this.searchQuery, this.searchPage);
        this.total = response.data.total;
        this.data = this.data.length === 0 ? response.data.items : this.data.concat(response.data.items);
        this.searchLastPage = response.data.isLastPage;
        this.isLoading = false;
      } catch (e) {
        this.error = e;
        this.isLoading = false;
      }
    },
    async getProduct(barcode){
      try {
        this.isLoading = true;
        const response = await api.product(barcode);
        this.openedProduct = response.data.data[0];
        // this.openedProduct.compositionHtml = this.parseSupplements;
        this.isLoading = false;
      } catch (e) {
        this.error = e;
        this.isLoading = false;
      }
    },
    async getSupplement(supplementId){
      try {
        this.isLoading = true;
        const response = await api.supplement(supplementId);
        this.openedSupplement = response.data[0];
        this.isLoading = false;
      } catch (e) {
        this.error = e;
        this.isLoading = false;
      }
    }
  },
  getters: {
    textSupplements: (state) => {
      const names = state.openedProduct.supplements.map(suppliment => suppliment.name)
      const re = new RegExp(`(${names.join('|')})`);
      const parts = state.openedProduct.composition.split(re);
      return parts.map((part) => ({
        text: part, isSuppliment: names.includes(part)
      }));
    }
    // parseSupplements: (state) => {
    //   let product = _.cloneDeep(state.openedProduct);
    //   let compositionHtml = product.composition;
    //   product.supplements.forEach((supplement) => {
    //     compositionHtml = compositionHtml.replace(supplement.name, `<span @click="openAlert" data-level="${supplement.data.level}">${supplement.name}</span>`)
    //   });
    //   return compositionHtml;
    // }
  }
});
