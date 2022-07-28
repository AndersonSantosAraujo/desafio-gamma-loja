import { MinicartContext } from "components/Minicart/MinicartContext";
import ProductItem from "components/Minicart/ProductItem";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router";
import styles from "./Checkout.module.scss";
import { useContext, useEffect } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const minicartCX = useContext(MinicartContext);
  const ModalSwal = withReactContent(Swal);

  useEffect(() => {
    minicartCX.setOrder(Date.now());
    minicartCX.setOrderDate(new Date().toLocaleString());
  }, []);

  async function handleModal() {
    const { value: accept } = await ModalSwal.fire({
      position: "center",
      icon: "success",
      title: "Purchase made successfully!",
      showConfirmButton: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
    });

    const order = {
      order: minicartCX.order,
      orderDate: minicartCX.orderDate,
      items: minicartCX.items,
      total: minicartCX.total,
    };

    if (accept) {
      localStorage.setItem(`oder|${order.order}`, JSON.stringify(order));
      minicartCX.emptyCart();
      navigate(`/`);
    }
  }

  interface IMinicartItem {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
    stats: [
      {
        base_stat: number;
        effort: number;
        stat: { name: string; url: string };
      },
    ];
    types: [{ slot: number; type: { name: string; url: string } }];
  }

  return (
    <main className={`container ${styles["checkout"]}`}>
      <div className={styles["checkout__header"]}>
        <h1>Checkout</h1>
        <p>
          Order: <span>{minicartCX.order}</span>
        </p>
        <p>
          Order In: <span>{minicartCX.orderDate}</span>
        </p>
      </div>

      <div className={styles["checkout__body"]}>
        <ul>
          {minicartCX.items.map((item: IMinicartItem) => (
            <li key={item.id}>
              <ProductItem {...item} />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles["checkout__footer"]}>
        <p>
          Order Total: <span>$ {minicartCX.total}.00</span>
        </p>
        <button onClick={handleModal}>Finish</button>
      </div>
    </main>
  );
};

export default Checkout;
