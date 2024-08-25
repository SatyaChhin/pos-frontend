import { Outlet } from "react-router-dom";
import image1 from "../../assets/image/nit.jpeg";
// require("../../assets/image/nit.jpeg")
const MainLayoutLogin = () => {
  return (
    <div>
      <div style={{ backgroundColor: "pink", padding: 10 }}>
        <div style={{ display: "flex" }}>
          <img src={image1} width={40} height={40} alt="" style={{ marginRight: 10 }} />
          <div>
            <div style={{ fontWeight: "bold" }}>NIT Cambodia</div>
            <div style={{ fontSize: 11 }}>Buil IT Skill</div>
          </div>
        </div>
      </div>

      <div style={{ minHeight: 300 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayoutLogin;
