import "/scss/about.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { headerVisible } from "./components/header.js";
import { useHeroSlider, useOurTeamSlider } from "./components/about/slider.js";

useTheme();
useBurger();
headerVisible();
useHeroSlider();
useOurTeamSlider();
