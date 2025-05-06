function createMaze(width, height) {
    // Visited cells tracker using Set of "x,y" strings
    let hasVisited = new Set();

    if (width % 2 === 0 || height % 2 === 0) {
        alert("Maze dimensions should be odd numbers!");
    } else if (width < 5 || height < 5) {
        alert("Maze dimensions should be greater than or equal to 5!");
    } else {
        populate2DObject(width, height);
        
        hasVisited.add(startingNode);

        visit(startingNode);
        maze[startingNode] = start;
        maze[makeKey(width-2,height-2)] = end;

        clearCanvas();
        drawMaze(maze);
    }

    function visit(node) {
        const [north, south, east, west] = ["n", "s", "e", "w"];

        maze[node] = path;

        const [x, y] = getCoords(node);

        while (true) {
            let unvisitedNeighbors = [];

            if (y > 1 && !hasVisited.has(makeKey(x,y-2))) {
                unvisitedNeighbors.push(north);
            }
            if (y < height - 2 && !hasVisited.has(makeKey(x,y+2))) {
                unvisitedNeighbors.push(south);
            }
            if (x > 1 && !hasVisited.has(makeKey(x-2,y))) {
                unvisitedNeighbors.push(west);
            }
            if (x < width - 2 && !hasVisited.has(makeKey(x+2,y))) {
                unvisitedNeighbors.push(east);
            }

            if (unvisitedNeighbors.length === 0) {
                return;
            } else {
                let nextDirection = unvisitedNeighbors[Math.floor(Math.random() * unvisitedNeighbors.length)];

                let nextX = x, nextY = y;

                if (nextDirection === north) {
                    nextY = y - 2;
                    maze[makeKey(x,y-1)] = path;
                } else if (nextDirection === south) {
                    nextY = y + 2;
                    maze[makeKey(x,y+1)] = path;
                } else if (nextDirection === west) {
                    nextX = x - 2;
                    maze[makeKey(x-1,y)] = path;
                } else if (nextDirection === east) {
                    nextX = x + 2;
                    maze[makeKey(x+1,y)] = path;
                }

                nextNode = makeKey(nextX,nextY);

                hasVisited.add(makeKey(nextX,nextY));
                visit(nextNode);
            }
        }
    }

    // Populate the maze
    function populate2DObject(width, height) {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                maze[makeKey(x,y)] = wall; // Every space is a wall at first
            }
        }
    }
}