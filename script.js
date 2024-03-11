var products = [
	{
		name: 'White Chair',
		headline: 'Tufted white leather sofa chair',
		price: '15,000',
		image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D',
	},
	{
		name: 'Padded Chair',
		headline: 'Brown wooden framed gray padded chair',
		price: '20,000',
		image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D',
	},
	{
		name: 'Floral Armchair',
		headline: 'White and brown floral arm chair',
		price: '18,000',
		image: 'https://images.unsplash.com/photo-1601392740426-907c7b028119?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww',
	},
	{
		name: 'Wooden Chair',
		headline: 'Brown wooden chair',
		price: '.14,000',
		image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww',
	},
];

var popular = [
	{
		name: 'Grey Chair',
		headline: 'Grey padded chair',
		price: '15,000',
		image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJzfGVufDB8fDB8fHww',
	},
	{
		name: 'Bar Stool',
		headline: 'Wooden bar stool',
		price: '20,000',
		image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		name: 'Metal Armchair',
		headline: 'Red, white and black metal armchair',
		price: '18,000',
		image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJzfGVufDB8fDB8fHww',
	},
	{
		name: 'Grey Chair',
		headline: 'Grey padded armchair',
		price: '14,000',
		image: 'https://images.unsplash.com/photo-1509764866569-93cd1fc07dc4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxjaGFpcnN8ZW58MHx8MHx8fDA%3D',
	},
];

var cart = [];

function addProduct() {
	var clutter = '';
	products.forEach(function (product, index) {
		clutter += `
						<div class="product w-fit rounded-xl p-2 bg-white">
                		    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                		        <img  class="object-cover w-full h-full" src="${product.image}" alt="${product.name}" />
                		    </div>
                		    <div class="data w-full px-2 py-5">
                		        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                		        <div class="flex justify-between w-full items-center mt-2">
                		            <div class="w-1/2">
                		                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                		                <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                		            </div>
                		            <button data-index= "${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400">
                		                <i data-index= "${index}"  class="add ri-add-line"></i>
                		            </button>
                		        </div>
                		    </div>
                		</div>
					`;
		document.querySelector('.products').innerHTML = clutter;
	});
}

function addPopularProduct() {
	var clutter = '';
	popular.forEach(function (product) {
		clutter += `
						<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    	    <div
                    	        class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                    	        <img
                    	            class="w-full h-full object-cover"
                    	            src="${product.image}"
                    	            alt="" />
                    	    </div>
                    	    <div class="data py-2 w-full">
                    	        <h1 class="leading-none font-semibold">${product.name}</h1>
                    	        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                    	        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
                    	    </div>
                    	</div>
					`;
	});
	document.querySelector('.populars').innerHTML = clutter;
}

function addToCart() {
	document.querySelector('.products').addEventListener('click', function (details) {
		if (details.target.classList.contains('add')) {
			cart.push(products[details.target.dataset.index]);
		}
	});
}

function showCart() {
	document.querySelector('.carticon').addEventListener('click', function () {
		document.querySelector('.cartexpnd').style.display = 'block';

		var clutter = '';
		cart.forEach(function (item, index) {
			clutter += `
							<div class="flex gap-2 bh-white p-2 rounded-lg">
                 			    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden"> 
									<img class= "w-full h-full object-cover" src="${item.image}" />
								</div>
								<div>
									<h3 class="font-semibold"> ${item.name} </h3>
									<h5 class="text-sm font-semibold opacity-80">&#8377;  ${item.price} </h5>
								</div>
							</div>
						`;
		});
		document.querySelector('.cartexpnd').innerHTML = clutter;
	});
}

addProduct();
addPopularProduct();
addToCart();
showCart();
