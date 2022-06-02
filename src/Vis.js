import data from "./suppliers-data.json";
import {CanvasJSChart} from 'canvasjs-react-charts'
function Vis(){
	
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			height: 400,
      		width: 787,
			position: "right",
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Number of Supplier VS Country",
			},
			axisY: {
				title: "Number of Supplier",
			},
			axisX: {
				title: "Country",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: "{x}: {y}",
				dataPoints: [
					{ x: 1, y: 5, label: "USA" },
					{ x: 2, y: 3, label: "UK" },
					{ x: 3, y: 2, label: "Japan" },
					{ x: 4, y: 1, label: "Spain" },
					{ x: 5, y: 2, label: "Australia" },
					{ x: 6, y: 2, label: "Sweden" },
					{ x: 7, y: 1, label: "Brazil" },
					{ x: 8, y: 3, label: "Germany" },
					{ x: 9, y: 2, label: "Italy" },
					{ x: 10, y: 1, label: "Norway" },
					{ x: 11, y: 3, label: "France" },
					{ x: 12, y: 1, label: "Singapore" },
					{ x: 13, y: 1, label: "Netherlands" },
					{ x: 14, y: 1, label: "Denmark" },
					{ x: 15, y: 1, label: "Finland" },
					{ x: 16, y: 2, label: "Canada" },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}/>
		</div>
		);
	}

    export default Vis;