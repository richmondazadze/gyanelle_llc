import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react({
      // Use the new JSX runtime
      jsxRuntime: 'automatic',
      // Enable Babel optimization
      babel: {
        babelrc: true,
        configFile: true,
      },
    }),
    tailwindcss(),
    // Visualize bundle size (only in development)
    process.env.NODE_ENV === 'development' && visualizer({
      open: true,
      filename: 'dist/bundle-analyzer-report.html',
    }),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  root: path.resolve(import.meta.dirname, "client"),
  
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== 'production',
    minify: 'terser',
    cssMinify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) return 'vendor-ui';
            if (id.includes('framer-motion')) return 'vendor-animations';
            if (id.includes('date-fns') || id.includes('clsx') || id.includes('class-variance-authority')) return 'vendor-utils';
            return 'vendor';
          }
        },
      },
    },
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
      },
    } as any,  // Type assertion to handle TerserOptions type
  },
  
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
  
  preview: {
    port: 3000,
    strictPort: true,
  },
});
