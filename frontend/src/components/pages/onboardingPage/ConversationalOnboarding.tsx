'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Message, UserGoal } from './types';
import OnboardingHeader from './components/OnboardingHeader';
import MessageBubble from './components/MessageBubble';
import TypingIndicator from './components/TypingIndicator';
import OnboardingInput from './components/OnboardingInput';

export default function ConversationalOnboarding() {
    const router = useRouter();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [step, setStep] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false);

    // Initial greeting
    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        const initialGreeting = async () => {
            setIsTyping(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            addMessage({
                text: "Hi there. I'm your personal health architect. I'm here to build a plan that adapts to your life, not the other way around.",
                sender: 'agent'
            });

            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsTyping(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            addMessage({
                text: "To get started, tell me in your own words: what is the one thing you want to change most right now?",
                sender: 'agent'
            });
            setIsTyping(false);
        };

        initialGreeting();
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const addMessage = (msg: Omit<Message, 'id' | 'timestamp'>) => {
        const newMessage: Message = {
            id: Math.random().toString(36).substring(7),
            timestamp: new Date(),
            ...msg
        };
        setMessages(prev => [...prev, newMessage]);
        setIsTyping(false);
    };

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        // Add user message
        addMessage({ text, sender: 'user' });
        setInputValue('');

        // Process response
        setIsTyping(true);
        await processUserResponse(text);
    };

    const processUserResponse = async (text: string) => {
        // Simulate AI processing time
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

        if (step === 0) {
            // Determine category from open-ended text
            let category: UserGoal = 'wellness';
            const lowerText = text.toLowerCase();

            if (lowerText.includes('weight') || lowerText.includes('fit') || lowerText.includes('strength') || lowerText.includes('muscle')) category = 'fitness';
            else if (lowerText.includes('sleep') || lowerText.includes('tired') || lowerText.includes('rest') || lowerText.includes('insomnia')) category = 'sleep';
            else if (lowerText.includes('stress') || lowerText.includes('anxiety') || lowerText.includes('calm') || lowerText.includes('relax')) category = 'stress';

            // Store specific goal in localStorage for the dashboard to pick up
            // In a real app, this would go to the backend/store
            if (typeof window !== 'undefined') {
                localStorage.setItem('userSpecificGoal', text);
                localStorage.setItem('userPrimaryCategory', category || 'wellness');
            }

            setStep(1);

            const responses = {
                fitness: "Got it. We'll focus on efficient training and nutrition, but I'll also watch your recovery so you don't burn out.",
                sleep: "Understood. Sleep is the foundation. We'll optimize your evenings and routines to get you the rest you need.",
                stress: "I hear you. We'll prioritize mental clarity and calm. No intense pressure, just supportive guidance.",
                wellness: "Sounds good. A balanced approach is often the most sustainable. We'll work on energy and overall vitality."
            };

            addMessage({
                text: responses[category || 'wellness'],
                sender: 'agent'
            });

            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsTyping(true);
            await new Promise(resolve => setTimeout(resolve, 1500));

            addMessage({
                text: "I've designed a custom dashboard based on this goal. Ready to see it?",
                sender: 'agent',
                type: 'options',
                options: ["Let's go", "Tell me more first"]
            });
        } else if (step === 1) {
            // Final step
            addMessage({
                text: "Setting everything up...",
                sender: 'agent'
            });

            await new Promise(resolve => setTimeout(resolve, 1500));
            router.push('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--primary)] opacity-[0.03] blur-[100px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--secondary)] opacity-[0.03] blur-[100px] rounded-full" />
            </div>

            <div className="w-full max-w-2xl flex flex-col h-[80vh] glass-card rounded-3xl relative z-10 shadow-2xl border border-[var(--border)]">
                <OnboardingHeader />

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                    <AnimatePresence initial={false}>
                        {messages.map((msg) => (
                            <MessageBubble
                                key={msg.id}
                                message={msg}
                                onOptionClick={handleSendMessage}
                            />
                        ))}
                    </AnimatePresence>

                    {isTyping && <TypingIndicator />}

                    <div ref={messagesEndRef} />
                </div>

                <OnboardingInput
                    value={inputValue}
                    onChange={setInputValue}
                    onSubmit={() => handleSendMessage(inputValue)}
                    disabled={isTyping || (messages.length > 0 && messages[messages.length - 1].type === 'options')}
                />
            </div>
        </div>
    );
}
