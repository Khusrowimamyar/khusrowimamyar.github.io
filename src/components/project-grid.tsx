'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Braces, PenTool, Sparkles, Globe } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectVisual } from './project-visual';

const filters = ['All work', 'Full stack', 'AI & automation', 'Web & CMS', 'UI/UX'];
const categoryIcons = { 'Full stack': Braces, 'AI & automation': Sparkles, 'Web & CMS': Globe, 'UI/UX': PenTool };

export function ProjectGrid() {
  const [filter, setFilter] = useState('All work');
  const reduced = useReducedMotion();
  const filtered = projects.filter(p => filter === 'All work' || p.category === filter);

  return <>
    <div className="project-toolbar">
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map(f => <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
          {f} <span>{String(f === 'All work' ? projects.length : projects.filter(p => p.category === f).length).padStart(2, '0')}</span>
        </button>)}
      </div>
      <p className="project-result mono" role="status" aria-live="polite">Showing {filtered.length} of {projects.length} projects</p>
    </div>
    <div className="project-grid">
      {filtered.map((p, index) => {
        const Icon = categoryIcons[p.category as keyof typeof categoryIcons] || Globe;
        return <motion.article
          className={`project-card accent-${p.accent}`}
          key={p.slug}
          layout={reduced ? false : 'position'}
          initial={false}
          transition={{ layout: { duration: 0.35, type: 'spring', bounce: 0.1 } }}
        >
          <motion.div className="project-card-inner"
            initial={false}
            whileInView={reduced ? {} : { opacity: [0.5, 1], y: [24, 0] }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link className="visual-link" href={`/projects/${p.slug}/`} aria-label={`Read ${p.name} case study`}>
              <ProjectVisual type={p.visual}/>
              <span className="visual-open" aria-hidden="true"><ArrowUpRight size={19}/></span>
            </Link>
            <div className="project-card-body">
              <div className="project-card-topline">
                <span className="project-category"><span className="project-badge"><Icon size={18}/></span>{p.category}</span>
                <span className="project-number mono">{String(projects.indexOf(p) + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
              </div>
              <p className="project-meta mono">{p.kind}</p>
              <div className="project-title"><h3><Link href={`/projects/${p.slug}/`}>{p.name}</Link></h3></div>
              <p className="project-summary">{p.summary}</p>
              <div className="tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div>
              <Link className="project-case-link" href={`/projects/${p.slug}/`}>
                Explore project <span className="project-arrow"><ArrowUpRight size={18}/></span>
              </Link>
            </div>
          </motion.div>
        </motion.article>;
      })}
    </div>
    <p className="project-note">Selected professional and freelance contributions. Illustrations represent the work; employer-owned code and private systems remain confidential.</p>
  </>;
}
