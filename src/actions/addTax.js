//priceを受け取ってActionとして返却する
const ADDTAX = "ADDTAX";
function addTax(price){
  return {
    type: ADDTAX,
    price
  };
}

export default addTax;
