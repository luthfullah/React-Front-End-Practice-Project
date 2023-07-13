import { Link } from "react-router-dom"

const Navbar = () => {
      return (
    <nav className="nav pv3">
      <Link to="/" className="site-title dim ">
        Layout
      </Link>
      <ul className="f3 ">
        <Link to="/form" className="dim">Form</Link>
        <Link to="/documentation" className="dim">Documentation</Link>
        <Link to="/contact" className="dim">Contact</Link>
        
      </ul>
    </nav>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }
export default Navbar