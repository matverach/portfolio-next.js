import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-tui-border bg-tui-bg-secondary">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          {/* Left - Status bar style */}
          <div className="flex items-center gap-4 text-tui-text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tui-accent"></span>
              <span>available for hire</span>
            </span>
            <span className="hidden md:inline text-tui-border">│</span>
            <span>Buenos Aires, AR</span>
          </div>

          {/* Center - Copyright */}
          <div className="text-tui-text-muted">
            <span className="text-tui-accent">©</span> 2025 matias-vera
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mattverach"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tui-text-muted hover:text-tui-accent transition-colors"
            >
              github
            </a>
            <span className="text-tui-border">│</span>
            <a
              href="https://www.linkedin.com/in/mattverach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tui-text-muted hover:text-tui-cyan transition-colors"
            >
              linkedin
            </a>
            <span className="text-tui-border">│</span>
            <a
              href="mailto:matias.vera.dev@gmail.com"
              className="text-tui-text-muted hover:text-tui-yellow transition-colors"
            >
              email
            </a>
          </div>
        </div>

        {/* Terminal prompt */}
        <div className="mt-4 pt-4 border-t border-tui-border text-center">
          <span className="text-xs text-tui-text-muted font-mono">
            <span className="text-tui-accent">~</span>
            <span className="text-tui-text-secondary">/portfolio</span>
            <span className="text-tui-accent ml-2">$</span>
            <span className="text-tui-text-muted ml-2">exit</span>
            <span className="text-tui-accent animate-blink ml-1">_</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
