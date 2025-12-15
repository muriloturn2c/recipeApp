'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useRecipes } from '@/context/RecipeContext';
import { cn } from '@/utils/cn';
import { ChefHat, Flame, Star, Zap } from 'lucide-react';
import { Difficulty } from '@/types/recipe';

export function Sidebar({ className }: { className?: string }) {
    const { t } = useLanguage();
    const { filterDifficulty, setFilterDifficulty } = useRecipes();

    const filters: { id: Difficulty | 'All'; label: string; icon: React.ReactNode }[] = [
        { id: 'All', label: 'filters.all', icon: <ChefHat className="w-4 h-4" /> },
        { id: 'Easy', label: 'filters.Easy', icon: <Zap className="w-4 h-4" /> },
        { id: 'Medium', label: 'filters.Medium', icon: <Flame className="w-4 h-4" /> },
        { id: 'Hard', label: 'filters.Hard', icon: <Star className="w-4 h-4" /> },
    ];

    return (
        <aside className={cn("w-64 flex-shrink-0 flex flex-col h-[calc(100vh-4rem)] sticky top-16 border-r border-border bg-card hidden md:flex", className)}>
            <div className="p-6">
                <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-3">
                    {t('filters.difficulty')}
                </h2>
            </div>

            <nav className="flex-1 px-3 space-y-1">
                {filters.map((filter) => {
                    const isActive = filterDifficulty === filter.id;
                    return (
                        <button
                            key={filter.id}
                            onClick={() => setFilterDifficulty(filter.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                                isActive
                                    ? "bg-primary/5 text-primary"
                                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                            )}
                        >
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-primary" />
                            )}
                            <span className={cn(isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")}>
                                {filter.icon}
                            </span>
                            <span>{t(filter.label)}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="p-4 mt-auto border-t border-border">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        System v1.0
                    </p>
                </div>
            </div>
        </aside>
    );
}
