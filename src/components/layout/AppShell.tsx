'use client';

import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { usePathname } from 'next/navigation';

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <div className="flex flex-1 pt-16">
                {isHomePage && (
                    <Sidebar className="hidden md:block w-64 border-r border-border bg-card shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] z-10" />
                )}

                <main className="flex-1 w-full overflow-x-hidden animate-fade-in flex flex-col bg-background">
                    <div className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}
