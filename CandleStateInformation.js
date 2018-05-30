//
//Copyright 2018 Guillaume H.G (Rumply)
//
//Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
//and associated documentation files (the "Software"), to deal in the Software without restriction, including 
//without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
//of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
//TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
//IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
//WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH 
//THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

//Author: Guillaume H.G (Rumply)
//Version 1.0
//This code work as of 2018-05-29.

//Description
//This script allow the user to display the information about the state of the
//candle more clearly. No more false alarm of candle being extinguish.

//Variables
var backgroundUrl = 'https://pbs.twimg.com/media/DdMnpflVQAA-AGP.jpg'; //I do not own this image, if there is problem I will remove it.
var candleLitColor = '#1d500c';
var candleExtinguishColor = '#5a1616';

//This will prevent not knowing if it's extinguish or simply darker.
$('#candleWrapper, #others .member, .flame,#time').css('opacity', 1);

//This will help with having a bigger timer.
$('#time').css('font-size', '48px');

//Functions

function ascend() {
	$('#main, #others').css('background-color', '#ffffff'); // Change this to color you want
	$('#main').css('background-image', 'url(' + backgroundUrl + ')');
	$('#main, #others').css('background-repeat-x', 'no-repeat');
	$('#main, #others').css('background-position', 'center');
}

function lightCandle() {
	$('#main').css('background-color', candleLitColor); // Change this to color you want
}
function extinguishCandle() {
	$('#main').css('background-color', candleExtinguishColor); // Change this to color you want
	$('#time').text('Reset');
}

//Remove EventListener to reduce conflit
socket.removeEventListener('tock');

//Add our custom EventListener
socket.on('tock', function(message) {
	ascend();
	
	//Original code to not break anything.
	Function('"use strict";return (' + message + ')')();
});
