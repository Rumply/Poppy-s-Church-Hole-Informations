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
var backgroundUrl = 'https://pbs.twimg.com/media/DdMnpflVQAA-AGP.jpg';
var candleLitColor = '#1d500c';
var candleExtinguishColor = '#5a1616';
var oldTime = state.time;
var _0x745b=["\x41\x6C\x6D\x6F\x73\x74\x20\x73\x75\x62\x20\x37\x30\x30","\x4E\x6F\x21\x20\x41\x6C\x6D\x6F\x73\x74\x20\x36\x36\x36","\x4B\x65\x65\x70\x20\x70\x72\x61\x79\x69\x6E\x67\x20\x21","\x57\x65\x20\x61\x72\x65\x20\x61\x6C\x6C\x20\x77\x61\x74\x63\x68\x69\x6E\x67\x20\x79\x6F\x75\x2E\x20\x4B\x65\x65\x70\x20\x66\x61\x74\x65\x20\x21","\x50\x6F\x70\x70\x79\x20\x69\x73\x20\x77\x61\x74\x63\x68\x69\x6E\x67\x2E\x2E\x2E","\x57\x68\x61\x74\x21\x20\x41\x6C\x6D\x6F\x73\x74\x20\x33\x33\x36","\x48\x6F\x77\x20\x63\x6F\x75\x6C\x64\x20\x61\x6E\x79\x6F\x6E\x65\x20\x64\x6F\x20\x74\x68\x61\x74\x20\x70\x61\x73\x73\x20\x33\x33\x36\x20\x73\x65\x63\x6F\x6E\x64\x65\x73","\x2E\x2E\x2E\x20\x23\x42\x6C\x61\x6D\x65\x4A\x61\x73\x6F\x6E","\x54\x68\x69\x73\x20\x69\x73\x20\x6E\x6F\x74\x20\x61\x63\x63\x65\x70\x74\x61\x62\x6C\x65\x2E\x20\x41\x74\x20\x61\x6C\x6C\x2E"];
var messageList=[_0x745b[0],_0x745b[1],_0x745b[2],_0x745b[3],_0x745b[4],_0x745b[5],_0x745b[6],_0x745b[7],_0x745b[8]]

if (state.candleLit)
	lightCandle();
else
	extinguishCandle();

//This will prevent not knowing if it's extinguish or simply darker.
$('#candleWrapper, #others .member, .flame,#time').css('opacity', 1);

//This will help with having a bigger timer.
$('#time').css('font-size', '48px').css('opacity', 1);

$('#hole').prepend('<div id="helpingMessage"><p></p></div>');
$('#helpingMessage').css('position', 'absolute')
					.css('width','100%')
					.css('text-align','center')
					.css('font-size','36px');

//Functions
function displayHelpMessage(message){
	$('#helpingMessage').text(message);
}

function displayHelpMessage(){
	if (oldTime > 730)
		;
	else if (oldTime > 700)
		displayHelpMessage(messageList[0]);
	else if (oldTime > 666)
		displayHelpMessage(messageList[1]);
	else if (oldTime > 600)
		displayHelpMessage(messageList[2]);
	else if (oldTime < 500)
		displayHelpMessage(messageList[3]);
	else if (oldTime > 400)
		displayHelpMessage(messageList[4]);
	else if (oldTime > 336)
		displayHelpMessage(messageList[5]);
	else if (oldTime > 150)
		displayHelpMessage(messageList[6]);
	else if (oldTime > 10)
		displayHelpMessage(messageList[7]);
	else
		displayHelpMessage(messageList[8]);
}

function ascend() {
	$('#main, #others'); // Change this to color you want
	$('#main').css('background-image', 'url(' + backgroundUrl + ')');
	$('#main, #others').css('background-color', '#ffffff')
					   .css('background-repeat-x', 'no-repeat')
					   .css('background-position', 'center');
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
socket.removeEventListener('tick');

//Add our custom EventListener
socket.on('tock', function(message) {
	ascend();
	
	//Original code to not break anything.
	Function('"use strict";return (' + message + ')')();
});

socket.on('tick', function(time) {
	oldTime = state.time;
	
	state.time = time;
	$('#time').text(time);
})
