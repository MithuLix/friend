  import React, { useContext } from 'react';
import { CategoryContext } from '../../Home';

  const CategorieDetail = () => {
      const category = useContext(CategoryContext);
      return (
          <div>
              <h4>this is categorie Details has</h4>
              <h4>Selected Category {category}</h4>
          </div>
      );
  };

  export default CategorieDetail;