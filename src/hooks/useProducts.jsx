import axios from "axios";
import { useState } from "react";

export default function useProducts() {
  const [getProductByIdLoading, setGetProductByIdLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const getProductById = async (id) => {
    setGetProductByIdLoading(true);

    const res = await axios.get("https://dummyjson.com/products/" + id);
    const data = await res.data;

    setProduct(data);
    setGetProductByIdLoading(false);
  };

  return {
    getProductById,
    product,
    getProductByIdLoading,
  };
}
