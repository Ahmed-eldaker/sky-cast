import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./Components/Main/Main"
import Home from "./Components/Home/Home"
import SignUp from "./Components/SignUp/SignUp"
import Error from "./Components/Error/Error"

const App = () => {
  const routers =createBrowserRouter([{
    path:'',
    element:<Main/>,
    children: [
      {path:'', element:<Home/>},
      {path:'home', element:<Home/>},

    ],

    
  },
  {path:'/signup', element:<SignUp/>},
  {path:'*', element:<Error/>},

  
])
  
  return (
    <RouterProvider router={routers} />

  )
}

export default App
