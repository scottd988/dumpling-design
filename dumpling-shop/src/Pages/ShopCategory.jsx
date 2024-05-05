import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    // Assuming allproducts is supposed to be passed as a prop or defined here
    const { category, banner, allproducts } = props;

    return (
        <div className="shopcategory">
          <img src={banner} className="shopcategory-banner" alt="" />
          <div className="shopcategory-indexSort">
            <p><span>Showing 1 - 12</span> out of 54 Products</p>
            <div className="shopcategory-sort">Sort by  <img src={dropdown_icon} alt="" /></div>
          </div>
          <div className="shopcategory-products">
            {allproducts.map((item) => {
                if(category === item.category) {
                  return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
                }
                return null;
            })}
          </div>
          <div className="shopcategory-loadmore">
            <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
          </div>
        </div>
      );
};

ShopCategory.propTypes = {
  category: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  allproducts: PropTypes.array.isRequired // Define the shape more precisely if needed
};

export default ShopCategory;
