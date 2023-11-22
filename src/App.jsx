
import { useState } from 'react'
import './App.css'
import Card from './Component/cardComponent/Card'
import Details from './Component/detailsComponent/Details'
import { QueryClient, QueryClientProvider } from 'react-query' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



function App() {
  const client = new QueryClient();
 
  return (
    <>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Card />}/>
        <Route path='/details' element={<Details />}/>
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
