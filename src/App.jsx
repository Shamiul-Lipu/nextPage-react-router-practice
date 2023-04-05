import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className='App'>
      {/* Header section */}
      <Header></Header>
      {/* Outlet */}
      <Outlet />
      {/* Footer section */}
      <Footer></Footer>
    </div>
  )
}

export default App
