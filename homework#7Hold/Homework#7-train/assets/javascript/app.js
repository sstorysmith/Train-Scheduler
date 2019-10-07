 
    
     var RPS=[0,1,2,3];      // ordinal values for rock, paper and scissors        
     

// class object to hold all player information
class playerObject {
    constructor(playMove, wins, losses) {
        this.playMove = 0;
        this.wins = wins;
        this.losses = losses;
    }
}


function gameSetup() {
     // number of players:  max will be two, each of class playerObject
    
     console.log("loaded and ready");
     let player1=new playerObject(0,0,0);
     console.log("player 1 object: " + player1);
     let player2=new playerObject (0,0,0);
     let totalGamesPlayed=0;
 
     
}



function scoreRPS() {
          // players tie
    if (player1.move == player2.move) {
        
    console.log("tie"+ " player 1: "  +player1.move + "  player2: " + player2.move );
    }
    else{
        if ((player1.move < player2.move) && (player2.move == 3)) {
            // rock (1) beats scissors (3) beats 
                player1.wins++;
                console.log("player 1: "  +player1.move + "  player2: " + player2.move +"  Winner # 1"); 
        }           
        else {
            if ((player1.move > player2.move) && (player2.move == 3)) {
                // rock (1) beats scissors (3) beats 
                    player2.wins++;
                    console.log("player 1: "  +player1.move + "  player2: " + player2.move +"  Winner # 2"); 
            }           
            else {
                if(player1.move < player2.move) {
                player2.wins++; 
    console.log("player 1: "  +player1.move + "  player2: " + player2.move+"  Winner # 2");
            }
         
            else {
                if(player1.move > player2.move) {
                player1.wins++; 
    console.log("player 1: "  +player1.move + "  player2: " + player2.move + "  Winner # 1");
                }
                }
            }
            
        }
    }
        totalGamesPlayed++;
}


    // player 1 goes first
    function playGame(){
    $("player1").addClass("highlight"); 

    $("button").on("click", function() {
        // if player clicks a button, disable his buttons,?  until play is completed. Player 1 goes first
        // if player1 pressed button (moved) & player 2 has already moved - then score the play
        
        if (($(this).attr("value") === "player1") && (player2.move=0)) { 
            $(player1).Class("disable-highlight");      
            player1.playMove= $(button).value;
            scoreRPS;
            player1.move=0;
             // put focus on player 2
            $("player2").addClass("highlight");            
            
        }
        // switch turn
            
            else{ 
                // player 2
                
                $(player2).Class("disable-highlight");
                player2.playMove= $(button).value;
                scoreRPS;
                player2.move=0;
                // put focus on player 1
                $("player1").addClass("highlight");
                 
                   
            }
    }
    )
}

//     // ----------------------------------------------------------------------------------------
// // foirebase VVVVVVVVVVVV
//     //Store information about your firebase so we can connect
		
// 		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 		//IMPORTANT: REPLACE THESE WITH YOUR VALUES (these ones won't work)
// 		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 		var config = {
// 			apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
// 			authDomain: "XXXXXX.firebaseapp.com",
// 			databaseURL: "https://XXXXXXXXXX.firebaseio.com",
// 			projectId: "XXXXXXXXXXXXXXXXX",
// 			storageBucket: "XXXXXXXXXXXXXXX.appspot.com",
// 			messagingSenderId: "XXXXXXXXXXXXXXX"
// 		};
		
// 		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		
// 		//initialize your firebase
// 		firebase.initializeApp(config);
// 		var database = firebase.database();
		
// 		//create a variable to hold our orders list from firebase
// 		var firebaseOrdersCollection = database.ref().child('orders');
// 		//this function is called when the submit button is clicked
// 		function submitOrder() {
// 			//Grab order data from the form
// 			var order = {
// 				fullName: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
// 				notes: $('#notesField').val(), //another way you could write is $('#myForm [name="fullname"]').
// 			};
			
// 			//'push' (aka add) your order to the existing list
// 			firebaseOrdersCollection.push(order); //'orders' is the name of the 'collection' (aka database table)
			
// 		};
		
// 		//create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
// 		firebaseOrdersCollection.on('value',function(orders){
			
// 			//create an empty string that will hold our new HTML
// 			var allOrdersHtml = "";
			
// 			//this is saying foreach order do the following function...
// 			orders.forEach(function(firebaseOrderReference){
				
// 				//this gets the actual data (JSON) for the order.
// 				var order = firebaseOrderReference.val();
// 				console.log(order); //check your console to see it!
				
// 				//create html for the individual order
// 				//note: this is hard to make look pretty! Be sure to keep your indents nice :-)
// 				//IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
// 				var individialOrderHtml =	`<div class='item'>
// 												<p>Name: `+order.fullName+`</p>
// 												<p>Notes: `+order.notes+`</p>
// 											</div>`;
				
// 				//add the individual order html to the end of the allOrdersHtml list
// 				allOrdersHtml = allOrdersHtml + individialOrderHtml;
// 			});
			
// 			//actaull put the html on the page inside the element with the id PreviousOrders
// 			$('#previousOrders').html(allOrdersHtml);
			
// 			//note: an alternative approach would be to create a hidden html element for one order on the page, duplicate it in the forEach loop, unhide it, and replace the information, and add it back. 
// 		});
// // fiebase code ^^^^^^^
//  temporary setup before user interface is coded
<#buttonPlayer1Rock onclick="alert('Click event triggered')">This is clicked for player1 paragraph.</p>

player1.move=1;
player2.move=3;
playGame();
console.log("next game --------------------------------------------------");
player1.move=1;
player2.move=1
playGame();
console.log("next game --------------------------------------------------");
player1.move=3;
player2.move=2;
playGame();