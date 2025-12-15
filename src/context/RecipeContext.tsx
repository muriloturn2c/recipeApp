'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Recipe, Difficulty } from '@/types/recipe';
import { recipeService } from '@/features/recipes/services/recipeService';

interface RecipeContextType {
    recipes: Recipe[];
    filteredRecipes: Recipe[];
    loading: boolean;
    error: string | null;
    filterDifficulty: Difficulty | 'All';
    setFilterDifficulty: (difficulty: Difficulty | 'All') => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    refreshRecipes: () => Promise<void>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: React.ReactNode }) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filterDifficulty, setFilterDifficulty] = useState<Difficulty | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const refreshRecipes = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await recipeService.getAllRecipes();
            setRecipes(data);
        } catch (err) {
            setError('Failed to fetch recipes');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshRecipes();
    }, []);

    const filteredRecipes = useMemo(() => {
        let result = recipes;

        // Filter by Difficulty
        if (filterDifficulty !== 'All') {
            result = result.filter(r => r.difficulty === filterDifficulty);
        }

        // Filter by Search Query
        if (searchQuery.trim()) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(r => r.name.toLowerCase().includes(lowerQuery));
        }

        return result;
    }, [recipes, filterDifficulty, searchQuery]);

    return (
        <RecipeContext.Provider
            value={{
                recipes,
                filteredRecipes,
                loading,
                error,
                filterDifficulty,
                setFilterDifficulty,
                searchQuery,
                setSearchQuery,
                refreshRecipes
            }}
        >
            {children}
        </RecipeContext.Provider>
    );
}

export function useRecipes() {
    const context = useContext(RecipeContext);
    if (context === undefined) {
        throw new Error('useRecipes must be used within a RecipeProvider');
    }
    return context;
}
