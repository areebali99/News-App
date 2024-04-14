import React from "react";
import CategoryDiv from "./CategoryDiv";

function FinalDiv({

  headlines,

}) {
 


  return (
    <>
      <CategoryDiv
        data={headlines}
        heading="Business Headlines"
        limit={7}
        margin={false}
      />
</>
  );
}

export default FinalDiv;
