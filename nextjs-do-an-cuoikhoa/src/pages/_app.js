import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import CSS
config.autoAddCss = false; // Tắt auto-add CSS để tránh thêm CSS tự động

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
