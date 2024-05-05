import { createContext } from 'react';
import PropTypes from 'prop-types';
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const contextValue = { all_product };
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

// Defining prop types
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ShopContextProvider;
