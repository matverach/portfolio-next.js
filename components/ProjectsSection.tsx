"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs"

const projects = [
  {
    name: "paysentry",
    description:
      "Authorization Gateway for AI Agent Payments. Think of it as OAuth but for money: users define policies (limits, categories, merchants) and PaySentry validates each transaction before executing it. Currently in architecture design phase.",
    image: "https://i.imgur.com/caVNkdH.png",
    github: "https://github.com/mattverach/paysentry",
    link: "https://github.com/mattverach/paysentry",
    tags: ["python", "fastapi", "postgresql", "system-design"],
    status: "in-progress",
  },
  {
    name: "bookstore-ecommerce",
    description:
      "Ecommerce using Spring MVC, Spring Data JPA and Thymeleaf.",
    image: "/ecommercespring.jpg",
    github: "https://github.com/mattverach/presenteapp",
    link: "https://github.com/mattverach/presenteapp",
    tags: ["java", "spring", "thymeleaf", "jpa"],
  },
  {
    name: "disney-api",
    description:
      "REST API where you can view, edit, add, and delete Disney characters, the movies they have appeared in, and the genres of those movies. Used Springboot and MySQL. Alkemy backend challenge.",
    image: "https://i.imgur.com/1EACk7S.png",
    github: "https://github.com/mattverach/disney-challenge-alkemy",
    link: "https://github.com/mattverach/disney-challenge-alkemy",
    tags: ["java", "spring-boot", "mysql", "rest-api"],
  },
  {
    name: "presente-app",
    description:
      "Spring CRUD application that allows students to confirm their attendance in virtual classes.",
    image: "/presenteapp.jpg",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
    tags: ["java", "spring", "crud", "education"],
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-tui-accent">##</span>
            <h2 className="text-2xl font-bold text-tui-text">projects</h2>
          </div>
          <div className="h-px bg-tui-border"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <SlideUp key={idx} offset="-100px 0px -100px 0px">
              <div className="border border-tui-border bg-tui-bg-secondary hover:border-tui-accent/50 transition-colors">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-tui-bg-tertiary border-b border-tui-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-tui-red"></div>
                    <div className="w-3 h-3 rounded-full bg-tui-yellow"></div>
                    <div className="w-3 h-3 rounded-full bg-tui-accent"></div>
                    <span className="ml-2 text-xs text-tui-text-muted">
                      ~/projects/{project.name}
                    </span>
                  </div>
                  {project.status === "in-progress" && (
                    <span className="flex items-center gap-1.5 text-xs text-tui-yellow">
                      <span className="w-2 h-2 rounded-full bg-tui-yellow animate-pulse"></span>
                      in progress
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image or Placeholder */}
                    <div className="md:w-2/5">
                      <Link href={project.link} target="_blank">
                        <div className="border border-tui-border overflow-hidden hover:border-tui-accent transition-colors">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.name}
                              width={400}
                              height={250}
                              className="w-full h-auto object-cover hover:opacity-80 transition-opacity"
                            />
                          ) : (
                            <div className="w-full h-40 bg-tui-bg-tertiary flex items-center justify-center">
                              <pre className="text-tui-accent text-xs leading-tight">
{`  ┌────────────┐
  │ PaySentry │
  │ ◉ --- ◎  │
  │  gateway  │
  └────────────┘`}
                              </pre>
                            </div>
                          )}
                        </div>
                      </Link>
                    </div>

                    {/* Info */}
                    <div className="md:w-3/5">
                      {/* Project name */}
                      <h3 className="text-lg font-bold text-tui-text mb-3">
                        <span className="text-tui-accent">./</span>
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-tui-text-secondary mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-2 py-1 text-xs border border-tui-border text-tui-text-muted bg-tui-bg-tertiary"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4">
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-tui-text-secondary hover:text-tui-accent transition-colors"
                        >
                          <BsGithub size={18} />
                          <span>source</span>
                        </Link>
                        <Link
                          href={project.link}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-tui-text-secondary hover:text-tui-cyan transition-colors"
                        >
                          <BsBoxArrowUpRight size={16} />
                          <span>demo</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* More projects hint */}
        <div className="mt-8 text-center">
          <Link
            href="https://github.com/mattverach"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-tui-text-muted hover:text-tui-accent transition-colors"
          >
            <span className="text-tui-accent">$</span>
            <span>git clone more-projects</span>
            <span className="text-tui-accent">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
