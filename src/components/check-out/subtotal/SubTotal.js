import { Fragment } from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
const SubTotal = (props) => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal (0 items) : <strong>$0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="text" /> This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default SubTotal;
