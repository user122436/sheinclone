import { useParams } from "react-router";

export default function ProductsPage() {
  const { categoryName } = useParams();

  return <h1>This is ProductsPage category: {categoryName}</h1>;
}
