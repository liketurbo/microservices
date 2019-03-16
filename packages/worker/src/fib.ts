const fib = (index: string | number): string => {
  index = parseInt(index as any, 10);

  if (index < 2) return '1';
  return fib(index - 1) + fib(index - 2) + '';
};

export default fib;
