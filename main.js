x = 0;
y = 0;
img = ""
screen_width = 0;
screen_height = 0;

apple = "";
speak_data = "";
to_number = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple = loadImage('apple.png');
  
}





function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 


function setup() {
  canvas = createCanvas(640,420);
  canvas.center();
}

function draw() {
 image(img,0,0,640,420)
 fill("#FF0000")
 text("Dog",45,75)
 noFill()
 stroke("#FF0000")
 rect(30,60,450,350)

 fill("#FF0000")
 text("Dog",320,120)
 noFill()
 stroke("#FF0000")
 rect(300,90,270,320)
}


