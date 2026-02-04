"use client"

import React from "react"
import SlideUp from "./SlideUp"

const experiences = [
  {
    period: "2024 - Present",
    title: "Backend Developer & Release Manager",
    status: "active",
    responsibilities: [
      "Backend development of claims system",
      "Training in solution design",
      "Design and development of critical deliverables involving money handling",
      "Promoting AI-assisted development within the team",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Release Manager",
    status: "completed",
    responsibilities: [
      "Managing production deployments for 5 different teams",
      "Maintaining and optimizing Jenkins pipelines",
      "Reduced deployment time by 66% through pipeline optimization",
    ],
  },
  {
    period: "2022 - 2023",
    title: "Developer - Integration Tool",
    status: "completed",
    responsibilities: [
      "Salesforce development for branch offices",
      "Integration of multiple banking systems",
      "Designed campaign management feature for branches, boosting tool adoption by 40%",
      "Cross-team collaboration on complex integrations",
    ],
  },
  {
    period: "2021 - 2022",
    title: "Developer - Middleware & Bug Fixing",
    status: "completed",
    responsibilities: [
      "Middleware development in Java",
      "Bug fixing in Salesforce projects",
      "API development with Spring Framework",
    ],
  },
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-tui-bg-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-tui-accent">##</span>
            <h2 className="text-2xl font-bold text-tui-text">experience</h2>
          </div>
          <div className="h-px bg-tui-border"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-1">
          {experiences.map((exp, idx) => (
            <SlideUp key={idx} offset="-50px 0px -50px 0px">
              <div className="border border-tui-border bg-tui-bg hover:border-tui-accent/50 transition-colors">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-tui-border bg-tui-bg-tertiary">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        exp.status === "active"
                          ? "bg-tui-accent animate-pulse"
                          : "bg-tui-text-muted"
                      }`}
                    ></span>
                    <span className="text-tui-text font-medium">{exp.title}</span>
                  </div>
                  <span className="text-tui-text-muted text-sm font-mono">
                    [{exp.period}]
                  </span>
                </div>

                {/* Body */}
                <div className="px-4 py-3">
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li
                        key={respIdx}
                        className="flex items-start gap-2 text-sm text-tui-text-secondary"
                      >
                        <span className="text-tui-accent mt-0.5">├─</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Git log style summary */}
        <div className="mt-8 p-4 border border-tui-border bg-tui-bg">
          <div className="flex items-center gap-2 mb-3 text-sm">
            <span className="text-tui-accent">$</span>
            <span className="text-tui-text-secondary">git log --oneline career</span>
          </div>
          <div className="text-xs text-tui-text-muted font-mono space-y-1">
            <p>
              <span className="text-tui-yellow">i7j8k9l</span> feat: reduced deployment
              time by 66%
            </p>
            <p>
              <span className="text-tui-yellow">e4f5g6h</span> feat: became release
              manager for 5 teams
            </p>
            <p>
              <span className="text-tui-yellow">a1b2c3d</span> feat: designed comercial campaign
              management feature, +40% tool adoption
            </p>
            <p>
              <span className="text-tui-yellow">m0n1o2p</span> init: started career in
              tech
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
