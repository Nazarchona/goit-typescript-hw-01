type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends keyof AllType>(top: Pick<AllType, T>, bottom: Pick<AllType, T>): Partial<AllType> {
  const result: Partial<AllType> = {};

  if ('name' in top && 'name' in bottom) {
    result.name = top.name as string;
  }

  if ('color' in top) {
    result.color = top.color as string;
  }

  if ('position' in bottom) {
    result.position = bottom.position as number;
  }

  if ('weight' in bottom) {
    result.weight = bottom.weight as number;
  }

  return result as AllType;
}

