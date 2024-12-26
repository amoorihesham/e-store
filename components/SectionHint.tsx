export default async function SectionHint({ hint }: { hint: string }) {
  return (
    <div className='flex items-center gap-3 mb-7'>
      <span className='w-4 h-10 rounded-sm bg-primaryRed flex' />
      <p className=' text-lg capitalize text-primaryRed'>{hint}</p>
    </div>
  );
}
