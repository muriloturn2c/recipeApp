'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { recipeService } from '@/features/recipes/services/recipeService';
import { Recipe } from '@/types/recipe';
import { ArrowLeft, Clock, Users, Star, ChefHat, CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';

interface RecipeDetailProps {
    recipeId: number;
}

export function RecipeDetail({ recipeId }: RecipeDetailProps) {
    const { t } = useLanguage();
    const router = useRouter();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadRecipe = async () => {
            try {
                setLoading(true);
                const data = await recipeService.getRecipeById(recipeId);
                setRecipe(data);
            } catch (err) {
                setError('Failed to load recipe details');
            } finally {
                setLoading(false);
            }
        };
        loadRecipe();
    }, [recipeId]);

    if (loading) {
        return (
            <div className="w-full h-[60vh] flex items-center justify-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-primary" role="status"></div>
            </div>
        );
    }

    if (error || !recipe) {
        return (
            <div className="w-full h-96 flex items-center justify-center">
                <div className="p-8 text-center bg-card border border-border rounded-lg max-w-md shadow-sm">
                    <h3 className="text-lg font-bold text-red-600 mb-2">{t('common.error')}</h3>
                    <button
                        onClick={() => router.back()}
                        className="text-primary hover:underline text-sm font-medium"
                    >
                        {t('common.back')}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-12 animate-slide-up">
            {/* Header & Back */}
            <div className="flex items-center gap-4 border-b border-border pb-6">
                <button
                    onClick={() => router.back()}
                    className="p-2 -ml-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{recipe.name}</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span className="font-medium text-primary uppercase tracking-wider">{recipe.cuisine}</span>
                        <span>•</span>
                        <span>{recipe.difficulty} Difficulty</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content (Image & Instructions) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Hero Image */}
                    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-border shadow-sm">
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Instructions */}
                    <div className="bg-card border border-border rounded-lg shadow-sm">
                        <div className="p-6 border-b border-border bg-slate-50 dark:bg-slate-900/50">
                            <h3 className="text-lg font-semibold text-foreground">{t('recipe.instructions')}</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-6">
                                {recipe.instructions.map((instruction, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-mono border border-primary/20">
                                            {idx + 1}
                                        </span>
                                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                            {instruction}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Stats & Ingredients) */}
                <div className="space-y-6">
                    {/* Stats Card */}
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm grid grid-cols-2 gap-4">
                        <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                            <div className="text-xs text-muted-foreground uppercase opacity-70 mb-1">Time</div>
                            <div className="text-lg font-semibold flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary" />
                                {recipe.prepTimeMinutes + recipe.cookTimeMinutes}m
                            </div>
                        </div>
                        <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                            <div className="text-xs text-muted-foreground uppercase opacity-70 mb-1">Yield</div>
                            <div className="text-lg font-semibold flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                {recipe.servings}
                            </div>
                        </div>
                        <div className="col-span-2 p-3 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-900/50">
                            <div className="text-xs text-amber-700 dark:text-amber-400 uppercase opacity-70 mb-1">Rating</div>
                            <div className="text-lg font-semibold flex items-center gap-2 text-amber-700 dark:text-amber-400">
                                <Star className="w-4 h-4 fill-current" />
                                {recipe.rating} <span className="text-sm font-normal opacity-70">({recipe.reviewCount} reviews)</span>
                            </div>
                        </div>
                    </div>

                    {/* Ingredients Card */}
                    <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-border bg-slate-50 dark:bg-slate-900/50">
                            <h3 className="font-semibold text-foreground">{t('recipe.ingredients')}</h3>
                        </div>
                        <ul className="divide-y divide-border">
                            {recipe.ingredients.map((ingredient, idx) => (
                                <li key={idx} className="p-3 flex items-start gap-3 text-sm text-muted-foreground hover:bg-secondary/30 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-primary/40 mt-0.5" />
                                    <span>{ingredient}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
