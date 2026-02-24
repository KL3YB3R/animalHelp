import { Header } from "../../../shared/components/Header";
import { HomeCenterColumn } from "../components/HomeCenterColumn";
import { HomeLeftColumn } from "../components/HomeLeftColumn";
import { HomeRightColumn } from "../components/HomeRightColumn";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main className="grid grid-cols-4 gap-14 justify-center px-24 py-14 bg-gray-100 h-screen">
        <HomeLeftColumn />
        <HomeCenterColumn />
        <HomeRightColumn />     
      </main>
    </>
  );
};
