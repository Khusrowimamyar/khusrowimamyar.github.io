import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { ProjectVisual } from '@/components/project-visual';
import { absolute, siteUrl } from '@/lib/site';
export const dynamicParams=false;
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.name||'Project',description:p?.summary,...(siteUrl?{alternates:{canonical:absolute(`/projects/${slug}/`)}}:{})};}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();const next=projects[(projects.indexOf(p)+1)%projects.length];return <main id="main" className="wrap case-main"><Link href="/#projects" className="case-back"><ArrowLeft size={15}/> Back to selected work</Link><header className="case-header"><p className="mono">{p.kind.toUpperCase()}</p><h1>{p.name}<span className="serif"> /</span></h1><p>{p.summary}</p><div className="tags">{p.stack.map(t=><span key={t}>{t}</span>)}</div>{p.url&&<a href={p.url} target="_blank" rel="noreferrer" className="text-link">Visit project website <ArrowUpRight size={16}/></a>}</header><ProjectVisual type={p.visual}/><section className="case-body"><h2>The context</h2><p>{p.problem}</p></section><section className="case-body"><h2>My contribution</h2><ul>{p.contribution.map(c=><li key={c}>{c}</li>)}</ul></section><section className="case-body"><h2>Implementation</h2><p>{p.implementation}</p></section><section className="case-body"><h2>Outcomes & scope</h2><p>{p.outcome}</p></section><div className="case-footer"><Link href="/#projects" className="text-link"><ArrowLeft size={16}/> All projects</Link><Link href={`/projects/${next.slug}/`} className="button primary">Next: {next.name}<ArrowUpRight size={16}/></Link></div></main>}
