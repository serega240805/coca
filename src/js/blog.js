import "/scss/blog.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { headerVisible } from "./components/header.js";
import { useHeroSlider, useArticlesSlider } from "./components/blog/slider.js";
import { useTabs } from "./components/blog/tabs.js";

useTheme();
useBurger();
headerVisible();
useHeroSlider();
useArticlesSlider();
useTabs();