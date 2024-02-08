import { Header } from "./components";
import { Footer } from "./components";
import { ScrollToTop } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import './index.css';
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
