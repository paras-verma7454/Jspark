import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy } from "react"

const Solutions = lazy(() => import("./Pages/Solutions/Page"))
const Sent = lazy(() => import("./Pages/Contact/Sent/Page"))
const Blogs = lazy(() => import("./Pages/Blogs/Page"))
const About = lazy(() => import("./Pages/About/Page"))
const Home = lazy(() => import("./Pages/Home/Home"))
const Contact = lazy(() => import("./Pages/Contact/Contact"))
const Products = lazy(() => import("./Pages/Products/Page"))



const App = () => {
  const routes=[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    {
      path:"/about",
      element:<About/>
    },{
      path:"/blogs",
      element:<Blogs/>
    },{
      path:"/solutions",
      element:<Solutions/>
    },{
      path:"/sent",
      element:<Sent/>
    },
  ]
  return (
    <>
    <BrowserRouter>
    <Routes>
      {routes.map((route)=>(
        <Route key={route.path} path={route.path} element={route.element}/>
      ))}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App