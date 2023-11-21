import { useState } from 'react'
import './App.css'

import Card from './Component/cardComponent/Card'

function App() {
  const client = new QueryClient();
  const router = createBrowserRouter([
    {
      path: '/',
      element:  <Card />

    },
    {
      path: '/details/:id',
      element: <Details/>,
      errorElement: <ErrorPage />
    }
  ])
  return (
    <>


    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    {/* <BrowserRouter>
    <Routes>
        <Route path='/' element={<Fouth />}/>
        <Route path='/details' element={<Details />}/>
    </Routes>
    </BrowserRouter> */}
    </QueryClientProvider>
    </>
  )
}

export default App
