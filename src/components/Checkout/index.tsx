import { MinicartContext } from "components/Minicart/MinicartContext";
import ProductItem from "components/Minicart/ProductItem";
import React from "react";
import styles from "./Checkout.module.scss";
import Modal from "./Modal";

const Checkout = () => {
  const minicartCX = React.useContext(MinicartContext);
  minicartCX.show = false;

  return (
    <>
      {console.log(
        "Items: ",
        minicartCX.items,
        "Total: ",
        minicartCX.total,
        "Order: ",
        Date.now(),
        new Date(),
      )}
      <main className={`container`}>
        <div>Items comprados</div>
        <ul>
          {minicartCX.items.map((item: any) => (
            <li key={item.id}>
              <ProductItem {...item} />
            </li>
          ))}
        </ul>
        <button>Finalizar compra</button>
      </main>
      <Modal />
    </>
  );
};

export default Checkout;
