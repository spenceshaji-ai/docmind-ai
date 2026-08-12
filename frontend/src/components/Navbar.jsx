import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">{props.title}</span>

         <div>
      <Link className="text-white me-3" to="/">
        Home
      </Link>

      <Link className="text-white" to="/about">
        About
      </Link>
    </div>
      </div>
    </nav>
  )
}

export default Navbar