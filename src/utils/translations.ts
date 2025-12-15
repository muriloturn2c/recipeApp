export type Language = 'en' | 'es';

export const translations = {
    en: {
        common: {
            back: 'Back to recipes',
            error: 'Something went wrong. Please try again later.',
            title: 'RecipeApp',
            login: 'Login',
            searchPlaceholder: 'Search recipes...',
            databaseTitle: 'Global Recipe Database',
            databaseDesc: 'Select a category from the sidebar or search to find technical preparation guides.',
            footer: '© RecipeApp. All rights reserved.',
            loading: 'Loading...',
            noRecipes: 'No recipes found matching your criteria.',
            previous: 'Previous',
            next: 'Next',
            showing: 'Showing',
            to: 'to',
            of: 'of',
            entries: 'entries',
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
            minutes: 'min',
            cuisine: 'Cuisine',
            prepTime: 'Prep',
            cookTime: 'Cook',
            servings: 'Servings',
            name: 'Recipe',
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
            back: 'Volver a recetas',
            error: 'Algo salió mal. Por favor, inténtelo de nuevo más tarde.',
            title: 'RecipeApp',
            login: 'Iniciar Sesión',
            searchPlaceholder: 'Buscar recetas...',
            databaseTitle: 'Base de Datos Global de Recetas',
            databaseDesc: 'Seleccione una categoría de la barra lateral o busque para encontrar guías técnicas de preparación.',
            footer: '© RecipeApp. Todos los derechos reservados.',
            loading: 'Cargando...',
            noRecipes: 'No se encontraron recetas con sus criterios.',
            previous: 'Anterior',
            next: 'Siguiente',
            showing: 'Mostrando',
            to: 'a',
            of: 'de',
            entries: 'entradas',
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
            minutes: 'min',
            cuisine: 'Cocina',
            prepTime: 'Prep',
            cookTime: 'Cocción',
            servings: 'Porciones',
            name: 'Receta',
            rating: 'Valoración',
        },
        difficulty: {
            Easy: 'Fácil',
            Medium: 'Media',
            Hard: 'Difícil'
        }
    },
};
