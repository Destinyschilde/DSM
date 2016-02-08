var vid;


function setup(){
  createCanvas(800, 800, WEBGL);
  vid = createVideo(["assets/catgif.mp4"]);
    vid.loop();
    vid.hide();
}
// i tried to load a video by using assets but it would not load either locally -
//or hosted on my purchase web server. I was trying to texture a cube with a video that looped
function draw(){


  background();



  rotateY(frameCount * 0.01);
  ambientLight(random(255),random(15),235)
  box( 85, random(245,250), 85);

  rotateY(frameCount * 0.01);
  ambientLight(0,random(255),0)
  box( 140, random(155,160), 140);

  rotateY(frameCount * 0.01);
  ambientLight(random(105),0,random(255))
  box( 198, random(63,65), 198);


}
