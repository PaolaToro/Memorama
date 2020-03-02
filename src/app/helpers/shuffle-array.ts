function shuffleArray<T>(array: T[]): T[] {
  // new array to mutate
  const tempArray = [...array];

  tempArray.sort(() => Math.random() - 0.5);

  return tempArray;
}

export default shuffleArray;
