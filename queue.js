// eslint-disable-next-line strict
'use strict';

// https://youtu.be/RBSGKlAvoiM?list=PLxfRCInfTk3X47CCNn1AHhzhuUFXp9mPA&t=4632

// const nodes = [1, 2, 3, 4, 5, 6];

// https://miro.medium.com/v2/resize:fit:720/format:webp/1*TMZAR1b_5Jbx4_vA28Q25g@2x.jpeg
const edges = [
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 5],
  [4, 6],
];

// BFS
// 1, 2, 5, 3, 4, 6

// DFS (left-to-right)
// 1, 2, 3, 4, 6, 5

// DFS (right-to-left)
// 1, 5, 2, 3, 4, 6

// https://he-s3.s3.amazonaws.com/media/uploads/fdec3c2.jpg
const edges1 = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
  [1, 5],
  [2, 6],
  [2, 7],
  [3, 7],
];
// BFS
// 0, 1, 2, 3, 4, 5, 6, 7

// DFS (left-to-right)
// 0, 1, 4, 5, 2, 6, 7, 3

// DFS (right-to-left)
// 0, 3, 7, 2, 6, 1, 5, 4

const bfs = function (startingNode, edges) {
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
  console.log('\n');
};

bfs(1, edges);
bfs(0, edges1);

const dfs = function (startingNode, edges) {
  const stack = [];
  const visited = new Set();

  stack.push(startingNode);
  visited.add(startingNode);

  // https://stackoverflow.com/questions/39734597/dfs-algorithm-is-searching-from-right-to-left
  // we go right-to-left, IF not reversed.
  // when reversed, we go left-to-right.
  const reversedEdges = edges.slice().reverse();
  // .reverse() mutates array.

  while (stack.length > 0) {
    const currentNode = stack.pop();

    console.log(currentNode);
    for (const edge of reversedEdges) {
      if (edge[0] === currentNode) {
        if (visited.has(edge[1])) continue;
        visited.add(edge[1]);

        stack.push(edge[1]);
      }
    }
  }
  console.log('\n');
};

dfs(1, edges);
dfs(0, edges1);
