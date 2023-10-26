import { Link } from "react-router-dom"

const Project = ({ name, slug, img, desc, link, repo }) => {
    return (
      <div className="card bg-secondary-subtle text-light mx-4 my-3">
        {/* Links Component */}
        <div className="container">
           <h4 className="card-title text-center">{name}</h4>
            { link
             ? <Link className="btn btn-sm btn-outline-primary m-1 d-flex justify-content-center" to={link}>App</Link>
             :"" }
            <Link className="btn btn-sm btn-outline-primary m-1 d-flex justify-content-center" href={repo}>Repo</Link>
        </div>
        {/* Images */}
        <img src={img} className="img-fluid" alt="Background Image" />
        <div className="container">
          {/* Content Overlay */}
          <p className="card-text">{desc}</p>
        </div>
      </div>
    )
  };
  
  export default Project;