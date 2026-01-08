import { Mail, Send, ArrowRight, CheckCircle, Loader2, XCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import * as React from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message too short (min. 10 characters)';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));

        if (errors[id as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [id]: '' }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setStatus('loading');

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                PUBLIC_KEY
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);

        } catch (error) {
            console.error('FAILED...', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const getInputStyles = (hasError: boolean) => `
        w-full px-5 py-4 rounded-xl 
        bg-slate-50 dark:bg-zinc-900/50 
        border outline-none transition-all duration-300
        text-slate-900 dark:text-white placeholder:text-slate-400
        ${hasError
        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
        : 'border-slate-200 dark:border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
    }
    `;

    return (
        <div className="py-24 bg-white dark:bg-[#09090b] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col h-full justify-between gap-10">

                        {/* Header Text */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                                Let's Work
                                <span className="ms-2 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-purple-600">
                                    Together
                                </span>
                                <span className="block h-1.5 w-24 bg-blue-600 dark:bg-blue-500 rounded-full my-3"></span>
                            </h2>
                            <p className="text-lg text-justify text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                                Have an exciting project idea? Or just want to say hello?
                                Feel free to reach out. I'm always open to discussing new projects and opportunities.
                            </p>
                        </div>

                        {/* Email Card */}
                        <div className="mt-auto">
                            <div className="group w-full max-w-md rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-500/30">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-white/10 text-blue-600 dark:text-blue-400 shadow-sm transition-transform duration-300">
                                        <Mail size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email Me</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                                            Usually replies within 24h
                                        </p>
                                    </div>
                                </div>

                                <button type="button" className="flex items-center justify-between w-full px-5 py-3 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 shadow-sm group/btn">
                                    <span>Send an Email</span>
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- Form --- */}
                    <div className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none">
                        <form onSubmit={handleSubmit} noValidate className="space-y-6">

                            {/* Input Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={getInputStyles(!!errors.name)}
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={status === 'loading'}
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-500 flex items-center gap-1.5 ml-1 font-medium animate-pulse">
                                        <AlertCircle size={14} /> {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Input Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={getInputStyles(!!errors.email)}
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={status === 'loading'}
                                />
                                {errors.email && (
                                    <p className="text-xs text-red-500 flex items-center gap-1.5 ml-1 font-medium animate-pulse">
                                        <AlertCircle size={14} /> {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Input Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={`${getInputStyles(!!errors.message)} resize-none`}
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={status === 'loading'}
                                />
                                {errors.message && (
                                    <p className="text-xs text-red-500 flex items-center gap-1.5 ml-1 font-medium animate-pulse">
                                        <AlertCircle size={14} /> {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`
                                    w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2
                                    ${status === 'idle' ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5' : ''}
                                    ${status === 'loading' ? 'bg-slate-400 cursor-not-allowed text-slate-100' : ''}
                                    ${status === 'success' ? 'bg-green-500 hover:bg-green-600 shadow-green-500/25' : ''}
                                    ${status === 'error' ? 'bg-red-500 hover:bg-red-600' : ''}
                                `}
                            >
                                {status === 'idle' && (
                                    <> <Send size={18} /> Send Message </>
                                )}
                                {status === 'loading' && (
                                    <> <Loader2 size={18} className="animate-spin" /> Sending... </>
                                )}
                                {status === 'success' && (
                                    <> <CheckCircle size={18} /> Message Sent! </>
                                )}
                                {status === 'error' && (
                                    <> <XCircle size={18} /> Failed. Try Again. </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}