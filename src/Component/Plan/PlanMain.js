import React from 'react';
import Plan from './Plan';
import PlanRC from './PlanRC';

function PlanMain() {
  return (
    <div>
      <div className=' flex bg-gray-100 gap- justify-center'>
        <Plan/>
        <PlanRC/>
      </div>
      
    </div>
  );
}

export default PlanMain;
