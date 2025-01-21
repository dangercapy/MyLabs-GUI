async function getServers() {

	let response = await fetch(require(./config.json).apihost, 
	{
		method: "GET",

	});


	let container = document.getElementsByClassName("container")[0];
	console.log(container);
	
	
	let template = document.getElementById("template");
	
	const statusDictionary = (await response.json());
	let statusArray = Object.entries(statusDictionary);
	
	container.innerHTML = '' 
	for(let item of statusArray) {
		let newElement = template.cloneNode(true);
		container.appendChild(newElement);
		newElement.querySelectorAll("span")[0].innerText = item[0];
		newElement.querySelectorAll("i")[0].style.color = item[1] ? "green" : "red";
	}
}

getServers();

setInterval(() => getServers(), 2000);
