import React from 'react'
import { Github, Twitter } from "lucide-react"
import { Link } from 'react-router'

export function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white py-4 mt-auto">
      <div className="max-w-4xl container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">To-Do</h2>
            <p className="text-sm opacity-80">Organize your tasks efficiently</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex gap-4">
              <Link to="/" className="text-sm hover:underline">
                Home
              </Link>
              <Link to="/tasks" className="text-sm hover:underline">
                Tasks
              </Link>
              <Link to="/contact" className="text-sm hover:underline">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link to="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} To-Do. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
