'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useRecipes } from '@/context/RecipeContext';
import { Recipe } from '@/types/recipe';
import { Clock, Users, ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import { cn } from '@/utils/cn';

const ITEMS_PER_PAGE = 10;

export function RecipeTable() {
    const { t } = useLanguage();
    const { filteredRecipes, loading, error } = useRecipes();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination Logic
    const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentRecipes = filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleRowClick = (id: number) => {
        router.push(`/item/${id}`);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="w-full h-96 flex items-center justify-center animate-pulse">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                    <p className="text-muted-foreground font-medium">{t('common.loading')}</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-96 flex items-center justify-center">
                <div className="p-6 rounded-2xl bg-red-50 text-red-600 border border-red-100 text-center">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (filteredRecipes.length === 0) {
        return (
            <div className="w-full h-96 flex flex-col items-center justify-center text-muted-foreground space-y-4">
                <Utensils className="w-12 h-12 opacity-20" />
                <p>No recipes found matching your criteria.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-slate-50 dark:bg-slate-900/50">
                                <th className="p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">{t('recipe.name')}</th>
                                <th className="p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden md:table-cell">{t('recipe.cuisine')}</th>
                                <th className="p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">{t('recipe.prepTime')}</th>
                                <th className="p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">{t('recipe.cookTime')}</th>
                                <th className="p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden lg:table-cell">{t('recipe.servings')}</th>
                                <th className="p-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-right">{t('filters.difficulty')}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {currentRecipes.map((recipe) => (
                                <tr
                                    key={recipe.id}
                                    onClick={() => handleRowClick(recipe.id)}
                                    className="group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    <td className="p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded bg-secondary flex-shrink-0 overflow-hidden border border-border">
                                                <img
                                                    src={recipe.image}
                                                    alt={recipe.name}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                                                {recipe.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-foreground/80 hidden md:table-cell">
                                        {recipe.cuisine}
                                    </td>
                                    <td className="p-4 text-sm text-muted-foreground hidden sm:table-cell w-32 font-mono">
                                        {recipe.prepTimeMinutes} {t('recipe.minutes')}
                                    </td>
                                    <td className="p-4 text-sm text-muted-foreground hidden sm:table-cell w-32 font-mono">
                                        {recipe.cookTimeMinutes} {t('recipe.minutes')}
                                    </td>
                                    <td className="p-4 text-sm text-muted-foreground hidden lg:table-cell w-24">
                                        {recipe.servings}
                                    </td>
                                    <td className="p-4 text-right">
                                        <span className={cn(
                                            "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border",
                                            recipe.difficulty === 'Easy' && "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900",
                                            recipe.difficulty === 'Medium' && "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900",
                                            recipe.difficulty === 'Hard' && "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900",
                                        )}>
                                            {t(`difficulty.${recipe.difficulty}` as any)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">
                        Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{Math.min(startIndex + ITEMS_PER_PAGE, filteredRecipes.length)}</span> of <span className="font-medium">{filteredRecipes.length}</span> entries
                    </span>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1.5 rounded-md border border-border bg-card text-sm font-medium hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1.5 rounded-md border border-border bg-card text-sm font-medium hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
