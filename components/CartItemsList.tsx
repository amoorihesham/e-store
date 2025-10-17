"use client";
import Image from "next/image";
import useCartStore from "@/store/useCartStore";
import ClearCartButton from "./ClearCartButton";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const { items } = useCartStore();

  if (!items.length)
    return (
      <div className="flex items-center justify-center flex-col h-full">
        <Image
          src={"/images/not-found.png"}
          alt={"Not Found Image"}
          width={250}
          height={200}
          className="w-2/3"
        />
      </div>
    );

  return (
    <>
      {items.map((item) => (
        <CartItem {...item} key={item._id} />
      ))}
      <ClearCartButton />
    </>
  );
};

export default CartItemsList;
