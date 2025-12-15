'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useRecipes } from '@/context/RecipeContext';
import { Search, UtensilsCrossed, User, Menu, X, ChefHat, Zap, Flame, Star } from 'lucide-react';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { Difficulty } from '@/types/recipe';

export function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const { searchQuery, setSearchQuery, setFilterDifficulty, filterDifficulty } = useRecipes();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const filters: { id: Difficulty | 'All'; label: string; icon: React.ReactNode }[] = [
        { id: 'All', label: 'filters.all', icon: <ChefHat className="w-4 h-4" /> },
        { id: 'Easy', label: 'filters.Easy', icon: <Zap className="w-4 h-4" /> },
        { id: 'Medium', label: 'filters.Medium', icon: <Flame className="w-4 h-4" /> },
        { id: 'Hard', label: 'filters.Hard', icon: <Star className="w-4 h-4" /> },
    ];

    const handleMobileFilter = (id: Difficulty | 'All') => {
        setFilterDifficulty(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-card border-b border-border flex items-center justify-between transition-all duration-300 shadow-sm">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-4 text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 px-6 md:px-8 hover:opacity-80 transition-opacity">
                <div className="p-1.5 bg-primary rounded-lg text-primary-foreground shadow-sm">
                    <UtensilsCrossed className="w-5 h-5" />
                </div>
                <h1 className="text-lg font-bold tracking-tight text-foreground hidden md:block">
                    {t('common.title')}
                </h1>
            </Link>

            {/* Search Bar - Centered */}
            <div className="flex-1 max-w-2xl mx-4">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder={t('common.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-9 pl-10 pr-4 rounded-md bg-secondary border border-transparent focus:border-primary/20 focus:bg-background focus:ring-2 focus:ring-primary/10 transition-all text-sm placeholder:text-muted-foreground/60"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 px-6 md:px-8">
                {/* Language Switcher */}
                <button
                    onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                    className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest border border-border rounded px-2 py-1"
                >
                    {language}
                </button>
            </div>
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-3xl border-b border-border p-4 flex flex-col gap-4 md:hidden animate-fade-in shadow-2xl">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-2">
                            {t('filters.difficulty')}
                        </h3>
                        <div className="space-y-1">
                            {filters.map(filter => (
                                <button
                                    key={filter.id}
                                    onClick={() => handleMobileFilter(filter.id)}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                                        filterDifficulty === filter.id
                                            ? "bg-primary text-primary-foreground"
                                            : "hover:bg-secondary"
                                    )}
                                >
                                    {filter.icon}
                                    {t(filter.label)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
