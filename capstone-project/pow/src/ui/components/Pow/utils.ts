export const pow = (val: number, p: number): Promise<number> => {
  return new Promise((resolve) => {
    const ctx = {
      val: 1,
      i: 0,
    };

    const calc = () => {
      for (let ops = 1; ctx.i < p; ++ctx.i, ++ops) {
        if ((ops % 10000) === 0) {
          setTimeout(calc);
          break;
        }

        ctx.val *= val;
      }

      resolve(ctx.val);
    }

    setTimeout(calc);
  });
};