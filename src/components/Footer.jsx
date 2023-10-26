import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <nav className="navbar fixed-bottom d-flex justify-content-center gap-4 p-3 bg-secondary-subtle">

      <Link 
        href="https://github.com/tjansson-ui"
        className="text-light text-decoration-none"
      >
        Github
      </Link>

      <Link 
        href="https://www.linkedin.com/in/torjansson"
        className="text-light text-decoration-none"
      >
        LinkedIn
      </Link>

      <Link 
        href="https://help.twitter.com/en/using-x/create-x-account"
        className="text-light text-decoration-none"
      >
        Twitter
      </Link>

    </nav>
  )
}

export default Footer