/**
 * Theme Configuration for Garage Auto
 * Modern Dark Theme with Neon Accents
 * 
 * This file documents the theme used throughout the application.
 * Colors are defined in app/globals.css and applied via Tailwind CSS.
 */

export const theme = {
    colors: {
        // Base Colors
        background: '#0B0F19',
        foreground: '#F9FAFB',
        card: 'rgba(255, 255, 255, 0.04)',
        cardForeground: '#F9FAFB',
        popover: '#0F1626',
        popoverForeground: '#F9FAFB',

        // Primary (Purple)
        primary: '#7C3AED',
        primaryForeground: '#ffffff',

        // Secondary (Dark Blue)
        secondary: '#060A14',
        secondaryForeground: '#F9FAFB',

        // Muted
        muted: '#1a2035',
        mutedForeground: '#9CA3AF',

        // Accent (Cyan)
        accent: '#06B6D4',
        accentForeground: '#ffffff',

        // Destructive (Red)
        destructive: '#DC2626',
        destructiveForeground: '#ffffff',

        // Neon Colors
        neonPurple: '#7C3AED',
        neonCyan: '#06B6D4',
        neonPink: '#EC4899',
        neonOrange: '#F97316',

        // Border & Input
        border: 'rgba(124, 58, 237, 0.2)',
        input: 'transparent',
        inputBackground: 'rgba(255, 255, 255, 0.05)',
        switchBackground: '#4B5563',

        // Focus
        ring: '#7C3AED',

        // Charts
        chart: {
            1: '#7C3AED',
            2: '#06B6D4',
            3: '#EC4899',
            4: '#F97316',
            5: '#10B981',
        },

        // Sidebar
        sidebar: '#060A14',
        sidebarForeground: '#F9FAFB',
        sidebarPrimary: '#7C3AED',
        sidebarPrimaryForeground: '#ffffff',
        sidebarAccent: '#06B6D4',
        sidebarAccentForeground: '#ffffff',
    },

    borderRadius: {
        default: '0.75rem',
        sm: 'calc(0.75rem - 4px)',
        md: 'calc(0.75rem - 2px)',
        lg: '0.75rem',
        xl: 'calc(0.75rem + 4px)',
    },

    fontWeights: {
        normal: 400,
        medium: 600,
    },

    gradients: {
        primary: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
        pink: 'linear-gradient(135deg, #EC4899, #F97316)',
        orange: 'linear-gradient(135deg, #F97316, #FB923C)',
    },

    shadows: {
        glowPurple: '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.2)',
        glowCyan: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.2)',
        glowPink: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.2)',
        glowOrange: '0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.2)',
    },

    // CSS Variable names for Tailwind
    cssVariables: {
        backgroundColor: 'var(--background)',
        foregroundColor: 'var(--foreground)',
        cardBackground: 'var(--card)',
        primaryColor: 'var(--primary)',
        accentColor: 'var(--accent)',
        borderColor: 'var(--border)',
        mutedColor: 'var(--muted)',
    },
} as const;

/**
 * Usage Examples:
 * 
 * 1. In React components with Tailwind:
 *    <button className="bg-primary text-primary-foreground">Click</button>
 *    <div className="bg-card border border-border">Card</div>
 * 
 * 2. With utility classes:
 *    <h1 className="gradient-text">Gradient Title</h1>
 *    <div className="glass-card">Glass effect</div>
 * 
 * 3. With shadows:
 *    <div className="neon-glow-purple">Neon Purple</div>
 *    <div className="neon-glow-cyan">Neon Cyan</div>
 * 
 * 4. With animations:
 *    <div className="animate-fade-in">Fade in animation</div>
 *    <div className="animate-slide-in-right">Slide in right</div>
 */
