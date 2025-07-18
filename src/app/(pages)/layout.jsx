import Provider from "./Provider";
import AppHeader from "@/components/global/AppComponent/headerComponents/AppHeader";
import MainSidebar from "@/components/global/AppComponent/SidebarComponents/MainSidebar";

const layout = ({ children }) => {
  return (
    <div className="bg-neutral-950">
      <Provider>
      <MainSidebar></MainSidebar>
      <div className="px-5 w-full">
        <AppHeader></AppHeader>
        {children}
      </div>
    </Provider>
    </div>
    
  );
};

export default layout;
