import { Link } from "react-router"

function MainNavbar() {
  return (
    <div className="flex items-center justify-between h-16 px-8 py-2 bg-pink-900 text-white">
      <div className="flex gap-4">
        <Link to="/" className="font-bold">LOGO</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default MainNavbar