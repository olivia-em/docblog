---
title: TinyDesk VJ (PComp & ICM Final)
class: PComp
url: /classes/physcomp/
when: Weeks 10-13
layout: layouts/blog.njk
tags:
  - project
---

#### Building on my PCOMP Midterm

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="original visual from the pcomp midterm" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_3940.JPG?v=1733722690149">
  <h5>
    The Ripple Visual from my Midterm
  </h5>
  </div>
</div>

I wanted to build on my [midterm project](https://docblog-olee.glitch.me/projects/pcomp1/) and make a VJ box with a larger interface and more functionality.
My goal was to have a strong p5 visualization that had more effects rather than simply changing color or frame rate. While brainstorming, I had wanted to the visual to be sound reactive
as well as reacting to the device interaction. Beyond this, I wanted to have a website of at least three visual options that someone could choose from. Those visuals would vary in use, where one would simply be for having on in the background while music was playing, while another would be very interactive and the user would have to make effects
occur with the music on their own, and the last would have a video component that performers coudl have as a backdrop. Beyond this, I could even put the circuit diagram on the website, as well 
as an instructable on box construction if someone wanted to create their own version of the project. Throughout the process of creating the box and coding the visual, some of 
these things were lost. 

<br><br>

I started by creating three visuals the resonated with me, and initially used keypress functions to simulate box interacting, as I had alread done the serial communication code necessary for connecting this to an arduino, and I knew I could replicate it. 

#### [soundStorm](https://editor.p5js.org/oliviaemlee/sketches/aA7Suir-g)

I liked the idea doing something with a thunderstorm, because I thought lightning and rain would be cool effects to see while music was playing. I started searching for inspiration code, and came across these three examples/sketches: 
[Mouse Ripple](https://happycoding.io/tutorials/p5js/input/mouse-ripple), [Generative Lightning](https://editor.p5js.org/dlatolley/sketches/Bu3JRNqgF), and [rain](https://editor.p5js.org/kelsierose94/sketches/MU2Y21aG0). I took this code and tweaked it so that it would have variable changes. I wrote the code for the bubble clouds based on a
[bouncyBalls](https://editor.p5js.org/oliviaemlee/sketches/KfGtsVCtU) homework assignment in ICM.

#### [soundWaves](https://editor.p5js.org/oliviaemlee/sketches/nL5Cfv6Oi)

For this sketch, which isn't retained in the final version, I just wanted something simple and found two example of people working with sound waves. I added them both to this sketch and tweaked positioning, number, color, and opacity.

#### [videoKill](https://editor.p5js.org/oliviaemlee/sketches/89DohdKNp)

This sketch was to be the one that incorporated the video aspect. I was really into the colors and video capture from my [pixel project](https://editor.p5js.org/oliviaemlee/sketches/hzMPd6IpS) so I wanted to find a way to get video of myself with no background, which I could tweak the pixel colors of. I found 
this great [source code](https://editor.p5js.org/ml5/sketches/ruoyal-RC) for ML5 body segmentation. I thought it would be could to be able to change this into a grid, and have the grid number be one of the variable changes on the box interface, so I added that grid number as a variable to the code, as well as made two of the pixel colors chnage to a variable so the colors of the video would change as well. 
I wanted the box to have some general effects as well, so I added variables for blur, grain, and frame rate. The film grain code I found [here](https://editor.p5js.org/lazydistribution/sketches/nB-VddIvd). 


#### Arduino IDE & Fabrication

Once I had mostly finished making these sketches, I had to start fabricating the box and updating my original arduino code. This interface has two rotary encoders, fours slide potentiometers, 3 regular potentiometers, and six buttons. 
For the box fabrication, I expanded the design of my midterm box so that it was much larger. I updated my arduino code so that it had the proper number of inputs, created a basic version of the circuit, 
and set up soundStorm so that it could check the serial communication and make sure that everything was reacting properly. 


<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="laser cutting box parts" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4560.JPG?v=1733722748172">
  <h5>
    Laser Cutting Box Walls
  </h5>
  </div>
<div class="img-cont">
  <img class="blog-img" alt="base of box put together" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4564.JPG?v=1733722757489">
  <h5>
    Base of Box Together
  </h5>
  </div>
  <div class="img-cont">
  <img class="blog-img" alt="checking fit of circuit inputs" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4627.JPG?v=1733722760867">
  <h5>
    Checking Input Fits
  </h5>
  </div>
    <div class="img-cont">
  <img class="blog-img" alt="circuit" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4557.JPG?v=1733722720804">
  <h5>
    Circuit
  </h5>
  </div>
</div>

<div>
  <div class="vid-aud">
  <video width="320" height="200" controls>
  <source src="https://cdn.glitch.me/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4555.MOV?v=1733725138578" >
Your browser does not support the video tag.
</video><h5>
    <i>The Circuit Works!</i>
  </h5>
  </div>
</div>

#### Playtesting & Changing Code

After user and playtesting the circuit on the three different visuals, I gathered that people seemed to resonate with the body segmentation more than the other two. Some even suggested 
that I only focus on one. I agreed, because it felt like having to go to the computer to change the visuals kind of took people out of the experience of really getting to play with the box. 
I also didn't love how the buttons would only do these effects that would just diappear, and you'd have to keep pressing them to see something show up. It didn't feel impactful. From here, I decided to pair back and focus
on one visual and really beef it up. I basically placed the soundStorm effects into the videoKill sketch. ML5 seems to not be able to function in a sketch while it is sound reactive, so I had to abandon that aspect of the project.
From here, rather than having the effects be one off on the press of a button, I wanted them to just turn on and off. Furthermore, in order for all the buttons on the box to have a use, I had to create two new effects to fill the empty space.
My classmate had sent me a cool [delay](https://editor.p5js.org/oliviaemlee/sketches/1MyYEo6u-) effect on a grid of video captures, and when I got it working in the greater sketch the color changes over time were really fantastic. I also added this super cool [laser](https://editor.p5js.org/lokoshiv/sketches/ryRplw9om) sketch, which I used Chat GPT 
to help me get it moving. To be clear, with how long the code is, I did use Chat GPT to help organize and comment the code out so it's easier to understand. Before I had done that, everything was all over the place and it was very difficult to find things so I could change them. 

#### Finishing Fabrication

While changing the code, I was also painting the box and putting the circuit together inside of it so that people could really get a feel for how the different inputs would function. 
Another classmate had given me the idea of putting vinyls on the rotary encoders so that it really felt like spinning a record to mix up visuals. I thought that was cool, so I got smaller vinyl record coasters and dremeled them to fit as rotary encoder caps. 


<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="In the spray paint booth" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4628.JPG?v=1733722771545">
  <h5>
    in the spray paint booth
  </h5>
  </div>
<div class="img-cont">
  <img class="blog-img" alt="painted box parts" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4678.JPG?v=1733726364818">
  <h5>
    galaxy painted box
  </h5>
  </div>
  <div class="img-cont">
  <img class="blog-img" alt="painted box parts" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4683.JPG?v=1733726372708">
  <h5>
    galaxy painted box cover
  </h5>
  </div>
  <div class="img-cont">
  <img class="blog-img" alt="mess of soldered wires/inputs in my red bin" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4684.JPG?v=1733726379463">
  <h5>
    mess of soldered wires/inputs
  </h5>
  </div>
    <div class="img-cont">
  <img class="blog-img" alt="full fabrication" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4725%202.JPG?v=1733722815470">
  <h5>
    Full Fabrication
  </h5>
  </div>
</div>

I made the p5 design with inspiration from one of [TBD]()

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="" src="">
  <h5>
    
  </h5>
  </div>
</div>

#### Execution

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="" src="">
  <h5>
    
  </h5>
  </div>
<div class="img-cont">
  <img class="blog-img" alt="" src="">
  <h5>
    
  </h5>
  </div>
  <div class="img-cont">
  <img class="blog-img" alt="" src="">
  <h5>
    
  </h5>
  </div>
   <div class="img-cont">
  <img class="blog-img" alt="" src="">
  <h5>
    
  </h5>
  </div>
   <div class="img-cont">
  <img class="blog-img" alt="" src="">
  <h5>
    
  </h5>
  </div>
  <div class="img-cont">
  <img class="blog-img" alt="" src="">
  <h5>
    
  </h5>
  </div>
</div>
<br>

#### Final Visualization Code in p5.js

[videoKILL - fin](https://editor.p5js.org/oliviaemlee/sketches/e5eQotsBQ)

#### Final Arduino Code:

#include <EncoderStepCounter.h>
unsigned int ADCValue;

// Pin assignments
const int rot1PinA = 2; // Rotary encoder 1
const int rot1PinB = 3;
const int rot1ButtonPin = 4; // Rotary encoder 1 button

const int rot2PinA = 5; // Rotary encoder 2
const int rot2PinB = 6;

const int slider1Pin = A0;
const int slider2Pin = A1;
const int slider3Pin = A2;
const int slider4Pin = A3;

const int pot1Pin = A4;
const int pot2Pin = A5;
const int pot3Pin = A6;

const int button1Pin = 7;
const int button2Pin = 8;
const int button3Pin = 9;
const int button4Pin = 10;
const int button5Pin = 11;
const int button6Pin = 12;

// Rotary encoder instances
EncoderStepCounter encoder1(rot1PinA, rot1PinB);
EncoderStepCounter encoder2(rot2PinA, rot2PinB);

// Encoder previous positions
int oldRot1 = 0;
int oldRot2 = 0;

// Button state variables for rotary encoder button
int rot1_button = 0; // Current state of the rot1 button toggle
int lastRot1ButtonState = LOW; // Previous button state

unsigned long lastDebounceTime = 0; // For debouncing
const unsigned long debounceDelay = 50; // Debounce delay in ms

// Button toggle states and last read states
int buttonStates[6] = {0, 0, 0, 0, 0, 0}; // Toggle states for buttons 1-6
int lastButtonStates[6] = {LOW, LOW, LOW, LOW, LOW, LOW}; // Previous button states
unsigned long lastDebounceTimes[6] = {0, 0, 0, 0, 0, 0}; // Last debounce times

void setup() {
Serial.begin(9600);

// Initialize encoders
encoder1.begin();
encoder2.begin();

attachInterrupt(digitalPinToInterrupt(rot1PinA), interruptRot1, CHANGE);
attachInterrupt(digitalPinToInterrupt(rot1PinB), interruptRot1, CHANGE);
attachInterrupt(digitalPinToInterrupt(rot2PinA), interruptRot2, CHANGE);
attachInterrupt(digitalPinToInterrupt(rot2PinB), interruptRot2, CHANGE);

// Configure button pins
pinMode(rot1ButtonPin, INPUT_PULLUP);
pinMode(button1Pin, INPUT_PULLDOWN);
pinMode(button2Pin, INPUT_PULLDOWN);
pinMode(button3Pin, INPUT_PULLDOWN);
pinMode(button4Pin, INPUT_PULLDOWN);
pinMode(button5Pin, INPUT_PULLDOWN);
pinMode(button6Pin, INPUT_PULLDOWN);
}

void loop() {
// Update encoders
encoder1.tick();
encoder2.tick();

// Read rotary encoder positions and map to 0-23
int rot1 = encoder1.getPosition() % 24;
int rot2 = encoder2.getPosition() % 24;

// Reset encoders if they exceed the range
if (rot1 < 0) rot1 += 24;
if (rot2 < 0) rot2 += 24;

// Handle rotary encoder button toggle with debounce
int currentRot1ButtonState = digitalRead(rot1ButtonPin);
if (currentRot1ButtonState != lastRot1ButtonState) {
if (millis() - lastDebounceTime > debounceDelay) {
lastDebounceTime = millis();
if (currentRot1ButtonState == LOW) { // Button pressed
rot1_button = !rot1_button; // Toggle between 0 and 1
}
}
}
lastRot1ButtonState = currentRot1ButtonState;

// Read sliders and map to 0-100
int slider1 = map(analogRead(slider1Pin), 0, 1023, 0, 100);
int slider2 = map(analogRead(slider2Pin), 0, 1023, 0, 100);
int slider3 = map(analogRead(slider3Pin), 0, 1023, 0, 100);
int slider4 = map(analogRead(slider4Pin), 0, 1023, 0, 100);

// Read potentiometers and map to specific ranges
int pot1 = map(analogRead(pot1Pin), 0, 1023, 10, 60);
int pot2 = map(analogRead(pot2Pin), 0, 1023, 0, 10);
int pot3 = map(analogRead(pot3Pin), 0, 1023, 0, 6);

// Handle button toggles with debounce
int buttonPins[6] = {button1Pin, button2Pin, button3Pin, button4Pin, button5Pin, button6Pin};
for (int i = 0; i < 6; i++) {
int currentButtonState = digitalRead(buttonPins[i]);
if (currentButtonState != lastButtonStates[i]) {
if (millis() - lastDebounceTimes[i] > debounceDelay) {
lastDebounceTimes[i] = millis();
if (currentButtonState == HIGH) { // Button pressed
buttonStates[i] = !buttonStates[i]; // Toggle state
}
}
}
lastButtonStates[i] = currentButtonState;
}

// Print all values in the specified order
Serial.print(rot1); Serial.print(',');
Serial.print(rot1_button); Serial.print(',');
Serial.print(slider1); Serial.print(',');
Serial.print(slider2); Serial.print(',');
Serial.print(rot2); Serial.print(',');
Serial.print(slider3); Serial.print(',');
Serial.print(slider4); Serial.print(',');
Serial.print(pot1); Serial.print(',');
Serial.print(pot2); Serial.print(',');
Serial.print(pot3); Serial.print(',');
for (int i = 0; i < 6; i++) {
Serial.print(buttonStates[i]);
if (i < 5) Serial.print(',');
}
Serial.println();

delay(100); // Stabilization delay
}

// Interrupt service routines for rotary encoders
void interruptRot1() {
encoder1.tick();
}

void interruptRot2() {
encoder2.tick();
}

TBD

<!-- <div>
  <div class="vid-aud">
  <video width="320" height="200" controls>
  <source src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_3949.mov?v=1730490967204" >
Your browser does not support the video tag.
</video><h5>
    <i>It Works!</i>
  </h5>
  </div>
</div> -->
