import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteUrl } from '@/lib/site';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{if(!siteUrl)return [];return [{url:`${siteUrl}/`},...projects.map(p=>({url:`${siteUrl}/projects/${p.slug}/`}))];}
