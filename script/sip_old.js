//4 different wine products from 3 countries
var wine_cellar = {
  france: [
    {name: 'chateau rayas', price: 800 },
    {name: 'Chateau-Grillet', price: 100},
    {name: 'Alex Boxler', price: 60},
    {name: 'cote blonde', price: 135}
  ],
  italy: [
      {name: 'pieropan', price: 42},
      {name: 'Giacomo', price: 399},
      {name: 'Banfi', price: 109},
      {name: 'incisa', price: 80}
  ],
  usa: [
      {name:'Screaming Eagle', price: 2877},
      {name:'Harlan Estate', price: 816},
      {name:'Scarecrow Cabernet', price: 581},
      {name:'verite la joie', price:385}
  ]
};

var wine_history = [
  {history : 'Made in France, 1700'},
  {history : 'Made in Italy, 1801'},
  {history : 'Made in USA, 1905'}
]

// var create_wine_list = function(wine_inventory){
//   wine_inventory.forEach(function(country){
//     counry.forEach(function(wine_bottle){
//       var french_wine_list = $("<li>");
//       //creates french wine list
//       //add france bottle to
//       var french_wine_name = french_wine_list.text(wine_bottle.name);
//       // var french_wine_price = french_wine_list.text(bottle.price);
//       //get the product list
//       var products = $('#product_list')
//       //adds bottles to page
//       products.append(french_wine_name);
//     });
//   });
// };

// create_wine_list(wine_cellar);

wine_cellar.france.forEach(function(bottle){
  var french_wine_list = $("<li>");
  var wine_button = $("<input>", {
    'type': 'image',
    'id': 'bottle1',
    'src': './img/red_wine.jpeg'
  }).appendTo(french_wine_list);
  french_wine_list.attr(wine_button);
  wine_button.appendTo(french_wine_list)
  //creates french wine list
  //add france bottle to
  var french_wine_name = french_wine_list.text(bottle.name);
  // var french_wine_price = french_wine_list.text(bottle.price);
  //get the product list
  var products = $('#product_list')
  //adds bottles to page
  (products.append(french_wine_name));

});
