'use client';
import { AppShell } from "@/components/layout/AppShell";
import { RecipeTable } from "@/features/recipes/components/RecipeTable";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex flex-col gap-1 mb-8 pb-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">
            {t('common.databaseTitle')}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t('common.databaseDesc')}
          </p>
        </div>
        <RecipeTable />
      </div>
    </AppShell>
  );
}
