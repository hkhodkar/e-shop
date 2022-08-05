import { Fragment } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../providers/StateProvider";
import { getBasketTotal } from "../../../providers/reducer";

import "./SubTotal.css";
const SubTotal = (props) => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({basket.length} items) :{" "}
              <strong>${getBasketTotal(basket)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default SubTotal;
