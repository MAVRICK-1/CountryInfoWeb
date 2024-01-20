
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'

import CountryDetails from './components/CountryDetails.jsx'
import Contactus from './components/Contactus.jsx'
import Aboutme from './components/AboutMe.jsx'

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contactus/>
      },
      {
        path:"/:country",
        element:<CountryDetails/>
      },
      {
        path:"/Aboutme",
        element:<Aboutme/>
      }
    ]
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
    
    <RouterProvider router={router}/>
  </>
)
