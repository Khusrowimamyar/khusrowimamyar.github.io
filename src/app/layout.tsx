import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { absolute, asset, siteUrl } from '@/lib/site';
import './globals.css';
export const metadata: Metadata = {
 title:{default:'Khusrow Imamyar — Full-Stack Software Developer',template:'%s | Khusrow Imamyar'},
 description:'Full-stack software developer in Maple Ridge, BC. React, Next.js, Angular, Node.js and NestJS. Explore professional web application and AI-enabled product work.',
 metadataBase:new URL(siteUrl ? `${siteUrl}/` : 'http://localhost:3000'),
 openGraph:{type:'website',title:'Khusrow Imamyar — Full-Stack Developer',description:'Thoughtful interfaces. Connected systems. Useful software.',...(absolute('/')?{url:absolute('/')} : {}),images:[{url:asset('/social-preview.png'),width:1200,height:630,alt:'Khusrow Imamyar — Full-Stack Software Developer'}]},
 twitter:{card:'summary_large_image'},icons:{icon:asset('/icon.svg')},
};
const initTheme=`try{document.documentElement.dataset.theme=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch{}`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:initTheme}}/></head><body><a href="#main" className="skip-link">Skip to content</a><Navigation/>{children}<Footer/></body></html>}
