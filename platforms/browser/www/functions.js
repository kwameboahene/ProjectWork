function addtocart() {
   $.post(
        'http://cs.ashesi.edu.gh/~kwame.boahene/addtocart.php',

        {
                  productname : $('#name0').html(),
                 brand: $('#brand0').html(),
                 year: $('#year0').html(),
                 model: $('#model0').html(),
                 price: $('#price0').html(),
                 email: $('#mail').val()
               },
            "json"     
    ).done(function( data ) {
              console.log(data);
              if(data == "success") {
                alert("Added to Cart");
              self.location.href = "#";
            }

            else {
              alert("Try Adding Again");
            }

            } );

 }

 function addtocart1() {
   $.post(
        'http://cs.ashesi.edu.gh/~kwame.boahene/addtocart.php',

        {
                  productname : $('#name1').html(),
                 brand: $('#brand1').html(),
                 year: $('#year1').html(),
                 model: $('#model1').html(),
                 price: $('#price1').html(),
                 email: $('#mail').val()
               },
            "json"     
    ).done(function( data ) {
              console.log(data);
              if(data == "success") {
                alert("Added to Cart");
              self.location.href = "#";

            }

            else {
              alert("Try Adding Again");
            }

            } );

 }






 function addtocart2() {
   $.post(
        'http://cs.ashesi.edu.gh/~kwame.boahene/addtocart.php',

        {
                  productname : $('#name2').html(),
                 brand: $('#brand2').html(),
                 year: $('#year2').html(),
                 model: $('#model2').html(),
                 price: $('#price2').html(),
                 email: $('#mail').val()
               },
            "json"     
    ).done(function( data ) {
              console.log(data);
              if(data == "success") {
               alert("Added to Cart");
              self.location.href = "#";

            }

            else {
              alert("Try Adding Again");
            }

            } );

 }








 function addtocart3() {
   $.post(
        'http://cs.ashesi.edu.gh/~kwame.boahene/addtocart.php',

        {
                  productname : $('#name3').html(),
                 brand: $('#brand3').html(),
                 year: $('#year3').html(),
                 model: $('#model3').html(),
                 price: $('#price3').html(),
                 email: $('#mail').val()
               },
            "json"     
    ).done(function( data ) {
              console.log(data);
              if(data == "success") {
               alert("Added to Cart");
              self.location.href = "#";

            }

            else {
              alert("Try Adding Again");
            }

            } );

 }




 function addtocart4() {
   $.post(
        'http://cs.ashesi.edu.gh/~kwame.boahene/addtocart.php',

        {
                  productname : $('#name4').html(),
                 brand: $('#brand4').html(),
                 year: $('#year4').html(),
                 model: $('#model4').html(),
                 price: $('#price4').html(),
                 email: $('#mail').val()
               },
            "json"     
    ).done(function( data ) {
              console.log(data);
              if(data == "success") {
               alert("Added to Cart");
              self.location.href = "#";

            }

            else {
              alert("Try Adding Again");
            }

            } );

 }














 
