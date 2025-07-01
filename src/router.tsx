import { createBrowserRouter } from 'react-router'
import { Layout } from './Layout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { PageTwo } from './pages/PageTwo.tsx'
import { Questions } from './pages/Questions.tsx'
import { TaskList } from './pages/TaskList/TaskList.tsx'

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
        path: 'two',
        element: <PageTwo />
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