import React from 'react';
import { Sparkles } from 'lucide-react';

export default function OnboardingHeader() {
    return (
        <div className="p-6 border-b border-[var(--border)] flex items-center justify-between backdrop-blur-md bg-[var(--navbar-bg)] rounded-t-3xl">
            <div className="w-32">
                <img src="/assets/images/keep-up-fixed.svg" alt="Keep Up Logo" className="w-full h-auto object-contain nav-logo" />
            </div>
            <div>
                <h1 className="font-semibold text-lg text-[var(--fg)]">Welcome</h1>
                <p className="text-xs text-[var(--fg)] opacity-60">Your journey starts here</p>
            </div>
            <div className="text-xs font-mono opacity-40">BETA v1.0</div>
        </div>
    );
}
