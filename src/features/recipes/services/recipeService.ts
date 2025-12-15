import axios from 'axios';
import { RecipeResponse, Recipe } from '@/types/recipe';

const API_URL = 'https://dummyjson.com/recipes';

/**
 * Service to handle recipe-related API interactions.
 */
export const recipeService = {
    /**
   * Fetches all recipes from the API.
   * Uses `limit=0` to retrieve the full dataset for client-side filtering.
   * @returns {Promise<Recipe[]>} List of all recipes.
   */
    async getAllRecipes(): Promise<Recipe[]> {
        try {
            // Fetching with limit=0 to get all recipes as per docs for client-side filtering support
            const response = await axios.get<RecipeResponse>(`${API_URL}?limit=0`);
            return response.data.recipes;
        } catch (error) {
            console.error('Error fetching recipes:', error);
            throw error;
        }
    },

    /**
   * Fetches a single recipe by its ID.
   * @param {number} id - The ID of the recipe to fetch.
   * @returns {Promise<Recipe>} The detailed recipe object.
   */
    async getRecipeById(id: number): Promise<Recipe> {
        try {
            const response = await axios.get<Recipe>(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching recipe ${id}:`, error);
            throw error;
        }
    },

    /**
   * Searches for recipes based on a query string.
   * @param {string} query - The search term.
   * @returns {Promise<Recipe[]>} List of matching recipes.
   */
    async searchRecipes(query: string): Promise<Recipe[]> {
        try {
            const response = await axios.get<RecipeResponse>(`${API_URL}/search?q=${query}`);
            return response.data.recipes;
        } catch (error) {
            console.error(`Error searching recipes ${query}:`, error);
            throw error;
        }
    }
};
