import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Upload } from "./pages/Upload";
import { Recommend } from "./pages/Recommend";
import { Ranking } from "./pages/contests/Rankings";
// import { ApplicationBasePage } from "./pages/Application/ApplicationBase";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/recommend" element={<Recommend />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          {/* <Route path="/settings" element={<SettingsPage />} />
            <Route path="/auth/signup" element={<SignupPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
