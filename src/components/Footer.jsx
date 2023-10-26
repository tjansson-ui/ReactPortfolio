import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom d-flex justify-content-center gap-4 p-3 bg-secondary-subtle">

      <Link 
        to="https://github.com/tjansson-ui"
        className="text-light text-decoration-none"
      >
        Github
      </Link>

      <Link 
        to="https://www.linkedin.com/in/torjansson"
        className="text-light text-decoration-none"
      >
        LinkedIn
      </Link>

      <Link 
        to="https://help.twitter.com/en/using-x/create-x-account"
        className="text-light text-decoration-none"
      >
        Twitter
      </Link>

    </nav>
  )
}

export default Footer