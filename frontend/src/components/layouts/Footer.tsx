'use client';

import Link from 'next/link';
import Image from 'next/image'
import { Heart, Instagram, Twitter, Youtube } from 'lucide-react';

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
                                Your Partner in
                                <br />
                                <span className="text-[var(--fg)]/50">Transformation.</span>
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
                        {/* Features */}
                        <div className="flex flex-col space-y-6 border-l border-[var(--fg)]/10 pl-8 py-8 md:py-2">
                            <h3 className="text-sm font-semibold text-[var(--fg)] tracking-wide">Features</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/features/custom-workout-plans" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Workout Plans
                                </Link>
                                <Link href="/features/nutrition-guidance" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Nutrition
                                </Link>
                                <Link href="/features/health-monitoring" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Health Tracking
                                </Link>
                                <Link href="/features/community-support" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Community
                                </Link>
                            </div>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col space-y-6 border-l border-[var(--fg)]/10 pl-8 py-8 md:py-2">
                            <h3 className="text-sm font-semibold text-[var(--fg)] tracking-wide">Resources</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Getting Started
                                </Link>
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Success Stories
                                </Link>
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Blog
                                </Link>
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    FAQ
                                </Link>
                            </div>
                        </div>

                        {/* Support */}
                        <div className="flex flex-col space-y-6 border-l border-[var(--fg)]/10 pl-8 py-8 md:py-2">
                            <h3 className="text-sm font-semibold text-[var(--fg)] tracking-wide">Support</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Help Center
                                </Link>
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Contact Us
                                </Link>
                                <Link href="/privacy" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Privacy
                                </Link>
                                <Link href="/terms" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors">
                                    Terms
                                </Link>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex flex-col space-y-6 border-l border-[var(--fg)]/10 pl-8 py-8 md:py-2">
                            <h3 className="text-sm font-semibold text-[var(--fg)] tracking-wide">Social</h3>
                            <div className="flex flex-col space-y-4">
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors flex items-center gap-2">
                                    <Instagram className="w-4 h-4" />
                                    Instagram
                                </Link>
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors flex items-center gap-2">
                                    <Twitter className="w-4 h-4" />
                                    Twitter
                                </Link>
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors flex items-center gap-2">
                                    <Youtube className="w-4 h-4" />
                                    YouTube
                                </Link>
                                <Link href="/" className="text-sm text-[var(--fg)]/60 hover:text-[var(--fg)] transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                    TikTok
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
