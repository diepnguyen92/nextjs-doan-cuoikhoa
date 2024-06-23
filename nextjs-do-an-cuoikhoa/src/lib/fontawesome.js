// lib/fontawesome.js
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faShoppingCart, faCreditCard, faStore } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false; // Tắt tự động thêm CSS

library.add(faUser, faShoppingCart, faCreditCard, faStore);
