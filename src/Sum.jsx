import React, { useState } from "react";
import "./Sum.css";

function CreateSum({sums}) {
	return(
    <>
		<div className="sum_container">
			<div className="horizontal-line"></div>
			<div className="input-row">
				<p>SUM</p>
				{sums.map((sum, index) =>(
					<p key={index}>{sum}</p>
				))}
			</div>
		</div>
    </>
	);
}

export default CreateSum;