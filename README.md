## Project Overview

## reflection
### Challenge
1. When implementing the displayAllTasks() function, I ran into a problem:
Each time I added a new task and called displayAllTasks(), the table would duplicate all the existing tasks. This happened because the function rendered all tasks in the array without clearing the previous table content, causing repeated rows.

### How I Solved It

I fixed it by clearing the table body before rendering.

### Potential Improvements


## Project Structure
project-root/
├── index.html # Main HTML file
├── style.css # CSS styles
├── script.js # JS file containing Data Layer, UI Layer, and Event Layer
└── assets/
    └── image/ # Images

