import axios from "@/api/axios";

const search = (product) => {
  return axios.get("/api/products/search", {
    params: {
      q: product,
    },
  });
};

const product = (id) => {
  return axios.get(`/api/products/${id}`);
}

export default { search, product };