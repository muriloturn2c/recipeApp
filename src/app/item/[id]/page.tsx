import { AppShell } from "@/components/layout/AppShell";
import { RecipeDetail } from "@/features/recipes/components/RecipeDetail";

export default async function RecipePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id, 10);

    return (
        <AppShell>
            <RecipeDetail recipeId={id} />
        </AppShell>
    );
}
