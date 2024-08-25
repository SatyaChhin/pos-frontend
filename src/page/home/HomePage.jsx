// import "./HomePage.css";
import styles from "./MyStyle.module.css";
import ProductBlock from "../../component/page/ProductBlock";
import {
  product_discount,
  product_top_sale,
  product_hot,
} from "../../share/data";
import HomeSlideBanner from "../../component/product/HomeSlideBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { request } from "../../util/request";
const HomePage = () => {
  // react state
  const [list, setList] = useState([]);
  const [role, setRole] = useState([]);

  useEffect(() => {
    getList(); // form load call
  }, []);

  const getList = async () => {
    const res = await request("category", "get");
    if (res) {
      setList(res.list);
    }
  };

  return (
    <div className={"main_page"}>
      <Space style={{ marginBottom: 10 }}>
        <Button type="primary">Category:</Button>
        {list.map((item, index) => (
          <Button onClick={() => alert(item.id)} key={index}>
            {item.name}
          </Button>
        ))}
      </Space>

      <Space style={{ marginBottom: 10 }}>
        <Button type="primary">Role:</Button>
        {role.map((item, index) => (
          <Button onClick={() => alert(item.id)} key={index}>
            {item.name}
          </Button>
        ))}
      </Space>

      <HomeSlideBanner />
      <ProductBlock
        title={"Discount Product"}
        sub_title={"Des Discount Product..."}
        data={product_discount}
      />
      <ProductBlock
        title={"Top Sales"}
        sub_title={"Des Top Sales..."}
        data={product_top_sale}
      />
      <ProductBlock
        title={"Hot Products"}
        sub_title={"Des Hot Products..."}
        data={product_hot}
      />
    </div>
  );
};

export default HomePage;
