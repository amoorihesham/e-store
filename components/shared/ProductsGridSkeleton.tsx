import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ProductsGridSkeleton = async () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Card className="py-0 pb-6 group max-h-[412px]" key={idx + 1}>
          <CardHeader className="p-0 h-72 bg-card-foreground/10 animate-pulse"></CardHeader>
          <CardContent>
            <CardTitle className="h-3 w-full bg-accent/100 rounded-full animate-pulse" />
            <div className="flex items-center gap-10 mt-3">
              <div className="w-[20%] h-2 rounded-full bg-accent/100 animate-pulse" />
              <div className="w-[20%] h-2 rounded-full bg-accent/100 animate-pulse" />
            </div>
            <div className="flex items-center gap-10 mt-4">
              <div className="w-[40%] h-2 rounded-full bg-accent/100 animate-pulse" />
              <div className="size-3 rounded-full bg-accent/100 animate-ping" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductsGridSkeleton;
