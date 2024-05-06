import "/scss/pricing.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { headerVisible } from "./components/header.js";
import { usePriceSwitcher } from "./components/pricing/priceSwitcher.js";

useTheme();
useBurger();
headerVisible();
usePriceSwitcher();