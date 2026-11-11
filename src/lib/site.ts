export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
export const asset = (path:string) => `${basePath}${path}`;
export const absolute = (path:string) => siteUrl ? `${siteUrl}${path}` : undefined;
