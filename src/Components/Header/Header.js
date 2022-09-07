import React, { useContext } from 'react';


const Header = (props) => {
    const [category, setCount] = useContext(0);
    return (
        <div>
            <h2>This is Header : {category}</h2>
            <button onClick={() => setCount('laptop')}>laptop</button>
            <button onClick={() => setCount('MobilePhone')}>MobilePhone</button>
            <button onClick={() => setCount('Camera')}>Camera</button>
        </div>
    );
};

export default Header;