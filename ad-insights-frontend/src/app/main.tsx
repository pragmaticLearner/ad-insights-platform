import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColorModeProvider } from "@/components/ui/color-mode"
import {Provider} from "@/shared/styles/provider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
          <ColorModeProvider>
              <App/>
          </ColorModeProvider>
      </Provider>
  </StrictMode>,
)
