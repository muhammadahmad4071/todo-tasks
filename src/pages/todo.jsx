import React, { useEffect, useState } from 'react'
import { CreateTaskModal } from '../components/create-task-modal';
import TaskTable from '../components/tasks-table';
import { Main } from '../layouts/main'
import "./todo.css";

export const TodoPage = () => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) ?? []);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (loading) {
      setLoading(false);
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  return (
    <Main>
      <div id='todo-page'>
        <h1 className='mb-3'>Your To-Do List</h1>
        <button className="rounded bg-black text-white py-1 px-2 mb-3" onClick={() => setOpen(true)}>Create</button>
        <section className='w-full mb-3'>
          <TaskTable tasks={tasks} setTasks={setTasks} />
        </section>
      </div>

      <CreateTaskModal open={open} setOpen={setOpen} setTasks={setTasks} />
    </Main>
  )
}
