import {
  useProducts,
  useCreateProduct,
  useUpdateProduct,
  useDeleteProduct,
} from "../features/products/useProducts";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

import Card from "../components/Card";
import Button from "../components/Button";
import Loader from "../components/Loader";

export default function ProductsPage() {
  const { data, isLoading, error, isSuccess } = useProducts();

  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const deleteMutation = useDeleteProduct();

  const dispatch = useDispatch();

  if (isLoading) return <Loader />;
  if (error) return <h2>Error loading products</h2>;

  if (isSuccess) {
    return (
      <div>
        <h1>Products</h1>

        {/* CREATE */}
        <Button
          onClick={() =>
            createMutation.mutate({
              title: "New Product",
              price: 100,
            })
          }
        >
          Create Product
        </Button>

        {data.map((product) => (
          <Card key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            {/* ADD TO CART */}
            <Button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </Button>

            {/* UPDATE */}
            <Button
              onClick={() =>
                updateMutation.mutate({
                  id: product.id,
                  data: {
                    title: product.title + " Updated",
                    price: product.price + 10,
                  },
                })
              }
            >
              Update
            </Button>

            {/* DELETE */}
            <Button
              onClick={() => deleteMutation.mutate(product.id)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    );
  }
}