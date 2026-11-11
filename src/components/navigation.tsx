'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowDownToLine, Menu, X, Moon, Sun } from 'lucide-react';
import { asset } from '@/lib/site';
const sections=['Home','About','Skills','Experience','Projects','Contact'];
export function Navigation(){
 const [open,setOpen]=useState(false); const [dark,setDark]=useState(false); const [active,setActive]=useState('home');
 useEffect(()=>{const frame=requestAnimationFrame(()=>setDark(document.documentElement.dataset.theme==='dark'));const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive(entry.target.id);},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(e=>observer.observe(e));return()=>{cancelAnimationFrame(frame);observer.disconnect();};},[]);
 useEffect(()=>{if(!open)return;const handle=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};document.addEventListener('keydown',handle);return()=>document.removeEventListener('keydown',handle);},[open]);
 function theme(){const next=!dark;setDark(next);document.documentElement.dataset.theme=next?'dark':'light';try{localStorage.setItem('theme',next?'dark':'light')}catch{}}
 return <header className="header"><div className="nav-wrap"><Link href="/#home" className="brand" aria-label="Khusrow Imamyar home">ki<span>.</span></Link><nav aria-label="Main navigation" className={open?'nav open':'nav'} id="navigation">{sections.map(s=><Link key={s} href={`/#${s.toLowerCase()}`} className={active===s.toLowerCase()?'active':''} aria-current={active===s.toLowerCase()?'location':undefined} onClick={()=>setOpen(false)}>{s}</Link>)}</nav><div className="nav-actions"><button className="icon-button" onClick={theme} aria-label={dark?'Switch to light theme':'Switch to dark theme'}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button><a className="resume-small" href={asset('/resume/Khusrow-Imamyar-Resume.pdf')} download><ArrowDownToLine size={15}/> Résumé</a><button className="icon-button menu-button" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="navigation">{open?<X size={21}/>:<Menu size={21}/>}</button></div></div></header>
}
