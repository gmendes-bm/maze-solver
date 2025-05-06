let availableWidth, availableHeight;
let dimCell, padding;
let canvasWidth, canvasHeight;

// Initialize global variables
function initMazeDimensions(width, height) {
    availableWidth = window.innerWidth - 60;
    availableHeight = window.innerHeight - 250;
    
    // Get size of cell based on the dimension of the maze
    dimCell = Math.floor(Math.min(35, availableWidth / width, availableHeight / height));
    padding = dimCell/40;

    // Define dimension of the canvas, to change dinamically with window size
    canvasWidth = (dimCell + padding) * width - padding;
    canvasHeight = (dimCell + padding) * height - padding;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
}

// Draw the maze in the canvas
function drawMaze(maze) {
    // Get key,value pair from maze object
    for (const [node, value] of Object.entries(maze)) {
        const [x, y] = getCoords(node);
        
        // Define the color of the cell
        switch(value) {
            case wall:
                ctx.fillStyle = 'black'; // For walls
                break;
            case path:
                ctx.fillStyle = 'white'; // For paths
                break;
            case start:
                ctx.fillStyle = 'green'; // For starting node
                break;
            case end:
                ctx.fillStyle = 'red'; // For end node
                break;
        }
        
        // Draw cell
        ctx.fillRect(x*(dimCell+padding), y*(dimCell+padding), dimCell, dimCell);
    } 
}

// Draw square corresponding to a visited cell by the search algorithm
function drawCell(node, color) {
    const [x, y] = getCoords(node);

    ctx.fillStyle = color;
    // Draw cell
    ctx.fillRect(x*(dimCell+padding), y*(dimCell+padding), dimCell, dimCell);
}

async function paintNodes(nodesToPaint, color) {
    for (let i = 1; i < nodesToPaint.length - 1; i++) {
        await paused; // Wait if currently paused
        drawCell(nodesToPaint[i], color);
        await sleep(speed.value); // Wait for speed delay
    }
}

async function renderPaths(result) {
    await paintNodes(result.nodesToPaint, '#f1c40f');
    await paintNodes(result.path, '#3498db');
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}