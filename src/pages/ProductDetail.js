import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productID } = useParams();
  return (
    <section>
      <p>Product detail for ID : {productID}</p>
      <Link to="/products">&larr;</Link>
    </section>
  );
};

export default ProductDetail;
