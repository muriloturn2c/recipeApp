export type Language = 'en' | 'es';

export const translations = {
    en: {
        common: {
            searchPlaceholder: 'Search recipes...',
            title: 'RecipeApp',
            footer: '© RecipeApp. All rights reserved.',
            loading: 'Loading...',
            error: 'An error occurred',
            back: 'Back to recipes',
        },
        filters: {
            difficulty: 'Difficulty',
            all: 'All Difficulties',
            Easy: 'Easy',
            Medium: 'Medium',
            Hard: 'Hard',
        },
        recipe: {
            ingredients: 'Ingredients',
            instructions: 'Instructions',
            prepTime: 'Prep Time',
            cookTime: 'Cook Time',
            servings: 'Servings',
            cuisine: 'Cuisine',
            minutes: 'min',
            rating: 'Rating',
        },
        difficulty: {
            Easy: 'Easy',
            Medium: 'Medium',
            Hard: 'Hard'
        }
    },
    es: {
        common: {
            searchPlaceholder: 'Buscar recetas...',
            title: 'RecetasApp',
            footer: '© RecipeApp. Todos los derechos reservados.',
            loading: 'Cargando...',
            error: 'Ocurrió un error',
            back: 'Volver a la lista',
        },
        filters: {
            difficulty: 'Dificultad',
            all: 'Todas las dificultades',
            Easy: 'Fácil',
            Medium: 'Media',
            Hard: 'Difícil',
        },
        recipe: {
            ingredients: 'Ingredientes',
            instructions: 'Instrucciones',
            prepTime: 'Tiempo Prep',
            cookTime: 'Tiempo Cocción',
            servings: 'Porciones',
            cuisine: 'Cocina',
            minutes: 'min',
            rating: 'Valoración',
        },
        difficulty: {
            Easy: 'Fácil',
            Medium: 'Media',
            Hard: 'Difícil'
        }
    },
};
