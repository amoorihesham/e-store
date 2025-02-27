const Loader = () => {
  return (
    <div className='flex items-center justify-center h-svh'>
      <div
        className='inline-block h-12 w-12 animate-spin rounded-full border-2 border-solid border-primaryRed border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
        role='status'
      />
    </div>
  );
};

export default Loader;
