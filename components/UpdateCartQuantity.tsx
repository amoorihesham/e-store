"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { cartItem } from "@/store/useCartStore";
import React, { SetStateAction } from "react";

type UpdateCartQuantityProps = {
  productDetails: cartItem;
  setProductDetails: React.Dispatch<SetStateAction<cartItem>>;
};

const UpdateCartQuantity = ({
  productDetails,
  setProductDetails,
}: UpdateCartQuantityProps) => {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        className="cursor-pointer"
        disabled={productDetails.quantity === 1}
        onClick={() =>
          setProductDetails((prev) => ({
            ...prev,
            quantity: prev.quantity - 1,
          }))
        }
      >
        <Minus size={25} className="text-foreground" />
      </Button>
      <p className="font-semibold">{productDetails.quantity}</p>
      <Button
        variant={"outline"}
        size="icon"
        className="cursor-pointer"
        onClick={() =>
          setProductDetails((prev) => ({
            ...prev,
            quantity: prev.quantity + 1,
          }))
        }
      >
        <Plus size={25} className="text-foreground" />
      </Button>
    </div>
  );
};

export default UpdateCartQuantity;
