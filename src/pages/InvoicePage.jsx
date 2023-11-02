import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";

export default function InvoicePage() {
  const { getProductById, product, getProductByIdLoading } = useProducts();

  const { productId } = useParams();

  useEffect(() => {
    async function get() {
      await getProductById(productId);
    }
    get();

    console.log("loaded");
  }, [productId]);

  if (getProductByIdLoading) {
    return <div>Loading...</div>;
  }

  return <>{JSON.stringify(product)}</>;
}
