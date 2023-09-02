import { NavbarDefault } from "./components/Navbar";
import { MultiLevelSidebar } from "./components/Sidebar";
import { EcommerceCard } from "./components/Card";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <NavbarDefault />
      <div className="flex">
        <div className="">
          <MultiLevelSidebar />
        </div>
        <div className="flex flex-wrap flex-grow">
          <EcommerceCard />
         
        </div>
      </div>
      </QueryClientProvider>
    </>
  );
}
