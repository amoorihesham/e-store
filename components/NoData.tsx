import Image from 'next/image';

export default function NoData({ message }: { message: string }) {
  return (
    <div className='flex items-center justify-center flex-col'>
      <Image
        src={'/images/notFound.svg'}
        alt='not found'
        width={500}
        height={500}
      />
      <h6 className='text-2xl font-light'>{message}</h6>
    </div>
  );
}
