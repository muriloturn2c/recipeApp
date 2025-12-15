import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { RecipeTable } from '@/features/recipes/components/RecipeTable'
import { RecipeProvider } from '@/context/RecipeContext'
import { LanguageProvider } from '@/context/LanguageContext'

// Mock useRecipes to return dummy data
jest.mock('@/context/RecipeContext', () => ({
    ...jest.requireActual('@/context/RecipeContext'),
    useRecipes: () => ({
        filteredRecipes: [
            {
                id: 1,
                name: 'Test Pizza',
                ingredients: ['Dough', 'Sauce'],
                prepTimeMinutes: 10,
                cookTimeMinutes: 20,
                servings: 4,
                difficulty: 'Easy',
                cuisine: 'Italian',
                image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
                instructions: [],
                rating: 4.5,
                reviewCount: 10,
                mealType: ['Dinner'],
                tags: ['Pizza'],
                userId: 1,
                caloriesPerServing: 300
            }
        ],
        loading: false,
        error: null,
        filterDifficulty: 'All',
        setFilterDifficulty: jest.fn(),
        searchQuery: '',
        setSearchQuery: jest.fn(),
        refreshRecipes: jest.fn(),
    })
}));

// Mock useRouter
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    })
}));

describe('RecipeTable', () => {
    it('renders recipe data correctly', () => {
        render(
            <LanguageProvider>
                <RecipeTable />
            </LanguageProvider>
        )

        expect(screen.getByText('Test Pizza')).toBeInTheDocument()
        expect(screen.getByText('Italian')).toBeInTheDocument()
        expect(screen.getByText('Easy')).toBeInTheDocument()
    })
})
