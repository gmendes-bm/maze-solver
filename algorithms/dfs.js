// Depth-First Search logic
function dfs(maze) {
    let stack = [[startingNode]];
    let hasVisited = new Set();
    hasVisited.add(startingNode);

    let nodesToPaint = [];

    while (stack.length > 0) {
        let path = stack.pop();
        let currentNode = path[path.length - 1];

        nodesToPaint.push(currentNode);  // Store nodes to be painted later

        if (maze[currentNode] === end) {
            console.log("DFS: Solved!!!");
            return { nodesToPaint, path };
        } else {
            addNeighbors(currentNode, stack, hasVisited, path);
        }
    }
}