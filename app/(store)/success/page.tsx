import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { OrderDetailsButton } from "./_components/OrderDetails";
import { currentUser } from "@clerk/nextjs/server";

const SuccessPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ orderNumber: string }>;
}) => {
  const user = await currentUser();
  return (
    <MaxWidthContainer className="py-8 flex items-center justify-center h-[calc(100dvh-(79px+60px))]">
      <div className="bg-secondary/60 py-6 border rounded-md w-2xl mx-auto">
        <div className="flex items-center justify-center">
          <Image
            src="/images/check-img.png"
            width={140}
            height={200}
            alt="Payment successful"
          />
        </div>
        <div className="flex flex-col items-center mt-5 gap-y-3 ">
          <h3 className="text-xl tracking-wider font-medium ">
            Hey, {user?.username}
          </h3>
          <p className="text-5xl font-semibold">Your Order Is Paid</p>
          <p className="text-lg text-muted-foreground max-w-xs text-center">
            We&apos;ll send you a confirmation email as soon as your order ships
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Suspense>
              <OrderDetailsButton orderNumber={searchParams} />
            </Suspense>
            <Link
              href={`/`}
              className="bg-chart-2 px-10 py-4 text-foreground rounded-sm hover:bg-chart-2/80 transition-colors duration-300"
              aria-label="redirect to home page link"
            >
              Continuo Shopping
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default SuccessPage;
