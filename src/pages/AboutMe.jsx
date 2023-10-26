const AboutMe = () => {
    return (
      <div className="card m-5 p-2 bg-transparent">
        <div className="row g-0">
          <div className="col-md-3">
            <img src="./src/assets/RussianCat.png" className="img-fluid" alt="hero photo" />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h2 className="card-title mb-4">Tor Jansson</h2>
              <p className="card-text">Hello and welcome to my page. My name is Tor. Click around to find out a little more about myself</p>
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default AboutMe;