import { createBrowserRouter } from 'react-router'
import { Layout } from './Layout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { Questions } from './pages/Questions.tsx'
import { TaskList } from './pages/TaskList/TaskList.tsx'
import { LLMEvalsPage } from './pages/LLMEvals/LLMEvalsPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'llm-evals',
        element: <LLMEvalsPage />
      },
      {
        path: 'task-list',
        element: <TaskList />
      },
      {
        path: 'questions',
        element: <Questions />
      }
    ]
  }
]) 