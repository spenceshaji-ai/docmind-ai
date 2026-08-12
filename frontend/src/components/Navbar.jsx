function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">{props.title}</span>
      </div>
    </nav>
  )
}

export default Navbar