'use client';

import React from 'react';
import {
    Search,
    Bell,
    User,
    ChevronDown
} from 'lucide-react';

import { useAppSelector } from '@/redux/hooks';

/**
 * TopBar - Header for the main content area.
 * Contains search, notifications, and user profile.
 */
export default function TopBar() {
    const { user } = useAppSelector(state => state.auth);
    const displayName = user?.display_name || 'Protocol User';

    return (
        <header className="h-20 bg-background border-b border-border flex items-center justify-between px-8 z-40 transition-colors duration-300">

            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search size={18} className="text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search protocols, schedules, or analytics..."
                        className="w-full bg-foreground/5 border border-border rounded-lg py-2.5 pl-11 pr-4 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">

                {/* Notifications */}
                <button className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full transition-all group">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background group-hover:scale-125 transition-transform" />
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-4 pl-6 border-l border-border">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-black text-foreground tracking-tight uppercase">{displayName}</p>
                    </div>
                    <button className="flex items-center gap-2 p-1 rounded-lg hover:bg-foreground/5 transition-all group">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-foreground/10 flex items-center justify-center overflow-hidden">
                            <User size={20} className="text-foreground" />
                        </div>
                        <ChevronDown size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    </button>
                </div>

            </div>

        </header>
    );
}
