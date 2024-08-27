import AppBar from "./components/appbar/AppBar";
import BottomNavigation from "./components/navigation/BottomNavigation";
import TrendingReposList from "./features/trending-repos/TrendingReposList";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <AppBar />

      <main className="flex-1">
        <TrendingReposList />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default App;
