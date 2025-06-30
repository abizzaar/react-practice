import React from 'react'
import { createBrowserRouter } from 'react-router'
import { Layout } from './Layout.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { PageTwo } from './pages/PageTwo.tsx'

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
      }
    ]
  }
]) 