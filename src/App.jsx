import { useState } from 'react'
import './App.css'
import Navbar from './Component/navbarComponenet/Navbar'
import Avatar from './Component/avatarComponent/Avatar'
import Button from './Component/buttonComponent/Button'

function App() {
  // const client = new QueryClient();
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Fouth />
  //   },
  //   {
  //     path: '/details/:id',
  //     element: <Details/>,
  //     errorElement: <ErrorPage />
  //   }
  // ])
  return (
    <>
        < Navbar/>
        <Avatar />
        <Button />


    {/* <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Fouth />}/>
        <Route path='/details' element={<Details />}/>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider> */}
    </>
  )
}

export default App
