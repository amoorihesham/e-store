import Image from "next/image";
import { getFeatures } from "@/lib/sanity/functions";
import { urlFor } from "@/sanity/lib/image";
import MaxWidthContainer from "./MaxWidthContainer";

export default async function FeaturesList() {
  const features = await getFeatures();

  return (
    <MaxWidthContainer className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {features.map((feature) => (
          <div key={feature._id} className=" space-y-3">
            <div className="bg-black rounded-full w-20 h-20 flex items-center justify-center border border-x-8 border-y-8 border-gray-400 mx-auto">
              <Image
                src={urlFor(feature.icon!.asset!._ref!).url()}
                alt={feature.icon!.alt!}
                width={50}
                height={50}
              />
            </div>
            <div className="text-center space-y-1">
              <h6 className="font-semibold text-lg">{feature.title}</h6>
              <p className=" font-light text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthContainer>
  );
}
