'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="w-full py-6 mt-8 border-t border-border/50 glass-nav">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-muted-foreground">
                    {t('common.footer')} | {year}
                </p>
            </div>
        </footer>
    );
}
