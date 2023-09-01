import { createBrowserRouter } from 'react-router-dom'
import Main from '../components/main'
import Detail from '../components/detail'
import Layout from '../layout/Layout'
import { ROUTES } from './routes'
import Error from '../components/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <Main />,
      },
      {
        path: ROUTES.DETAIL,
        element: <Detail />,
      },
    ],
    errorElement: <Error />,
  },
])

export default router
