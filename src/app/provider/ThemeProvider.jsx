"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }) => {
  return (
    <div>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </div>
  );
};

export default ThemeProvider;
