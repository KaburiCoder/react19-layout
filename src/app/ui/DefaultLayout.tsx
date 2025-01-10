import { useDvh } from "@/shared/hooks/use-dvh";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  useDvh();

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
