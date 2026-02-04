"use client"
import { Link } from "react-scroll/modules"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Backend Developer",
      "Release Manager",
      "Learning Solution Design",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section id="home">
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          {/* Terminal Window */}
          <div className="border border-tui-border bg-tui-bg-secondary">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-tui-bg-tertiary border-b border-tui-border">
              <div className="w-3 h-3 rounded-full bg-tui-red"></div>
              <div className="w-3 h-3 rounded-full bg-tui-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-tui-accent"></div>
              <span className="ml-2 text-xs text-tui-text-muted">matias@portfolio:~</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono">
              {/* Whoami command */}
              <div className="mb-4">
                <span className="text-tui-accent">$</span>
                <span className="text-tui-text-secondary ml-2">whoami</span>
              </div>

              {/* ASCII Name */}
              <pre className="text-tui-accent text-xs sm:text-sm leading-tight mb-6 overflow-x-auto">
{`
 __  __       _   _            __     __
|  \\/  | __ _| |_(_) __ _ ___  \\ \\   / /__ _ __ __ _
| |\\/| |/ _\` | __| |/ _\` / __|  \\ \\ / / _ \\ '__/ _\` |
| |  | | (_| | |_| | (_| \\__ \\   \\ V /  __/ | | (_| |
|_|  |_|\\__,_|\\__|_|\\__,_|___/    \\_/ \\___|_|  \\__,_|
`}
              </pre>

              {/* Role */}
              <div className="mb-4">
                <span className="text-tui-accent">$</span>
                <span className="text-tui-text-secondary ml-2">cat role.txt</span>
              </div>

              <div className="mb-6 pl-4 border-l-2 border-tui-border">
                <p className="text-tui-text-muted uppercase text-xs tracking-widest mb-1">
                  SEMI-SENIOR SOFTWARE DEVELOPER
                </p>
                <p className="text-tui-text text-lg">
                  {text}
                  <Cursor cursorColor="#22c55e" />
                </p>
              </div>

              {/* Location */}
              <div className="mb-4">
                <span className="text-tui-accent">$</span>
                <span className="text-tui-text-secondary ml-2">echo $LOCATION</span>
              </div>
              <p className="text-tui-text-secondary mb-6 pl-4">
                Buenos Aires, Argentina
              </p>

              {/* Navigation prompt */}
              <div className="mb-4">
                <span className="text-tui-accent">$</span>
                <span className="text-tui-text-secondary ml-2">ls ./sections</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                  <button className="heroButton">
                    <span className="text-tui-cyan">d</span> about/
                  </button>
                </Link>
                <Link to="experience" spy={true} smooth={true} offset={-70} duration={500}>
                  <button className="heroButton">
                    <span className="text-tui-cyan">d</span> experience/
                  </button>
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                  <button className="heroButton">
                    <span className="text-tui-cyan">d</span> projects/
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-8">
            <span className="text-tui-text-muted text-sm">
              <span className="text-tui-accent">↓</span> scroll for more
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
