import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Outlet />
      <footer></footer>
    </>
  );
};

export default Main;