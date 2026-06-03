import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TaskContextProvider } from './context/TaskContext.tsx'
// import { TaskContext } from './context/TaskContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>

  </StrictMode>,
)
