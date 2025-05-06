// Breadth-First Search logic
function bfs(maze) {
    let queue = [[startingNode]];
    let hasVisited = new Set();
    hasVisited.add(startingNode);

    let nodesToPaint = [];

    while (queue.length > 0) {
        let path = queue.shift();
        let currentNode = path[path.length - 1];

        nodesToPaint.push(currentNode);  // Store nodes to be painted later

        if (maze[currentNode] === end) {
            console.log("BFS: Solved!!!");
            return { nodesToPaint, path };

        } else {
            addNeighbors(currentNode, queue, hasVisited, path);
        }
    }
}