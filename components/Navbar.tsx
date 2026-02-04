"use client"
import React, { useState } from "react"
import { Link } from "react-scroll/modules"
import { IoMdMenu, IoMdClose } from "react-icons/io"

const navItems = [
  { label: "about", page: "about" },
  { label: "experience", page: "experience" },
  { label: "projects", page: "projects" },
]

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full fixed top-0 z-50 bg-tui-bg border-b border-tui-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Name */}
          <Link to="home" className="cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-tui-accent">~</span>
              <span className="text-tui-text font-semibold">matias-vera</span>
              <span className="text-tui-text-muted">/</span>
              <span className="text-tui-text-secondary">portfolio</span>
              <span className="text-tui-accent animate-blink">_</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={item.page}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-1.5 text-sm text-tui-text-secondary hover:text-tui-accent hover:bg-tui-bg-secondary cursor-pointer transition-colors"
              >
                <span className="text-tui-text-muted">/</span>
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/matverach"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-3 py-1.5 text-sm border border-tui-border text-tui-text-secondary hover:text-tui-accent hover:border-tui-accent transition-colors"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/mattverach/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm border border-tui-border text-tui-text-secondary hover:text-tui-cyan hover:border-tui-cyan transition-colors"
            >
              linkedin
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 text-tui-text-secondary hover:text-tui-accent"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {navbar && (
          <nav className="md:hidden border-t border-tui-border py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={item.page}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setNavbar(false)}
                  className="px-3 py-2 text-sm text-tui-text-secondary hover:text-tui-accent hover:bg-tui-bg-secondary cursor-pointer"
                >
                  <span className="text-tui-accent mr-2">$</span>
                  cd ./{item.label}
                </Link>
              ))}
              <div className="flex gap-2 px-3 pt-2 mt-2 border-t border-tui-border">
                <a
                  href="https://github.com/mattverach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm border border-tui-border text-tui-text-secondary hover:text-tui-accent hover:border-tui-accent"
                >
                  github
                </a>
                <a
                  href="https://www.linkedin.com/in/matias-vera-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm border border-tui-border text-tui-text-secondary hover:text-tui-cyan hover:border-tui-cyan"
                >
                  linkedin
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
