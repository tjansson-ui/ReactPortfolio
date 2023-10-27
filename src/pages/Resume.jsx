import { Link } from "react-router-dom"

const Resume = () => {
    return (
      <>
        <img src="./src/assets/opossumhero.png" className="img-fluid w-25" alt="resume stock photo" />
        <h2>Resume</h2>
        <p>You found the resume page! This is a work in progress. </p>
        <Link to="../src/assets/Resume_Current.pdf" target="_blank" download>Download a pdf here!</Link>

        <div className="card">
        <div className="card-body">
        <h2 className="card-title">Employment History</h2>
        <h3 className="card-subtitle">Exact Sciences</h3>
        <h4 className="card-text">Laboratory Processing Supervisor</h4>
        <h4 className="card-text"> Technical Business Analyst STA</h4>
            <h5 className="card-text">Madison, WI</h5>
            <h6 className="card-text">Mon Year Length</h6>
        <h3 className="card-subtitle">Genus Intelligen Technologies</h3>
        <h4 className="card-text">Senior System Technician</h4>
            <h5 className="card-text"> Madison, WI</h5>
            <h6 className="card-text">Mon Year Length</h6>

            <h3 className="card-subtitle">Congress Bundestag Youth Exchange</h3>
        <h4 className="card-text">Fellow</h4>
            <h5 className="card-text">Madison, WI</h5>
            <h6 className="card-text">Mon Year Length</h6>
        </div>
        </div>

        <div className="card">
        <div className="card-body">
        <h2 className="card-title">Education</h2>
        <div>
        <h3>Southern New Hampshire Univeristy</h3>
        <h4>Data Analytics Masters</h4>
            <h5>Madison, WI</h5>
            <h6>Mon Year Length</h6>
        </div>

        <div>
            <h3>Indiana University</h3>
            <h4>Biology Bachelor of Science</h4>
                <h5>Madison, WI</h5>
                <h6>Mon Year Length</h6>
        </div>

        <div>
        <h3>Certificates</h3>
            <ul>
                <li>Yellowbelt Six Sigma</li>
                    <h5>Madison, WI</h5>
                    <h6>Mon Year Length</h6>
                <li>CAPM</li>
                    <h5>Madison, WI</h5>
                    <h6>Mon Year Length</h6>
                <li>Google Analytics</li>
                    <h5>Madison, WI</h5>
                   <h6>Mon Year Length</h6>
            </ul>
        </div>
        </div>
        </div>

        <div className="card">
        <div className="card-body mb-25">
        <h2 className="card-title">Proficiencies</h2>
        <ul className="card-text">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
        </div>
        </div>

      </>
    )
  };
  
  export default Resume;



