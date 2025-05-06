const mazeWidth = document.getElementById('width');
const mazeHeight = document.getElementById('height');
const mazeContainer = document.getElementById('maze-container');
const buttonGenerate = document.getElementById('btn-generateMaze');
const buttonVisualize = document.getElementById('btn-visualize');
const buttonPause = document.getElementById('btn-pause');
const buttonResume = document.getElementById('btn-resume');
const algorithm = document.getElementById('algorithm');
const speed = document.getElementById('speed');
const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');

// Maze state
const maze = {};

// Characters in the maze
const path = " ";
const wall = "█";
const start = "S";
const end = "E";

const startingNode = makeKey(1,1);

let isPaused = false;
let resume; // Hold the function to call to "unpause"
let paused = Promise.resolve();


async function solveMaze(algorithm, maze) {
    toggleEnableButton(buttonGenerate);
    toggleShowButton(buttonVisualize);
    toggleShowButton(buttonPause);
    switch(algorithm) {
        case "bfs":
            const resultBFS = bfs(maze); // Breadth-First Search
            await renderPaths(resultBFS);
            break;
        case "dfs":
            const resultDFS = dfs(maze); // Depth-First Search
            await renderPaths(resultDFS);
            break;
    }
    toggleShowButton(buttonPause);
    toggleShowButton(buttonVisualize);
    toggleEnableButton(buttonVisualize);
    toggleEnableButton(buttonGenerate);
}

// Event Listeners
buttonGenerate.addEventListener("click", handleGenerateClick);
buttonVisualize.addEventListener("click", handleVisualizeClick);
buttonPause.addEventListener("click", pause);
buttonResume.addEventListener("click", unpause);