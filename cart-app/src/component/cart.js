import React from 'react'
import ReactDOM from 'react-dom';

function Cart(){
  
      //Array Of Product Quantity Price
      const products= ["Coffee","Tea","Milk","GreenTea","LemonTea","ChocoMilk"];
      const qty=[0,0,0,0,0,0];
      const prices =[100,50,100,200,100,150];
      
      //UseState 
      const [cntqty, setQty] = React.useState(qty);
      //const [] = React.useState(0);
      
      //add quantity 
      var addqty = index => {
        setQty(cntqty.map((q, i) => i === index ? q + 1 : q));
      };
      
      //remove quantity
      var remove = index => {
        setQty(cntqty.map((q, i) => i === index && q > 0 ? q - 1 : q));
      };
      
      //total quantity
       var totalqty = () => {
        var total = 0;
        cntqty.forEach(q => {
          total = total + q;
        });
        return total;
      };
    
      //total price
      var totalprice = () => {
        var total = 0;
        cntqty.forEach((q, index) => {
          total =total + q * prices[index];
        });
        return total;
      };
      
      //Design and function calling
       return(
        React.createElement("div", null,
        products.map((name, index) => 
        React.createElement("div", { key: index },
        React.createElement("h2", null, name, "  "," Quantity : ", cntqty[index] ," Price : ", prices[index]), 
        React.createElement("button", { onClick: () => addqty(index) }, "Add To Cart" ,"   "),
        React.createElement("button", { onClick: () => remove(index) }, "Remove From Cart"))),
        React.createElement("h1", null, "Total Items : ", totalqty()),
        React.createElement("h1", null, "Total Price : ", totalprice()))
        );
    };

ReactDOM.render(
    <React.StrictMode>
        <Cart />,
    </React.StrictMode>,
    document.getElementById('root')
);
export default Cart;
    