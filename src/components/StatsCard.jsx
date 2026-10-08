import React from "react";
 function StatsCard(props){
    return(
        <>
        <div id="statscard">
 <h3>{props.title}</h3>
<h2>{props.value}</h2>
        </div>
        </>
    )
 }
 export default StatsCard;