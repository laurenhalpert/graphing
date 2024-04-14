// // add edge to the graph
// addEdge(v, w);
// {
//   // get the list for vertex v and put the
//   // vertex w denoting edge between v and w
//   this.AdjList.get(v).push(w);

//   // Since graph is undirected,
//   // add an edge from w to v also
//   this.AdjList.get(w).push(v);
// }

// // Prints the vertex and adjacency list
// printGraph();
// {
//   // get all the vertices
//   var get_keys = this.AdjList.keys();

//   // iterate over the vertices
//   for (var i of get_keys) {
//     // get the corresponding adjacency list
//     // for the vertex
//     var get_values = this.AdjList.get(i);
//     var conc = "";

//     // iterate over the adjacency list
//     // concatenate the values into a string
//     for (var j of get_values) conc += j + " ";

//     // print the vertex and its adjacency list
//     console.log(i + " -> " + conc);
//   }
// }

// // Using the above implemented graph class
// var g = new Graph(6);
// var vertices = ["A", "B", "C", "D", "E", "F"];

// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//   g.addVertex(vertices[i]);
// }

// // adding edges
// g.addEdge("A", "B");
// g.addEdge("A", "D");
// g.addEdge("A", "E");
// g.addEdge("B", "C");
// g.addEdge("D", "E");
// g.addEdge("E", "F");
// g.addEdge("E", "C");
// g.addEdge("C", "F");

// // prints all vertex and
// // its adjacency list
// // A -> B D E
// // B -> A C
// // C -> B E F
// // D -> A E
// // E -> A D F C
// // F -> E C
// g.printGraph();

// // function to performs BFS
// bfs(startingNode);
// {
//   // create a visited object
//   var visited = {};

//   // Create an object for queue
//   var q = new Queue();

//   // add the starting node to the queue
//   visited[startingNode] = true;
//   q.enqueue(startingNode);

//   // loop until queue is empty
//   while (!q.isEmpty()) {
//     // get the element from the queue
//     var getQueueElement = q.dequeue();

//     // passing the current vertex to callback function
//     console.log(getQueueElement);

//     // get the adjacent list for current vertex
//     var get_List = this.AdjList.get(getQueueElement);

//     // loop through the list and add the element to the
//     // queue if it is not processed yet
//     for (var i in get_List) {
//       var neigh = get_List[i];

//       if (!visited[neigh]) {
//         visited[neigh] = true;
//         q.enqueue(neigh);
//       }
//     }
//   }
// }

// // prints
// // BFS
// // A B D E C F
// console.log("BFS");
// g.bfs("A");

// // Main DFS method
// dfs(startingNode);
// {
//   var visited = {};

//   this.DFSUtil(startingNode, visited);
// }

// // Recursive function which process and explore
// // all the adjacent vertex of the vertex with which it is called
// DFSUtil(vert, visited);
// {
//   visited[vert] = true;
//   console.log(vert);

//   var get_neighbours = this.AdjList.get(vert);

//   for (var i in get_neighbours) {
//     var get_elem = get_neighbours[i];
//     if (!visited[get_elem]) this.DFSUtil(get_elem, visited);
//   }
// }

// // prints
// // DFS
// // A B C E D F
// console.log("DFS");
// g.dfs("A");

function Graph() {
  let nodes = new Map();
  this.addVertex = (node) => {
    if (!nodes.has(node)) nodes.set(node, new Set());
  };

  this.addEdge = (node, edge) => {
    if (nodes.has(node) && nodes.has(edge)) {
      nodes.get(node).add(edge);
      nodes.get(edge).add(node);
    }
  };

  this.showConnections = () => {
    nodes.forEach((node, index) => console.log(`${index} -> ${[...node]}`));
  };
}
let nums = ["0", "1", "2", "3", "4", "5", "6"];
let connections = {
  3: ["1", "4"],
  4: ["2", "5"],
  1: ["2", "0"],
  0: ["2"],
  6: ["5"],
};
console.log(connections);
const myGraph = new Graph();
nums.map((num) => myGraph.addVertex(num));

for (const [key, value] of Object.entries(connections)) {
  console.log(`${key}: ${value}`);
  value.map((val) => {
    return myGraph.addEdge(key, val);
  });
}

myGraph.showConnections();
