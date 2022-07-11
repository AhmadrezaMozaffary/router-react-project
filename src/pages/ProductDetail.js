import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productID } = useParams();
  return (
    <section>
      <p>Product detail for ID : {productID}</p>
    </section>
  );
};

export default ProductDetail;
