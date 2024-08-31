import { Row, Col, Button } from "antd";
import ProductCard from "../Product/ProductCard";

const ProductBlock = ({ title, sub_title, data }) => {
  return (
    <div>
      <div style={{ marginTop: 25, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: "bold" }}>{title}</div>
          <div style={{ fontSize: 14, color: "#555" }}>{sub_title}</div>
        </div>
        <div>
          <Button type="primary" style={{ backgroundColor: "green" }}>
            View More
          </Button>
        </div>
      </div>
      <Row gutter={[16, 16]}>
        {data?.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <ProductCard
              //   handleAddToBage={() => handleAddToBage(item)}
              Id={item.id}
              Image={item.image}
              ProductName={item.name}
              Description={"Des " + item.name}
              Price={item.price}
              Discount={item.discount}
              Whislist={item.whislist}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductBlock;
