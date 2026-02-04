"use client"

import React from "react"
import SlideUp from "./SlideUp"

const skills = [
  { skill: "Salesforce (Apex)", colorClass: "text-tui-cyan hover:border-tui-cyan" },
  { skill: "Java", colorClass: "text-tui-yellow hover:border-tui-yellow" },
  { skill: "Python", colorClass: "text-tui-accent hover:border-tui-accent" },
  { skill: "JavaScript", colorClass: "text-tui-yellow hover:border-tui-yellow" },
  { skill: "React", colorClass: "text-tui-cyan hover:border-tui-cyan" },
  { skill: "CI/CD (Jenkins)", colorClass: "text-tui-red hover:border-tui-red" },
  { skill: "Git", colorClass: "text-tui-accent hover:border-tui-accent" },
  { skill: "System Design", colorClass: "text-tui-cyan hover:border-tui-cyan" },
  { skill: "Scrum/Agile", colorClass: "text-tui-purple hover:border-tui-purple" },
  { skill: "Jira", colorClass: "text-tui-cyan hover:border-tui-cyan" },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SlideUp offset="-100px 0px -100px 0px">
          {/* Section Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-tui-accent">##</span>
              <h2 className="text-2xl font-bold text-tui-text">about</h2>
            </div>
            <div className="h-px bg-tui-border"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Bio */}
            <div className="border border-tui-border bg-tui-bg-secondary p-6">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-tui-border">
                <span className="text-tui-accent text-sm">$</span>
                <span className="text-tui-text-secondary text-sm">cat bio.md</span>
              </div>

              <div className="space-y-4 text-tui-text-secondary text-sm leading-relaxed">
                <p>
                  <span className="text-tui-accent">&gt;</span> Hello, my name is{" "}
                  <span className="text-tui-text">Matías Vera</span>, a Backend Developer based in
                  Buenos Aires, Argentina.
                </p>
                <p>
                  <span className="text-tui-accent">&gt;</span> I&apos;m fluent in English and Spanish,
                  with over <span className="text-tui-cyan">4 years</span> of experience working on
                  regulated <span className="text-tui-text">banking systems</span>.
                </p>
                <p>
                  <span className="text-tui-accent">&gt;</span> I focus on{" "}
                  <span className="text-tui-text">backend development</span> and{" "}
                  <span className="text-tui-yellow">solution design</span> for customer-facing
                  financial processes, including systems that handle monetary compensations in
                  production.
                </p>
                <p>
                  <span className="text-tui-accent">&gt;</span> I&apos;ve been responsible for{" "}
                  <span className="text-tui-cyan">production deployments</span> of a shared repository
                  used by <span className="text-tui-purple">5 teams</span>, coordinating releases and
                  improving deployment reliability and speed.
                </p>
                <p>
                  <span className="text-tui-accent">&gt;</span> I actively contribute to technical
                  definitions, architectural decisions, and incident resolution in live systems.
                  I&apos;m especially interested in{" "}
                  <span className="text-tui-purple">AI-assisted development</span> and work on driving
                  its practical adoption to improve delivery efficiency without compromising quality.
                </p>
              </div>
            </div>

            {/* Right - Skills */}
            <div className="border border-tui-border bg-tui-bg-secondary p-6">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-tui-border">
                <span className="text-tui-accent text-sm">$</span>
                <span className="text-tui-text-secondary text-sm">ls skills/</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 text-xs border border-tui-border bg-tui-bg-tertiary transition-colors cursor-default ${item.colorClass}`}
                  >
                    {item.skill}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-6 pt-4 border-t border-tui-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-tui-text-muted">experience:</span>
                    <span className="text-tui-accent ml-2">~4 years</span>
                  </div>
                  <div>
                    <span className="text-tui-text-muted">focus:</span>
                    <span className="text-tui-cyan ml-2">backend</span>
                  </div>
                  <div>
                    <span className="text-tui-text-muted">industry:</span>
                    <span className="text-tui-yellow ml-2">banking</span>
                  </div>
                  <div>
                    <span className="text-tui-text-muted">teams_deployed:</span>
                    <span className="text-tui-purple ml-2">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default AboutSection
