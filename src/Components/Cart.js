import { useSelector,useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    const remove = (id) => {
      return () => {
        dispatch(removeFromCart(id));
      };
    };
    const cards = cartItems.map((product) => (
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
          <Button variant="danger" onClick={remove(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
     <h1 className="text-center">Cart</h1>
      <div className="row">{cards}</div>
    </div>
  )
}

export default Cart
