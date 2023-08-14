import { NavbarDefault } from "./components/Navbar";
import { MultiLevelSidebar } from "./components/Sidebar";
import { EcommerceCard } from "./components/Card";

export default function App() {
  return (
    <>
      <NavbarDefault />
      <div className="flex">
        <div className="">
          <MultiLevelSidebar />
        </div>
        <div className="flex flex-wrap flex-grow">
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
        </div>
      </div>
    </>
  );
}
