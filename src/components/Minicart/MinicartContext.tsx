import { createContext, Dispatch, useEffect, useState } from "react";

interface IContext {
  items: IMinicartItem[];
  total: number;
  show: boolean;
  order: number;
  orderDate: string;
  addToCart: any;
  removeToCart: any;
  showMinicart: any;
  emptyCart: any;
  setOrder: Dispatch<number>;
  setOrderDate: Dispatch<string>;
}
interface IPokemon {
  id: number;
  image: string;
  name: string;
  price: number;
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

export const MinicartContext = createContext({} as IContext);

export const MinicartStorage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [order, setOrder] = useState(0);
  const [orderDate, setOrderDate] = useState<any>("");
  const [items, setItems] = useState<any>([]);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const priceTotal = items.reduce((total: number, item: IMinicartItem) => {
      return item.price + total;
    }, 0);

    setTotal(priceTotal);
  }, [items]);

  function addToCart(pokemon: IPokemon) {
    const itemExists = items.find(
      (item: IMinicartItem) => item.id === pokemon.id,
    );

    if (!itemExists) {
      setItems([...items, pokemon]);
    } else {
      alert("Pokemon has already been added to the cart");
    }
  }

  function removeToCart(id: number) {
    const newItems = items.filter((item: IMinicartItem) => {
      return item.id !== id;
    });
    setItems(newItems);
  }

  function showMinicart() {
    setShow(!show);
  }

  function emptyCart() {
    setShow(false);
    setItems([]);
    setOrder(0);
    setOrderDate("");
  }

  return (
    <MinicartContext.Provider
      value={{
        items,
        total,
        show,
        order,
        orderDate,
        addToCart,
        removeToCart,
        showMinicart,
        emptyCart,
        setOrder,
        setOrderDate,
      }}
    >
      {children}
    </MinicartContext.Provider>
  );
};
