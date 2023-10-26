import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="container">

    <nav className="navbar sticky-top d-flex justify-content-center gap-3 p-3 bg-secondary-subtle row">
    <h1 className="col-4">Tor jansson </h1>
      <div className="col-6">

      <Link to="/" className="btn btn-outline-primary text-light">About Me</Link>

      <Link to="projects" className="btn btn-outline-primary text-light">Portfolio</Link>

      <Link to="resume" className="btn btn-outline-primary text-light">Resume</Link>

      <Link to="contact" className="btn btn-outline-primary text-light ">Contact</Link>

      </div>
    </nav>
    </div>
  )
};

export default Navigation