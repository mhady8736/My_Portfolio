import React from 'react';
import { ExternalLink, BookOpen, ArrowUpRight, Code } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onOpenCaseStudy, index }) {
  return (
    <article 
      className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/60 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden hover-lift shadow-xs h-full"
    >
      {/* Top Bar / Visual Header */}
      <div className="p-6 sm:p-8 flex flex-col h-full justify-between">
        
        {/* Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {project.category}
            </span>
          </div>
        </div>

        {/* Visual Mockup Container */}
        <div className="relative w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 overflow-hidden mb-6 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
          {/* Browser Header Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-100/90 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/80 text-[11px] text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <span className="truncate max-w-[200px] text-zinc-600 dark:text-zinc-400 font-medium">{project.id}.dev</span>
            <span className="w-2 h-2" />
          </div>

          {/* Interactive Showcase Graphic Area */}
          <div className="h-40 sm:h-44 p-4 flex flex-col justify-center items-center bg-gradient-to-b from-zinc-100/70 to-zinc-200/40 dark:from-zinc-900/80 dark:to-zinc-950 relative overflow-hidden">
            {/* Background subtle wireframe grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

            <div className="relative z-10 text-center max-w-md px-2">
              <h4 className="text-base sm:text-lg font-semibold text-zinc-950 dark:text-white tracking-tight group-hover:text-black dark:group-hover:text-zinc-100 transition-colors">
                {project.title.split('—')[0]}
              </h4>
            </div>

            {/* Quick action button hover overlay */}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/60 backdrop-blur-xs flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button
                onClick={() => onOpenCaseStudy(project)}
                className="px-4 py-2 rounded-full bg-white text-zinc-950 font-medium text-xs flex items-center gap-1.5 shadow-lg hover:bg-zinc-100 transition-transform duration-200 hover:scale-105 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Case Study</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-zinc-100 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: 1. Case Study 2. Live Demo 3. GitHub */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-900 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 bg-zinc-100/60 dark:bg-zinc-900/40 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Live Demo for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-900/80 dark:hover:bg-zinc-800 dark:text-zinc-200 dark:hover:text-white text-xs font-medium transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </article>
  );
}
