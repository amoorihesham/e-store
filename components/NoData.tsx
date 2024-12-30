import { getNoDataImage } from '@/lib/sanity/functions';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

export default async function NoData({ message }: { message: string }) {
  const image = await getNoDataImage();
  return (
    <div className='flex items-center justify-center flex-col'>
      <Image
        src={urlFor(image[0].image!.asset!._ref!).url()}
        alt={image[0].image!.alt!}
        width={250}
        height={200}
        objectFit='contain'
      />
      <h6 className='text-2xl font-light'>{message}</h6>
    </div>
  );
}
