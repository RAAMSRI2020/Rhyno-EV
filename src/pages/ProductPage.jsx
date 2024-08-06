import React from 'react';
import SE03Lite from './SEO3Lite'; 
import SE03 from './SEO3'; 
import SE03Max from './SEO3Max'; 

// Ensure these files exist

const ProductPage = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <SE03Lite />
      <SE03 />
      <SE03Max />
    </div>
  );
};

export default ProductPage;
