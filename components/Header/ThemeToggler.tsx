import { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { setTheme } = useTheme();

  // Ensure the theme is always set to "light"
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <button
      aria-label="theme toggler"
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-200 h-9 w-9 md:h-14 md:w-14"
      disabled
    >
      <svg
        viewBox="0 0 23 23"
        className="w-5 h-5 stroke-current md:h-6 md:w-6"
        fill="none"
      >
        <path
          d="M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ThemeToggler;
