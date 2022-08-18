import Navagation from "./components/Navagation";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <section>
        <Navagation />
      </section>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
