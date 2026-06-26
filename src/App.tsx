import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    // <div className="min-h-screen flex items-center justify-center">
    //   <h1 className="text-3xl font-bold">
    //     ActionFlow AI 🚀
    //   </h1>
    // </div>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
