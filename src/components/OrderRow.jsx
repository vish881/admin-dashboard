import React from "react";
function OrderRow(props){
    return(
        <>
        <tr>
            <td>{props.id}</td>
             <td>{props.customer}</td>
              <td>{props.status}</td>
               <td>{props.product}</td>
                <td>{props.amount}</td>
        </tr>
        </>
    );
}
export default OrderRow;