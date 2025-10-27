import { Button } from "@/components/ui/button"
import AppLayout from "./Layout/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./Pages/Landing"
import Auth from './Pages/Auth'
import Dashboard from "./Pages/Dashboard"
import Link from "./Pages/Link"
import Redirect from './Pages/Redirect'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Landing/>,
      },
      {
        path:'/dashboard',
        element:<Dashboard/>,
      },
      {
        path:'/link/:id',
        element:<Link/>,
      },
      {
        path:'/:i  d',
        element:<Redirect/>,
      },
      {
        path:'/auth',
        element:<Auth/>,
      },
    ]
  }
])
function App() {
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  )
}

export default App