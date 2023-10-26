import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const App = () => {

  return (
    <>

      <Navigation />

      <div className="container-fluid p-3">
        <Outlet />
      </div>

      <Footer />
    </>
  )
};

export default App