import { Sidebar } from "@/components/Sidebar";
import "./App.css";
import { Feed } from "@/features/Feed";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
