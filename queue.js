// eslint-disable-next-line strict
'use strict';

// https://youtu.be/RBSGKlAvoiM?list=PLxfRCInfTk3X47CCNn1AHhzhuUFXp9mPA&t=4632

// const nodes = [1, 2, 3, 4, 5, 6];

const edges = [
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 5],
  [4, 6],
];

const bfs = function (startingNode) {
  const queue = [];
  const visited = new Set();

  queue.push(startingNode);
  visited.add(startingNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    console.log(currentNode);

    for (const edge of edges) {
      if (edge[0] === currentNode) {
        if (visited.has(edge[1])) continue;
        visited.add(edge[1]);
        queue.push(edge[1]);
      }
    }
  }
};

bfs(1);
