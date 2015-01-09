/*
     Name: Harrison Aguiar
     Date: 01/08/2015
     Class & Section:  WIA-1501
     Comments: "HTML5 Canvas Drawing"
 */

if(Modernizr.canvas){
	//Canvas supported
	
	
/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message



/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

var theCanvas = document.getElementById("Canvas1");
if (theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
if(ctx){
	ctx.strokeStyle = "black";
	ctx.fillStyle="#00C5CD";
	ctx.lineWidth =5;

//Draw Rectangle here

	ctx.strokeRect(0,0, 50, 100);	
	ctx.fillRect(0,0, 50, 100);

	}
}
/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/
var theCanvas2 = document.getElementById("Canvas2");
if (theCanvas2 && theCanvas2.getContext){
	var ctx2 = theCanvas2.getContext("2d");
if(ctx2){
//style
ctx2.strokeStyle = "black";
	ctx2.fillStyle="rgba(222, 74, 74, 0.5)";
	ctx2.lineWidth =5;


//Draw Circle here
	var degrees = 360;
	var radians = (degrees/180)*Math.PI;
	
	ctx2.beginPath();
	ctx2.arc(50,50, 30, 0, radians);
	ctx2.fill();
	ctx2.stroke();


	}
}


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/
var theCanvas3 = document.getElementById("Canvas3");
if (theCanvas3 && theCanvas3.getContext){
	var ctx3 = theCanvas3.getContext("2d");
if(ctx3){
//style
	ctx3.strokeStyle = "black";
	ctx3.fillStyle="#FFCC00";
	ctx3.lineWidth =5;
	
//Draw Star here
	ctx3.lineJoin = "miter";
	
	ctx3.beginPath();
	ctx3.moveTo(100,100);
	ctx3.lineTo(200,100);
	ctx3.lineTo(225,10);
	ctx3.lineTo(250,100);	
	ctx3.lineTo(350,100);
	ctx3.lineTo(275,150);
	ctx3.lineTo(300,250);
	ctx3.lineTo(225,180);
	ctx3.lineTo(150,250);
	ctx3.lineTo(175,150);
	ctx3.closePath();
	ctx3.fill();
	ctx3.stroke();
	
	}
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
var theCanvas4 = document.getElementById("Canvas4");
if (theCanvas4 && theCanvas4.getContext){
	var ctx4 = theCanvas4.getContext("2d");
if(ctx4){
//style

	ctx4.strokeStyle = "black";
	ctx4.fillStyle="#440000";
	ctx4.lineWidth =3;

//Draw Umbrella top here
	ctx4.beginPath();
	ctx4.arc(400,350,300,0, 1*Math.PI, true);
	ctx4.bezierCurveTo(150,300, 150, 200, 200, 350);
	ctx4.bezierCurveTo(200,350, 250, 200, 300, 350);
	ctx4.bezierCurveTo(300,350, 350, 200, 400, 350);
	ctx4.bezierCurveTo(400,350, 450, 200, 500, 350);
	ctx4.bezierCurveTo(500,350, 550, 200, 600, 350);
	ctx4.bezierCurveTo(600,350, 650, 200, 700, 350);
	ctx4.fill();
	ctx4.stroke();

	}
}
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/
var theCanvas5 = document.getElementById("Canvas5");
if (theCanvas5 && theCanvas5.getContext){
	var ctx5 = theCanvas5.getContext("2d");
if(ctx5){
//style

	ctx5.fillStyle = "red";
	ctx5.font = "30pt SamsSeriff"
	

//Draw text here
	ctx5.fillText("Canvas is fun!", 100, 300);
	
	
	}
}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/
var theCanvas6 = document.getElementById("Canvas6");
if (theCanvas6 && theCanvas6.getContext){
	var ctx6 = theCanvas6.getContext("2d");
if(ctx6){

	//Variable to hold image
	var srcImg = document.getElementById("logo");
	
	//Draw image
	ctx6.drawImage(srcImg, 0,0);
	
	//Shrink the image by 50%
	ctx6.drawImage(srcImg, 5, 5, 1650, 544);
	
	//Slice a section of the logo out and draw that onto the canvas.
	ctx6.drawImage(srcImg, 50, 200, 1750, 2000, 100, 100, 90, 150);
	
//style

//Draw images here

	}
}

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/
var theCanvas7 = document.getElementById("Canvas7");
if (theCanvas7 && theCanvas7.getContext){
	var ctx7 = theCanvas7.getContext("2d");
if(ctx7){
//style
	ctx7.strokeStyle = "black";
	ctx7.fillStyle="#3300CC";
	ctx7.lineWidth =5;


	ctx7.strokeRect(20,20, 500, 300);	
	ctx7.fillRect(20,20, 500, 300);
	
	
	//text
	ctx7.fillStyle = "rgba(0, 0, 255, 0.48)";
	ctx7.font = "30pt SamsSeriff"
	

	ctx7.fillText("Can you see me!?", 400,300);


	ctx7.fillStyle="rgba(255, 179, 0, 0.48)";
	ctx7.beginPath();
	ctx7.moveTo(100,100);
	ctx7.lineTo(125,50);
	ctx7.lineTo(150,100);
	ctx7.lineTo(200,100);
	ctx7.arcTo(225,25,25,200, 60);
	ctx7.closePath();
	ctx7.fill();
	ctx7.stroke();
	
	var degrees = 360;
	var radians = (degrees/180)*Math.PI;
	
	ctx7.beginPath();
	ctx7.arc(150,150, 110, 0, radians);
	ctx7.fill();
	ctx7.stroke();

	
	
	}
}

}else{
	//Canvas is not supported
	}