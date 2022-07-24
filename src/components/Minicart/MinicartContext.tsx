import React from "react";
export const MinicartContext = React.createContext({} as any);

interface Props {
  id: number;
  image: string;
  name: string;
  price: number;
}

export const MinicartStorage = ({ children }: any) => {
  const [items, setItems] = React.useState<any>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    const priceTotal = items.reduce((total: number, item: any) => {
      return item.price + total;
    }, 0);

    setTotal(priceTotal);
  }, [items]);

  function addToCart(pokemon: Props) {
    const itemExists = items.find((item: any) => item.id === pokemon.id);

    if (!itemExists) {
      setItems([...items, pokemon]);
    } else {
      alert("Item já foi adicionado ao carrinho!");
    }
  }

  function removeToCart(id: number) {
    const newItems = items.filter((item: any) => {
      return item.id !== id;
    });
    setItems(newItems);
  }

  function showMinicart() {
    setShow(!show);
  }

  return (
    <MinicartContext.Provider
      value={{ items, total, show, addToCart, removeToCart, showMinicart }}
    >
      {children}
    </MinicartContext.Provider>
  );
};
