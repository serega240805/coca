import "/scss/about.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { useHeroSlider, useOurTeamSlider } from "./components/about/slider.js";

useTheme();
useBurger();
useHeroSlider();
useOurTeamSlider();