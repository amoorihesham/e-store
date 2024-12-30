import Link from 'next/link';

const Breadcrumbs = ({ mainPath, secPath, id }: { mainPath: string; secPath: string; id: string }) => {
  return (
    <div>
      <h1>
        <Link
          href={`/${mainPath}`}
          className=' text-muted-foreground text-sm capitalize'>
          {mainPath}
        </Link>
        <span> / </span>
        <Link
          href={`/${secPath}/${id}`}
          className=' text-black text-sm capitalize'>
          {id}
        </Link>
      </h1>
    </div>
  );
};

export default Breadcrumbs;
