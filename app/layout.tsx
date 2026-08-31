import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/config/site';
export const metadata: Metadata = { metadataBase:new URL(`https://${site.domain}`), title:{default:site.name,template:`%s · ${site.name}`}, description:site.description, alternates:{canonical:'/'}, openGraph:{type:'website',siteName:site.name,title:site.name,description:site.description} };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
