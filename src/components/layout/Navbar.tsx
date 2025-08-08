import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-blue-600 ${
      isActive ? "text-blue-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          MyLogo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `px-4 py-2 rounded text-white transition-colors ${
                isActive ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
              }`
            }
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-3 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <hr />
            <NavLink
              to="/login"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `px-4 py-2 rounded text-white text-center transition-colors ${
                  isActive ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Register
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
