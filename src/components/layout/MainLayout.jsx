import { Outlet, Link } from "react-router-dom";
import image1 from "../../assets/image/nit.jpeg";
// require("../../assets/image/nit.jpeg")
const MainLayout = () => {
  // const navigate = useNavigate();

  return (
    <div>
      <div style={{ backgroundColor: "#EEE", padding: 10, display: "flex", paddingRight: "10%", paddingLeft: "10%" }}>
        <div style={{ display: "flex", marginRight: 20 }}>
          <img src={image1} width={40} height={40} alt="" style={{ marginRight: 10 }} />
          <div>
            <div className="txtBrandName">NIT Cambodia</div>
            <div style={{ fontSize: 11 }}>Buil IT Skill</div>
          </div>
        </div>
        <div>
          <Link to="/">Home </Link>
          <Link to="/product">Product </Link>
          <Link to={"/profile"}>Profile </Link>
          <Link to="/about">About </Link>
        </div>
      </div>

      <div style={{ minHeight: 300 }}>
        <Outlet />
      </div>

      {/* <div style={{ backgroundColor: "gray" }}>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
      </div> */}
    </div>
  );
};

export default MainLayout;
