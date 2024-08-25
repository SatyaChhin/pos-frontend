import { useEffect } from "react";
import ProductBlock from "../../component/page/ProductBlock";
import { product_dell, product_macbook } from "../../share/data";
import { request } from "../../util/request";

const ProductPage = () => {
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("category", "get");
    alert(res.list[0].name);
  };
  return (
    <div className="main_page">
      <ProductBlock
        title={"Macbook"}
        sub_title={"Macbook des...."}
        data={product_macbook}
      />
      <ProductBlock
        title={"Dell"}
        sub_title={"Dell des...."}
        data={product_dell}
      />
    </div>
  );
};
export default ProductPage;
