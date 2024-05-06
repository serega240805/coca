import "/scss/contact.scss";

// components
import { useTheme } from "./components/theme.js";
import { useBurger } from "./components/burger.js";
import { headerVisible } from "./components/header.js";
import { usePhone } from "./components/contact/phone.js";
import { useForm } from "./components/contact/form.js";

useTheme();
useBurger();
headerVisible();
usePhone();
useForm();