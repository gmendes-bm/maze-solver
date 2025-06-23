# Pathfinding Algorithm Visualizer

A web-based interactive tool for generating mazes and visualizing pathfinding algorithms. This project demonstrates core graph traversal algorithms (Breadth-First Search and Depth-First Search) and maze generation techniques with real-time visualization capabilities.  Built with JavaScript, HTML, and CSS.

**Live Demo:** [https://gmendes-bm.github.io/maze-solver/](https://gmendes-bm.github.io/maze-solver/)


## Key Features

* **Maze Generation:** Uses a recursive backtracking algorithm to create random mazes.  Customizable width and height. Responsive canvas rendering adapts to different screen sizes.
* **Pathfinding Algorithms:**  Implements BFS and DFS. Allows selection of the algorithm to visualize.
* **Visualization Controls:**  Adjustable animation speed controls the pace of the visualization. Pause/Resume functionality allows for detailed inspection of the process. Real-time path highlighting shows the algorithm's progress.


## Technologies Used

* JavaScript
* HTML
* CSS


## Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge, etc.)


## Usage Examples

1. **Generating a Maze:** Enter desired width and height (odd numbers >= 5) in the input fields and click "Generate Random Maze".

2. **Selecting an Algorithm:** Choose a pathfinding algorithm from the dropdown menu.

3. **Controlling the Speed:** Adjust the speed input to control the animation speed. A value of 0 is fastest; higher values are slower.

4. **Visualizing the Solution:** Click "Launch Visualization" to start the algorithm. The path will be highlighted step-by-step.

5. **Pausing and Resuming:** Use the "Pause" and "Resume" buttons to pause and resume the visualization at any time.


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/guimendes11/maze-solver.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd maze-solver/
   ```

3. **Open `index.html` in a web browser.**

No additional dependencies or build steps are required.  The project is entirely client-side.


## Project Structure

```
├── LICENSE
├── README.md
├── algorithms
│   ├── bfs.js
│   ├── dfs.js
│   └── maze-generator.js
├── assets
│   └── favicon.svg
├── helpers.js
├── index.html
├── main.js
├── maze-renderer.js
├── maze.todo
└── style.css

3 directories, 12 files
```


## Configuration

The maze dimensions (width and height) are configurable via input fields in the HTML. The animation speed is controlled by an input field. Both width and height must be odd numbers greater than or equal to 5.


## License

This project is licensed under the [MIT License](./LICENSE).


## Error Handling and Troubleshooting

* **"Maze dimensions should be odd numbers!"**: This error message appears if you enter even numbers for width or height. Maze generation requires odd dimensions.
* **"Maze dimensions should be greater than or equal to 5!"**: This error message appears if the width or height is less than 5.  The algorithm requires a minimum maze size.
