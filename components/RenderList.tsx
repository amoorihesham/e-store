import { ElementType, Key, ReactNode } from 'react';

interface IRenderListProps<T> {
  data: T[];
  listHeading: string | (() => ReactNode);
  keyExtractor: (item: T) => Key;
  render: (item: T, index: number) => ReactNode;
  EmptyComponent?: ElementType | (() => JSX.Element);
}

const RenderList = <T,>({ keyExtractor, listHeading, data, render, EmptyComponent }: IRenderListProps<T>) => {
  if (data.length === 0) {
    if (EmptyComponent) return <EmptyComponent />;

    return (
      <div>
        <h2>No Data Found</h2>
      </div>
    );
  }

  return (
    <div>
      {typeof listHeading == 'string' && <h2 className='text-2xl font-bold'>{listHeading}</h2>}
      {typeof listHeading == 'function' && listHeading()}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-8 overflow-x-auto'>
        {data.map((item, index) => (
          <div
            className='rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group '
            key={keyExtractor(item)}>
            {render(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderList;
