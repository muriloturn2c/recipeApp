import { AppShell } from "@/components/layout/AppShell";
import { RecipeTable } from "@/features/recipes/components/RecipeTable";

export default function Home() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-1 mb-8 pb-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">
            Global Recipe Database
          </h2>
          <p className="text-sm text-muted-foreground">
            Select a category from the sidebar or search to find technical preparation guides.
          </p>
        </div>
        <RecipeTable />
      </div>
    </AppShell>
  );
}
