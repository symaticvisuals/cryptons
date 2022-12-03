import "./App.css";
import { RouterContainer } from "./routes";
import "./css/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App" style={{ fontFamily: "CabinetGrotesk" }}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
