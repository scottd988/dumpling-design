import './Item.css'
import PropTypes from 'prop-types';

const Item = ({ image, name, new_price, old_price }) => {
    return (
        <div className="item">
            <img src={image} alt={name} />
            <p>{name}</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    ${new_price}
                </div>
                <div className="item-price-old">
                    ${old_price}
                </div>
            </div>

        </div>
        
    );
}

Item.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    new_price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    old_price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Item;