"use client";
import useCartStore from "@/store/useCartStore";
import Link from "next/link";
import { use, useEffect } from "react";

export const OrderDetailsButton = ({
  orderNumber,
}: {
  orderNumber: Promise<{ orderNumber: string }>;
}) => {
  const { orderNumber: on } = use(orderNumber);
  const { clearCart } = useCartStore();

  useEffect(() => {
    if (on) clearCart();
  }, [clearCart, on]);
  return (
    <Link
      href={`/orders/${orderNumber}`}
      className="border rounded-sm  py-4 px-10 hover:bg-secondary transition-colors duration-300"
      aria-label="view order details page"
    >
      Order Details
    </Link>
  );
};
