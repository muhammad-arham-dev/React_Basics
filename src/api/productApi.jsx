import { api } from "./axios";

// Get products
export const getProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

// Create product (mock example)
export const createProduct = async (product) => {
  const res = await api.post("/products", product);
  return res.data;
};

// Delete product
export const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

// Update product
export const updateProduct = async ({ id, data }) => {
  const res = await api.put(`/products/${id}`, data);
  return res.data;
};