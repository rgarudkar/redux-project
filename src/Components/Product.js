import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

  const addProduct = (product) => {
    return () => {
      dispatch(addToCart(product));
    };  
  };

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "150px", width: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR.{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white", borderTop: "none" }}>
          <Button variant="primary" onClick={addProduct(product)}>ADD TO CART</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="text-center">Products</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
