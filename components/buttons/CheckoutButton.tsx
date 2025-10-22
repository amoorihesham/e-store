"use client";
import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { Loader, Save } from "lucide-react";
import useCartStore from "@/store/useCartStore";
import { CreateCheckout } from "@/actions";
import { toast } from "@/hooks/use-toast";

const CheckoutButton = () => {
  const { items } = useCartStore();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const response = await CreateCheckout(items);

      if (!response.success) {
        toast({
          variant: "destructive",
          title: response.error,
          description: response.message,
        });
        return;
      }

      window.location.href = response.checkout_url!;
    });
  };

  return (
    <Button
      disabled={isPending}
      className="w-full py-6 capitalize text-lg font-semibold cursor-pointer"
      aria-label="checkout button"
      onClick={handleClick}
    >
      {isPending ? (
        <>
          <Loader /> checking out...
        </>
      ) : (
        <>
          <Save /> checkout now
        </>
      )}
    </Button>
  );
};

export default CheckoutButton;
