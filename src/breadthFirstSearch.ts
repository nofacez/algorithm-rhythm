export const breadthFirstSearch = <T>(
  startPoint: T,
  graph: Map<T, T[]>,
  cb: (key: T) => boolean
): boolean => {
  if (graph.size === 0) return false;
  if (!startPoint) return false;

  const searchQueue: T[] = [];

  const startPointGraph = graph.get(startPoint);
  if (!startPointGraph) return false;

  searchQueue.push(...startPointGraph);
  const searched: T[] = [];

  do {
    const currentItem = searchQueue.shift();
    if (!currentItem) return false;
    if (!searched.includes(currentItem)) {
      if (cb(currentItem)) {
        return true;
      }
      const currentItemGraph = graph.get(currentItem);
      if (!currentItemGraph) break;

      searchQueue.push(...currentItemGraph);
      searched.push(currentItem);
    }
  } while (searchQueue.length > 0);

  return false;
};
