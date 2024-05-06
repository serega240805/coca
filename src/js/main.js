import "/scss/main.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { headerVisible } from "./components/header.js";
import { usePartnersSlider } from "./components/slider.js";
import { useInsightSlider, useTestimonialsSlider } from "./components/home/slider.js";

useTheme();
useBurger();
headerVisible();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();