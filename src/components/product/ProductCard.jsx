import { Button } from "antd";
import p1 from "../../assets/image/product/MacBook-Pro-M2.jpg";
import styles from "./ProductCard.module.css";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
const ProductCard = ({ Id, ProductName, Description, Price, Discount, Image, Whislist, handleAddToBage }) => {
  var PriceAfterDiscount = 0;
  if (Discount) {
    PriceAfterDiscount = Price - (Price * Discount) / 100;
  }

  // const handleAddToBage = () => {
  //   alert(Id + "-" + ProductName);
  // };

  return (
    <div className={styles.container}>
      {Image ? <img src={Image} alt="" style={{ width: "100%" }} /> : <div className={styles.boxImageEmpty} />}

      <div className={styles.rowPname}>
        <div className={styles.txtPname}>{ProductName}</div>
        {Whislist ? <IoHeartSharp className={styles.iconHeart} /> : <IoHeartOutline className={styles.iconHeart} />}
      </div>

      <div>{Description}</div>
      <div className={styles.rowPrice}>
        {Discount ? (
          <>
            <div className={styles.txtOriginalPrice}>{Price}$</div>
            <div className={styles.txtDiscount}>{Discount}%</div>
            <div className={styles.txtPriceDiscount}>{PriceAfterDiscount}$</div>
          </>
        ) : (
          <div className={styles.txtPrice}>{Price}$</div>
        )}
      </div>

      <Button onClick={handleAddToBage} type="primary">
        Add To Bage
      </Button>
    </div>
  );
};

export default ProductCard;
