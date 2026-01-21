'use client';

import Link from 'next/link';
import Image from 'next/image'
import { Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[var(--bg)] text-[var(--fg)] overflow-hidden pt-20 pb-10 border-t border-[var(--fg)]/10 transition-colors duration-300">
            {/* Background Texture */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none mix-blend-multiply dark:mix-blend-overlay"
                style={{
                    backgroundImage: "url('/assets/images/bg-texture.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full pr-8">
                        <div>
                            <div className="flex items-center gap-2 mb-6 -ml-4">
                                <div className="relative w-full max-w-[200px] lg:max-w-[300px] flex items-center -ml-2">
                                    <img
                                        src="/assets/images/keep-up-fixed.svg"
                                        alt="Keep Up Logo"
                                        className="w-48 h-auto object-contain nav-logo"
                                    />
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-medium leading-tight text-[var(--fg)] mb-8 pl-4">
                                Resolution Resilience.
                                <br />
                                <span className="text-[var(--fg)]/50">Everywhere you grow.</span>
                            </h2>
                        </div>

                        <div className="mt-auto pt-8 pl-4">
                            <p className="text-sm text-[var(--fg)]/40 flex items-center gap-1.5">
                                Built by a gee with
                                <Heart className="w-3.5 h-3.5 text-[var(--primary)] fill-[var(--primary)]" />
                            </p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 border-t border-b border-[var(--fg)]/10 border-r border-[var(--fg)]/10">
                        {/* Platform */}
                        <div className="flex flex-col space-y-6 border-l border-[var(--fg)]/10 pl-8 py-8 md:py-2">
                            <h3 className="text-sm font-semibold text-[var(--fg)] tracking-wide">Platform</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/dashboard" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Dashboard
                                </Link>
                                <Link href="/performance" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Performance
                                </Link>
                                <Link href="/growth" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Growth
                                </Link>
                                <Link href="/intelligence" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Intelligence
                                </Link>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="flex flex-col space-y-6 border-l border-[var(--fg)]/10 pl-8 py-8 md:py-2">
                            <h3 className="text-sm font-semibold text-[var(--fg)] tracking-wide">Company</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/about" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    About Us
                                </Link>
                                <Link href="/careers" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Careers
                                </Link>
                                <Link href="/contact" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col space-y-6 border-l border-[var(--fg)]/10 pl-8 py-8 md:py-2">
                            <h3 className="text-sm font-semibold text-[var(--fg)] tracking-wide">Legal</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/privacy" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>

                        {/* Connect */}
                        <div className="flex flex-col space-y-6 border-l border-[var(--fg)]/10 pl-8 py-8 md:py-2">
                            <h3 className="text-sm font-semibold text-[var(--fg)] tracking-wide">Connect</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="https://twitter.com" target="_blank" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    X (Twitter)
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    LinkedIn
                                </Link>
                                <Link href="https://instagram.com" target="_blank" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Instagram
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Line */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 border-t border-[var(--fg)]/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-[var(--fg)]/40 uppercase">
                    © {currentYear} KEEP-UP. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
