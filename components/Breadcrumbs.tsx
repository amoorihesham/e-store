import Link from "next/link";

const Breadcrumbs = ({
  mainPath,

  id,
}: {
  mainPath: string;

  id: string;
}) => {
  return (
    <div>
      <h1>
        <Link
          href={`/${mainPath}`}
          className=" text-muted-foreground text-sm capitalize"
        >
          {mainPath}
        </Link>
        <span> / </span>
        <Link
          href={`/${mainPath}/${id}`}
          className=" text-foreground text-sm capitalize"
        >
          {id}
        </Link>
      </h1>
    </div>
  );
};

export default Breadcrumbs;
