import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import App from './App.jsx'
import Github, { githubFecthInfo } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       },

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} >
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='App/:userid' element={<App/>} />
      <Route 
      loader={githubFecthInfo}
      path='Github' 
      element={<Github/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
