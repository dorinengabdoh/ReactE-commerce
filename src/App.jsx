
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css'
import Card from './Component/cardComponent/Card';
import Details from './Component/details component/Details';
import Contact from './Component/contactComponent/Contact';


function App() {
  const client = new QueryClient();
  return (
    <>
    <QueryClientProvider client={client}>
  
    <Router>
     <Nav />
      <Routes>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Details" element={<Details />}/>
        <Route path="/" element={< Card/>}/>
      </Routes>
    </Router>

    <Home />
    </QueryClientProvider>
    </>
  )
}
export default App