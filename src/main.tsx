import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted fonts (Archivo Variable with width axis, Instrument Sans, IBM Plex Mono)
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource/instrument-sans/400.css';
import '@fontsource/instrument-sans/500.css';
import '@fontsource/instrument-sans/600.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
