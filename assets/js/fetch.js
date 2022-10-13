const dataArr = [];

fetch("https://dummyjson.com/products")
	.then((response) => {
		return response.json();
	})

	.then((data) => {
		dataArr.push(...data.products);
		// console.log(data.products);
	})

	.catch((error) => {
		console.error(error);
	})

	.finally(() => {
		dataArr.map((data) => renderContent(data));
		console.log(dataArr);
	});

// behandling af data
const renderContent = (data) => {
	console.log(data);

	document.getElementById("products").innerHTML += `
    <div class="productCard">
    
    <h2>${data.title} </h2>
    <figure> <img src="${data.thumbnail}" /> </figure>
    <div>${data.description} </div>
    <div>${data.price} </div>
    <div>${data.brand} </div>
    <div>${data.rating} </div>

    </div>
    
    
    `;
};
