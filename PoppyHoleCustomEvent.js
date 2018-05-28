// Copyright (c) 2018 
// Author: Guillaume H.G (https://github.com/Rumply)
// Free of use

// Variables
var displayLightInfo = true;
var displayExtinguishInfo = true;
var oldTime = state.time;
var nameDictionnary = {};

// Functions
function DisplayInfo(info, action) {
	console.info('----------------------');
	console.info(`Action : ${action}`);
	if (nameDictionnary[info])
		console.info(`Name : ` + nameDictionnary[info]);
	console.info(`ID : ${info}`);
	console.info('Avatar :');
	console.info(`  - https://s3-us-west-2.amazonaws.com/poppychurch/users/avatars/${info}.png`);
	console.info('Signature :');
	console.info(`  - https://s3-us-west-2.amazonaws.com/poppychurch/users/signatures/${info}.png`);
	console.info('Timer : ' + oldTime);
}

//Remove EventListener to reduce conflit
socket.removeEventListener('extinguish');
socket.removeEventListener('light');
socket.removeEventListener('tick');

//Adding our custom EventListener
socket.on('extinguish', function(who) {
	if (displayExtinguishInfo)
		DisplayInfo(who, 'Extinguish');
	state.candleLit = false;
	extinguishCandle()
})

socket.on('light', function(who) {
	if (displayLightInfo)
		DisplayInfo(who, 'Light');
	state.candleLit = true;
	lightCandle();
})

socket.on('tick', function(time) {
	oldTime = state.time;
	state.time = time;
	$('#time').text(time);
})

//Name dictionary

//To add more : https://docs.google.com/spreadsheets/d/1j7-DQF2ZynfsODpgF7_CAeXaVpc0B0SLwnKuShq7vRw/edit#gid=0
nameDictionnary = {
	'5b0575a9fc0328001eac9a58':'<3 Sophia',
	'5b04a28d182716001eca37e2':'emily <3',
	'5b09b584764e920046b56f4c':'Luminosity',
	'5b02a1407d60b6001e835bcc':'???',
	'5b04b482182716001eca38a4':'Reese',
	'5b00a716cf5dc883d3d8db71':'myosotis',
	'5b05443afc0328001eac983e':'jeremiah',
	'5b0150096bc650af735accc5':'Rosie ?',
	'5b0b1872ff7fce0032adea03':'Max',
	'5b0622bd87c62f001e192452':'Rumply',
	'5b01f89c7d60b6001e835793':'yrace ?',
	'5b0a8a27b8d768003c5595f1':'Collin',
	'5b09e1a5b56f22001e760744':'Oliver',
	'5b0150496bc650af735acd57':'Nelly',
	'5b05fca83802b5004606bb0a':'damien',
	'5b063a54faf7ed001e273a26':'Bailey',
	'5b00a704cf5dc883d3d8db44':'lum',
	'5b05ed3b3802b5004606b972':'EternalKnight',
	'5b07e725f9bc8600325d051e':'Pixie Queen',
	'5b05b61f62347400284d375b':'Jack',
	'5b034a2927a3c6001e0d2dc8':'Lightbug01 (ellen)',
	'5b049b849180f4001e5c38bb':'ZEE_DAWG32',
	'5b07adcbbad68b001e27c48c':'FauxUnknown',
	'5b05c06346745e003292a559':'Evelyn',
	'5b01f87a7d60b6001e835719':'ALEX',
	'5b080dca0e7ace00465c9d25':'Josh',
	'5b02a14a7d60b6001e835beb':'lazarus',
	'5b0aa1d6b8d768003c559776':'Matt Lo',
	'5b05ece83802b5004606b857':'Jun Le',
	'5b0740da7ad1310028d6d62d':'cela',
	'5b09cc63b700af001ed94141':'Harvey',
	'5b00a6f8cf5dc883d3d8db25':'Priestess Hoolahoops',
	'5b047750975ba4001ecd09e2':'DanMExplorer',
	'5b0b3375ff7fce0032adf50f':'Elaine Dalton',
	'5b0731887ad1310028d6cdb7':'elmodabozz',
	'5b0b865cacc7bc001e69e436':'Poppy <3',
	'5b0a88deb8d768003c558d39':'manskou',
	'5b06008f3802b5004606bb51':'Maddie',
	'5b091ad50f473f001e08c345':'Robbie',
	'5b034a0e27a3c6001e0d2d6e':'Jordan',
	'5b01f8547d60b6001e835698':'???',
	'5b00a6fdcf5dc883d3d8db32':'M',
	'5b0150826bc650af735acdcc':'Jaques',
	'5b0150816bc650af735acdca':'emmacait410',
	'5b0466a2975ba4001ecd09b8':'Stella',
	'5b0479b0975ba4001ecd09e9':'Palomitasal (Anaisa)',
	'5b02a1357d60b6001e835ba8':'DMK',
	'5b0c255c2b3166001ee7c859':'Stanley',
	'5b05b95662347400284d3769':'ONESTAR 67'
};
