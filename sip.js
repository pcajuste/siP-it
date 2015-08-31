//4 different wine products from 3 countries
var wine_cellar = {
  france: [
    {name: 'chateau rayas',
    price: 800,
    pic:'rayas.png',
    history: 'Rayas remains a traditional Chateauneuf du Pape estate. The wine is aged in a combination of demi muids and foudres of various capacities for an average of 16 months.'
  },
    {name: 'Chateau-Grillet',
    price: 100,
    pic:'grillet.jpg',
    history: 'Chateau-Grillet is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
  },
    {name: 'Alex Boxler',
    price: 60,
    pic:'boxler.png',
    history: 'Alex Boxler is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
  },
    {name: 'Cote Blonde',
    price: 135,
    pic:'blonde.jpg',
    history: 'Cote Blonde is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
  }
  ],
  italy: [
    {
      name: 'Pieropan',
      price: 42,
      pic:'pieropan.png',
      history: 'Pieropan is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
    },
    {
      name: 'Giacomo',
      price: 399,
      pic: 'giacomo.png',
      history: 'Giacomo is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
    },
    {
      name: 'Banfi',
      price: 109,
      pic:'banfi.png',
      history: 'Banfi is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
    },
    {
      name: 'Incisa',
      price: 80,
      pic:'incisa.png',
      history: 'Incisa is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
    }
  ],
  usa: [
    {
      name:'Screaming Eagle',
      price: 2877,
      pic:'eagle.png',
      history: 'Screaming Eagle is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
   },
   {
      name:'Harlan Estate',
      price: 816,
      pic:'estate.png',
      history: 'Harlan Estate is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
   },
   {
     name:'Scarecrow Cabernet',
     price: 581,
     pic:'cabernet.png',
     history: 'Scarecrow Cabernet is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
   },
   {
     name:'Verite la Joie',
     price:385,
     pic:'joie.png',
     history: 'Verite la joie is a wine-growing AOC in the northern Rhône wine region of France, near Vienne, which produces white wine from Viognier grapes.'
   }
 ]
};

$(document).ready(function(){
  //access the class element with an h2 tag
  var wine_bucket = $('.product_catalogue h2');

  //create a div container to hold all the wine lists
  var wine_list_div =$("<div id='wine_category'></div>");
  wine_list_div.css('height','500');
  wine_list_div.css('width', '500');

 // creates an orderered list for each country (french, italy, usa)
  var wine_list_ul_france = $("<ul id='wine_list_fr'></ul>");
  var wine_list_ul_italy = $("<ul id='wine_list_it'></ul>");
  var wine_list_ul_usa = $("<ul id='wine_list_us'></ul>");
  wine_bucket.after(wine_list_div);
  wine_list_div.append(wine_list_ul_france);
  wine_list_div.append(wine_list_ul_italy);
  wine_list_div.append(wine_list_ul_usa);

 var china=
   {
     name: 'One Wine only',
     price: 40000,
     pic:'banfi.png',
     history: 'Your one wine entry has been added. Enter details later.'
   };

 var canada = [
   {
     name: 'Wine 1 of 2',
     price: 4000,
     pic:'wine_cellar.jpg',
     history: 'Your one wine entry has been added. Enter details later.'
   },
   {
     name: 'Wine 2 o f 2',
     price: 700000,
     pic:'wine_cellar_good.jpg',
     history: 'Your one wine entry has been added. Enter details later.'
   }];


  //display the French wine list in the catalogue column
  wine_cellar.france.forEach(function(wine_bottle){
    var wine_list_label = $('<li>'+'<span>'+ wine_bottle.name+'</span>'+'</li>');
    var wine_list_li = $('<li>'+'<button '+ 'style='+'background:'+ 'url'+'(./img/'+wine_bottle.pic+')'+'>'+'</button>'+'</li>');
    var wine_list_price = $('<li>'+'<article>'+ '$'+wine_bottle.price+'</article>'+'</li>');
    // var click_to_order = $('<li></li>')
    var wine_list_leaf = wine_list_ul_france.append(wine_list_label);
    wine_list_leaf.append(wine_list_li);
    wine_list_leaf.append(wine_list_price);
    // wine_list_leaf.append(click_to_order);
    $('#wine_list_fr').css('float', 'left');
    $('#wine_list_fr').css('border', 'solid 4px');
    $('#wine_list_fr').css('padding', '10px');
    $('#wine_list_fr').css('margin-right', '10px');

    //open the link with its respective wine image
    wine_list_li.on('click',function(){
      var loc='./img/';
      window.open(loc+wine_bottle.pic);
    })

    wine_list_label.dblclick(function(){
      //calculate total due
      var tax = 0.08;
      var wine_price = wine_bottle.price;
      var total_tax = tax * wine_bottle.price
      var total_due = total_tax + wine_price
      $('#textcost').text('$'+total_due);

      //display product hisotry detail
      $('#textprod').text(wine_bottle.history);

      //display receipt detail
      var receipt = $('#textreceipt')
      receipt.text(
        'Tax: $'+tax + '\n'+
        "Item Price: $"+wine_price+ '\n'+
        "Total Tax: $"+total_tax + '\n'+
        "Total Due: $"+total_due
      );
    })

    //add extra wine bottle to the page
    $('#add_more_wine').on('click',function(){

      wine_cellar.usa.push(china);
      console.log(wine_cellar);;
      var wine_list_label = $('<li>'+'<span>'+ wine_bottle.name+'</span>'+'</li>');
      var wine_list_li = $('<li>'+'<button '+ 'style='+'background:'+ 'url'+'(./img/'+wine_bottle.pic+')'+'>'+'</button>'+'</li>');
      var wine_list_price = $('<li>'+'<article>'+ '$'+wine_bottle.price+'</article>'+'</li>');
      var wine_list_leaf = wine_list_ul_usa.append(wine_list_label);
      wine_list_leaf.append(wine_list_li);
      wine_list_leaf.append(wine_list_price);
      $('#wine_list_us').css('float', 'left');
      $('#wine_list_us').css('padding', '10px');
      $('#wine_list_us').css('border', 'solid 4px');
      $('#wine_list_us').css('margin-right', '4px');
    })

  });

  //display the Italy wine list in the catalogue column
  wine_cellar.italy.forEach(function(wine_bottle){
    var wine_list_label = $('<li>'+'<span>'+ wine_bottle.name+'</span>'+'</li>');
    var wine_list_li = $('<li>'+'<button '+ 'style='+'background:'+ 'url'+'(./img/'+wine_bottle.pic+')'+'>'+'</button>'+'</li>');
    var wine_list_price = $('<li>'+'<article>'+ '$'+wine_bottle.price+'</article>'+'</li>');
    var wine_list_leaf = wine_list_ul_italy.append(wine_list_label);
    wine_list_leaf.append(wine_list_li);
    wine_list_leaf.append(wine_list_price);
    $('#wine_list_it').css('float', 'left');
    $('#wine_list_it').css('padding', '10px');
    $('#wine_list_it').css('border', 'solid 4px');
    $('#wine_list_it').css('margin-right', '10px');

    //open the link with its respective wine image
    wine_list_li.on('click',function(){
      var loc='./img/'
      window.open(loc+wine_bottle.pic);
    })

    wine_list_label.dblclick(function(){
      //calculate total due
      var tax = 0.08;
      var wine_price = wine_bottle.price;
      var total_tax = tax * wine_bottle.price
      var total_due = total_tax + wine_price
      $('#textcost').text('$'+total_due);

      //display product hisotry detail
      $('#textprod').text(wine_bottle.history);

      //display receipt detail
      var receipt = $('#textreceipt')
      receipt.text(
        'Tax: $'+tax + '\n'+
        "Item Price: $"+wine_price+ '\n'+
        "Total Tax: $"+total_tax + '\n'+
        "Total Due: $"+total_due
      );
    })

  });

//display the USA wine list in the catalogue column
  wine_cellar.usa.forEach(function(wine_bottle){
    var wine_list_label = $('<li>'+'<span>'+ wine_bottle.name+'</span>'+'</li>');
    var wine_list_li = $('<li>'+'<button '+ 'style='+'background:'+ 'url'+'(./img/'+wine_bottle.pic+')'+'>'+'</button>'+'</li>');
    var wine_list_price = $('<li>'+'<article>'+ '$'+wine_bottle.price+'</article>'+'</li>');
    var wine_list_leaf = wine_list_ul_usa.append(wine_list_label);
    wine_list_leaf.append(wine_list_li);
    wine_list_leaf.append(wine_list_price);
    $('#wine_list_us').css('float', 'left');
    $('#wine_list_us').css('padding', '10px');
    $('#wine_list_us').css('border', 'solid 4px');
    $('#wine_list_us').css('margin-right', '4px');

    //open the link with its respective wine image
    wine_list_li.on('click',function(){
      var loc='./img/'
      window.open(loc+wine_bottle.pic);
    });

    wine_list_label.dblclick(function(){
      //calculate total due
      var tax = 0.08;
      var wine_price = wine_bottle.price;
      var total_tax = tax * wine_bottle.price
      var total_due = total_tax + wine_price
      $('#textcost').text('$'+total_due);

      //display product hisotry detail
      $('#textprod').text(wine_bottle.history);

      //display receipt detail
      var receipt = $('#textreceipt')
      receipt.text(
        'Tax: $'+tax + '\n'+
        "Item Price: $"+wine_price+ '\n'+
        "Total Tax: $"+total_tax + '\n'+
        "Total Due: $"+total_due
      );
    });
  })

// add styling to titles, buttons, and prices elments on the page
      $('span').css('color','lightblue');
      $('span').css('font-size', '13pt')
      $('article').css('color','darkred');
      $('article').css('font-family', 'verdana')
      $('article').css('font-size', '11pt')
      $('button').css('width','120px');
      $('button').css('height','60px');

      //------------------------EVENTS-----------------------------------
      // add buttons to hide and show elements on the page
      var french_wine_button = $('<button id="french" name="click to view only USA wine">French</button>').appendTo('#wine_category');
      var italy_wine_button = $('<button id="italy name="click to view only USA wine"">Italy</button>').appendTo('#wine_category');
      var usa_wine_button = $('<button id="usa" name="click to view only USA wine">USA</button>').appendTo('#wine_category');
      var all_button = $('<button id="all" name="click to view only USA wine">All</button>').appendTo('#wine_category');

    // adds space between above 3 buttons
      $('#wine_category > button').css('margin','6px')

        french_wine_button.on('click', function(){
            $('#wine_list_it').toggle()
            $('#wine_list_us').toggle();
        })
        italy_wine_button.on('click', function(){
          $('#wine_list_fr').toggle();
          $('#wine_list_us').toggle();
        })
        usa_wine_button.on('click', function(){
          $('#wine_list_fr').toggle();
          $('#wine_list_it').toggle();
        })
        all_button.on('click', function(){
          $('#wine_list_fr').show();
          $('#wine_list_it').show();
          $('#wine_list_us').show();
        })

//change the menu button colors on hover from yellow to orange.
        $('.menu button').hover(function(){
          $(this).css('background-color', 'tomato');
        }, function(){
          $(this).css('background-color', 'yellow');
        })

})
