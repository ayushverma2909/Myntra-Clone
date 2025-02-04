const items = [
  {
    id:'001',
    product_image: '../images/1.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'002',
    product_image: '../images/2.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'001',
    product_image: '../images/3.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'001',
    product_image: '../images/4.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'001',
    product_image: '../images/5.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'001',
    product_image: '../images/6.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'001',
    product_image: '../images/7.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'001',
    product_image: '../images/8.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'001',
    product_image: '../images/9.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },
]







let bagItems ;
onLoad();

function onLoad(){
  let bagItemsstr = localStorage.getItem('bagItems');
  bagItems = bagItemsstr ? JSON.parse(bagItemsstr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}





function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
  bagItemCountElement.innerText = bagItems.length;
  bagItemCountElement.style.visibility = 'visible';
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}


function displayItemsOnHomePage(){
  let itemscontainerElement = document.querySelector('.items-container');

let innerHTML ='';
items.forEach(item => {

  innerHTML+= `
  <div class="item-container">
  
  <img class="image-container" src="${item.product_image}" alt="" >
  
  <div class="rating">${item.rating.stars} 🌟|${item.rating.noOfReviews}</div>
  
  <div class="company-name">${item.company_name}</div>
  
  <div class="item-name">${item.item_name}</div>
  
  <div class="price">
    <span class="curent-price">Rs. ${item.current_price}</span>
    <span class="original-price">Rs. ${item.original_price}</span>
    <span class="discount">(${item.discount}% OFF)</span>
  </div>
  
  <button class="add-to-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  
  </div>`
})

itemscontainerElement.innerHTML = innerHTML ;

}




