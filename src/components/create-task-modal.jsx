import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";


export const CreateTaskModal = ({ open, setOpen, setTasks }) => {
  const [description, setDescription] = useState("");

  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power.out"
      });

      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, delay: 0.2, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.fromTo(
        modalRef.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: 40, delay: 0.1, duration: 0.2, ease: "power2.out" },
      );
    }
  }, [open]);

  const onSubmit = (e) => {
    e.preventDefault();

    setTasks(tasks => [...tasks, { 
      id: uuidv4(),
      description, 
      completed: false 
    }]);

    setDescription("");
  }

  return (
    <div 
      ref={overlayRef} 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
        }
      }} 
      className="w-screen h-screen bg-black/40 fixed inset-0 top-0 z-50 flex items-center justify-center"
      style={{ opacity: 0, visibility: "hidden" }}
    >
      <div ref={modalRef} className="rounded-xl bg-white shadow p-8 relative">
        <div className="absolute top-2 right-2 text-xl transition hover:text-red-500 cursor-pointer" onClick={() => setOpen(false)}>
          <X />
        </div>
        <h2 className="text-xl font-bold">Create a Task</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <input 
              id="description"
              type="text" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded border-2 w-full py-1 px-2" 
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="rounded bg-black text-white transition hover:opacity-80 w-full py-1 px-2">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}
