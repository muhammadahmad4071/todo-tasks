import React from 'react'
import { Link } from 'react-router'
import { Main } from '../layouts/main'

export const IndexPage = () => {
  return (
    <Main>
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to To-Do</h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/todo"
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 text-center min-w-[150px]"
          >
            Todo List
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-center min-w-[150px]"
          >
            Contact Page
          </Link>
        </div>
      </div>
    </Main>
  )
}
