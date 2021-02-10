import React from 'react';

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import HeroSection from '../../../HeroSection';

function Products() {
  return (
    <>
    
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
