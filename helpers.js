function handleGenerateClick() {
    initMazeDimensions(mazeWidth.value, mazeHeight.value);
    createMaze(mazeWidth.value, mazeHeight.value);
    buttonVisualize.disabled = false;  // Enable Visualize button after maze generation
}

function handleVisualizeClick() {
    solveMaze(algorithm.value, maze);
}

// Make x,y into a string
function makeKey(x, y) {
    return `${x},${y}`;
}

// Get coordinates from object key
function getCoords(key) {
    return key.split(',').map(Number);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addNeighbors(node, struct, hasVisited, currentPath) {
    const [x, y] = getCoords(node);
    const neighbors = [
        makeKey(x, y - 1), // North
        makeKey(x, y + 1), // South
        makeKey(x - 1, y), // West
        makeKey(x + 1, y)  // East
    ];

    neighbors.forEach(neighbor => {
        if (maze[neighbor] !== wall && !hasVisited.has(neighbor)) {
            hasVisited.add(neighbor);
            struct.push([...currentPath, neighbor]);
        }
    });
}

function toggleShowButton(button) {
    button.hidden = !button.hidden;
}

function toggleEnableButton(button) {
    button.disabled = !button.disabled;
}

function pause() {
    toggleShowButton(buttonPause);
    toggleShowButton(buttonResume);
    isPaused = true;
    // Create a new Promise and store its resolver
    paused = new Promise(resolve => {
        resume = resolve;
    });
}

function unpause() {
    toggleShowButton(buttonResume);
    toggleShowButton(buttonPause);
    if (isPaused && resume) {
        isPaused = false;
        resume(); // Resolves the paused promise
    }
}