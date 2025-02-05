const items = [
  {
    id:'001',
    product_image: 'https://m.media-amazon.com/images/I/61-MlTeQ1lL._AC_UY1100_.jpg',
    rating: {
      stars:4.9,
      noOfReviews: 400,
    },
    company_name:'Carlton London',
    item_name:`Women's Flared Embrioded Cotton Gown | Long Gown`,
  
    current_price:999,
    original_price:1875,
    discount:76,
  },

  {
    id:'002',
    product_image: 'https://cdn.shopify.com/s/files/1/1746/5485/files/1_7a6c4c07-a4d7-4299-b90a-c4a8825bf8d9_540x.jpg?v=1688991096',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Ethnic Wear For Womens',
  
    current_price:1282,
    original_price:2837,
    discount:87,
  },

  {
    id:'003',
    product_image: 'https://sepiastories.in/wp-content/uploads/2021/02/CORDOOrganicCottonDressYellow02.jpg',
    rating: {
      stars:4.8,
      noOfReviews: 5400,
    },
    company_name:'Sepia Stories',
    item_name:'Cordo Organic Cotton Dress Women',
  
    current_price:6995,
    original_price:9999,
    discount:40,
  },

  {
    id:'004',
    product_image: 'https://www.jiomart.com/images/product/500x630/rv0qy4cinz/fabflee-women-red-printed-chiffon-a-line-dress-red-product-images-rv0qy4cinz-0-202209202130.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Fabflee Women Red printed Chiffron',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'005',
    product_image: 'https://5.imimg.com/data5/BZ/FX/DP/ANDROID-17852573/1560116141951-jpg-500x500.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Women Stylish Polyster dresses',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'006',
    product_image: 'https://assets2.andaazfashion.com/media/catalog/product/cache/1/small_image/275x413/a12781a7f2ccb3d663f7fd01e1bd2e4e/w/o/woven-zari-silk-cream-beige-saree-sarv133529-1.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Bengali Indian Saree for Womens',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'007',
    product_image: 'https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/10/blog15.jpg',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Mens Trendy Fashion | Formal Look',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'008',
    product_image: 'https://xsuit.com/cdn/shop/articles/Xsuit_Style_Main_Image.jpg?v=1631178638',
    rating: {
      stars:4.5,
      noOfReviews: 1400,
    },
    company_name:'Carlton London',
    item_name:'Stylish Mens Fashion Formal Pants and Shirt',
  
    current_price:606,
    original_price:1045,
    discount:42,
  },

  {
    id:'009',
    product_image: 'https://infifashion.com/wp-content/uploads/2021/12/Slim-Tie.jpg',
    rating: {
      stars:4,
      noOfReviews: 3892,
    },
    company_name:'Louis Phillipe',
    item_name:'Mens Formal Suit',
  
    current_price:13499,
    original_price:19999,
    discount:30,
  },
]

// Profile login
function openLoginPage() {
  // Redirect to a login page (create login.html separately)
  window.location.href = "login.html";
}





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




