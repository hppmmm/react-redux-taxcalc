// create ACTION and return ACTION ojbect
const ADDTAX = "ADDTAX";
function appAction(price){
  return {
    type: ADDTAX,
    price
  };
}

export default appAction;
