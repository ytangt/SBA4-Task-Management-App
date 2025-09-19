## Project Overview
This is a simple Task Manager App built with HTML, CSS (Bootstrap), and JavaScript. Users can add tasks with a name, category, deadline, and status, and view them in a dynamic table. The app also supports filtering tasks by keyword, category, or status, and highlights overdue tasks. The project demonstrates DOM manipulation, event handling, and basic state management in JavaScript.
## reflection
### Challenge
1.Table duplication: When implementing displayAllTasks(), the table would duplicate all tasks each time a new task was added.
2.Filter logic: Combining search, category, and status filters correctly was tricky.
3.DOM manipulation: I was initially unfamiliar with manipulating DOM properties efficiently.

### How I Solved It
1.Cleared the table body before rendering to prevent duplication.
2.Broke down the filter logic into individual conditions, tested them separately, then combined them.
3.Improved DOM manipulation skills by reading documentation, studying examples, and practicing.

### Potential Improvements
1.Persist task data using Local Storage so tasks remain after refreshing the page.
2.Handle more edge cases, such as invalid input or missing data

