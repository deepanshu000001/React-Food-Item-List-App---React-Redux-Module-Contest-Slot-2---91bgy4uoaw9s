import React, { useState } from "react";
import "../styles/App.css";

function FoodList() {
	const [foods, setFoods] = useState([]);
	const [itemName, setItemName] = useState("");
	const [foodType, setFoodType] = useState("");
	const [spicinessLevel, setSpicinessLevel] = useState("");
	const [isFirstCardEnabled, setIsFirstCardEnabled] = useState(false);
	const [isSecondCardEnabled, setIsSecondCardEnabled] = useState(false);
	const [isFormEnabled, setIsFormEnabled] = useState(false);

	function handleSave(){

		let id = Math.round(Math.random()*100);

		setFoods(prev=>{
			
			return [...prev,{id,itemName,foodType,spicinessLevel}]
		});

		setIsFirstCardEnabled(false);
		setIsSecondCardEnabled(false);
		setIsFormEnabled(false)
		setItemName("");
		setFoodType("");
		setSpicinessLevel("");
	}

	function handleDelete(id){

		setFoods(prev=>{

			return prev.filter(pre=>pre.id != id);

		})

	}

	return (
		<>
			<div className="container">
				<h1>Food Items List</h1>
				<button onClick={()=>{
					setIsFirstCardEnabled(true);
					setIsSecondCardEnabled(true);
				}}>Add Food</button>

				{isFirstCardEnabled && <div className="card-container">
                        <>
							<h2>Item Name:</h2>
							<input
								name="itemName"
								type="text"
								disabled={!isFirstCardEnabled}
								value={itemName}
								onChange={(e)=>{
									setItemName(e.target.value)
								}}
							/>
							<h2>Food Type:</h2>
							<input
								name="foodType"
								type="text"
								disabled={!isFirstCardEnabled}
								value={foodType}
								onChange={(e)=>{
									setFoodType(e.target.value)
								}}
							/>
							<div className={`card`}>
								<form style={{opacity: isFormEnabled ? 1 : 0.5 }} onClick={()=>{
									setIsFormEnabled(true);
								}}>
									<h2>Spiciness Level:</h2>
									<input
										name="spicinessLevel"
										type="text"
										disabled={!isFormEnabled}
										value={spicinessLevel}
										onChange={(e)=>{
											setSpicinessLevel(e.target.value)
											}}
									/>
								</form>
							</div>
						</>
				</div>}
                <div className={`card ${isSecondCardEnabled ? "" : "disabled"}`}>
						<button onClick={handleSave}>Save</button>
				</div>

				 <ul className="list">
                       {foods?.map(food=>(
						 <li key={food?.id}>
						 {food?.itemName} ({food?.foodType}) - Spiciness Level:{" "}
						 {food?.spicinessLevel}
						 <button onClick={()=>{
							handleDelete(food?.id);
						 }} >Delete</button>
					 </li>
					   ))}
				</ul>
			</div>
		</>
	);
}

export default FoodList;
