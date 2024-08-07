import React, { useState } from 'react';

function TaskList() {
  // Initial state with an array of task objects
  const [tasks] = useState([
    { id: 1, description: 'Learn React' },
    { id: 2, description: 'Write a tutorial' },
    { id: 3, description: 'Read documentation' }
  ]);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
