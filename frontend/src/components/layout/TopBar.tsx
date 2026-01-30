'use client';

import React, { useState } from 'react';
import {
    Search,
    Bell,
    User,
    ChevronDown,
    Circle
} from 'lucide-react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useNotifications } from '@/hooks/useNotifications';
import { markRead } from '@/redux/slices/notificationSlice';
import { markAsRead as apiMarkAsRead } from '@/lib/notificationApi';

/**
 * TopBar - Header for the main content area.
 * Contains search, notifications, and user profile.
 */
export default function TopBar() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);
    const { notifications, unreadCount } = useNotifications();
    const [showNotifications, setShowNotifications] = useState(false);

    const displayName = user?.display_name || 'Protocol User';

    const handleMarkRead = async (id: number) => {
        try {
            await apiMarkAsRead(id);
            dispatch(markRead(id));
        } catch (error) {
            console.error('Failed to mark notification as read:', error);
        }
    };

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
                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative p-2.5 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all group"
                    >
                        <Bell size={24} strokeWidth={1.5} />
                        {unreadCount > 0 && (
                            <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 bg-primary text-[10px] font-black text-background flex items-center justify-center rounded-full border-2 border-background shadow-lg shadow-primary/20">
                                {unreadCount > 99 ? '99+' : unreadCount}
                            </span>
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-3 w-80 bg-card border border-border rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="p-4 border-b border-border flex items-center justify-between">
                                <h3 className="text-xs font-black uppercase tracking-widest text-foreground">Protocol Alerts</h3>
                                <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">{unreadCount} Unread</span>
                            </div>
                            <div className="max-h-96 overflow-y-auto custom-scrollbar">
                                {notifications.length > 0 ? (
                                    notifications.map((n) => (
                                        <div
                                            key={n.id}
                                            onClick={() => handleMarkRead(n.id)}
                                            className={`p-4 border-b border-border/50 transition-colors cursor-pointer hover:bg-foreground/5 ${!n.read ? 'bg-primary/5' : ''}`}
                                        >
                                            <div className="flex gap-3">
                                                <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${!n.read ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                                                <div className="space-y-1">
                                                    <p className="text-xs font-bold text-foreground leading-tight">{n.title}</p>
                                                    <p className="text-[11px] text-muted-foreground line-clamp-2">{n.message}</p>
                                                    <p className="text-[9px] text-muted-foreground uppercase font-medium">{new Date(n.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-8 text-center bg-foreground/2">
                                        <Bell size={32} className="mx-auto mb-3 text-muted-foreground/20" />
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">No active alerts</p>
                                    </div>
                                )}
                            </div>
                            <div className="p-3 bg-foreground/2 text-center border-t border-border">
                                <button className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">View All Protocol Logs</button>
                            </div>
                        </div>
                    )}
                </div>

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
