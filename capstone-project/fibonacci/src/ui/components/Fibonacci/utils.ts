export const fibonacci = (n: number): Promise<number> => {
  return new Promise((resolve) => {
    const ctx = {
      n0: 1,
      n1: 1,
      i: 3,
    };

    const calc = () => {
      for (let ops = 1; ctx.i <= n; ++ctx.i, ++ops) {
        if ((ops % 10000) === 0) {
          setTimeout(calc);
          break;
        }

        const temp = ctx.n1;
        ctx.n1 = ctx.n0 + ctx.n1;
        ctx.n0 = temp;
      }

      resolve(ctx.n1);
    }

    setTimeout(calc);
  });
};