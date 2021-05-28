const breadthFirstSearch = (startPoint, graph, cb) => {
  if (graph.size === 0) {
    return false;
  }
  const searchQueue = [];
  searchQueue.push(...graph.get(startPoint));
  const searched = [];
  do {
    const currentItem = searchQueue.shift();
    if (!searched.includes(currentItem)) {
      if (cb(currentItem)) {
        console.log(currentItem);
        return true;
      }
      searchQueue.push(...graph.get(currentItem));
      searched.push(currentItem);
    }
  } while (searchQueue.length > 0);
  return false;
};

export default breadthFirstSearch;
