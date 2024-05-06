import "/scss/article.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { headerVisible } from "./components/header.js";

useTheme();
useBurger();
headerVisible();
