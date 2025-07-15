import Provider from "./Provider";
import AppHeader from "@/components/global/headerComponents/AppHeader";
import MainSidebar from "@/components/global/SidebarComponents/MainSidebar";

const layout = ({ children }) => {
  return (
    <Provider>
      <MainSidebar></MainSidebar>
      <div className="px-5 w-full">
        <AppHeader></AppHeader>
        {children}
      </div>
    </Provider>
  );
};

export default layout;
