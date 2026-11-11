import Link from 'next/link';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';
export function Footer(){return <footer className="footer wrap"><Link className="brand" href="/#home">ki<span>.</span></Link><p>© {new Date().getFullYear()} Khusrow Imamyar</p><div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><Link href="/#home">Back to top <ArrowUp size={14}/></Link></div></footer>}
