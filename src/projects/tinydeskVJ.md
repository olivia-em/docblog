---
title: TinyDesk VJ (PComp & ICM Final)
class: PComp
url: /classes/physcomp/
when: Weeks 10-13
layout: layouts/blog.njk
tags:
  - project
---

[videoKILL - fin](https://editor.p5js.org/oliviaemlee/sketches/e5eQotsBQ)

Arduno Code:

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

#### Other documentation TBD on Monday 12/7/24

<!-- #### Brainstorming

TBD

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="original sketch of the set-up w/ ultrasonic and audio sensors" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_3946.JPG?v=1729601090638">
  <h5>
    Our original sketch for a device with ultrasonic & audio sensors
  </h5>
  </div>
<div class="img-cont">
  <img class="blog-img" alt="changing the plan, sketch" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_3945.JPG?v=1729601095547">
  <h5>
    Sketch for a new device
  </h5>
  </div>
  <div class="img-cont">
  <img class="blog-img" alt="sketch with dimensions for laser cutting" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_3947.JPG?v=1729601086116">
  <h5>
    Sketch with dimensions for laser cutting
  </h5>
  </div>
</div>

#### Code & Connection

TBD

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="arduino code 1" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/Screenshot%202024-10-21%20at%209.54.50%E2%80%AFPM.png?v=1729601167608">
  <h5>
    Arduino Code 1
  </h5>
  </div>
<div class="img-cont">
  <img class="blog-img" alt="arduino code 2" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/Screenshot%202024-10-21%20at%209.55.03%E2%80%AFPM.png?v=1729601162144">
  <h5>
    Arduino Code 2
  </h5>
  </div>
</div>

I made the p5 design with inspiration from one of [TBD]()

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="p5.js 1" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/Screenshot%202024-10-21%20at%209.51.27%E2%80%AFPM.png?v=1729601181465">
  <h5>
    p5.js Code 1
  </h5>
  </div>
</div>

#### Execution

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="laser cutting" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_1768.jpeg?v=1730490433099">
  <h5>
    Laser Cutting Box
  </h5>
  </div>
<div class="img-cont">
  <img class="blog-img" alt="building" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_1774.jpeg?v=1730490441034">
  <h5>
    Building #1
  </h5>
  </div>
  <div class="img-cont">
  <img class="blog-img" alt="building" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_1770.jpeg?v=1730490437102">
  <h5>
    Building #2
  </h5>
  </div>
   <div class="img-cont">
  <img class="blog-img" alt="device in the box" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_1798.jpeg?v=1730490445207">
  <h5>
    Device in the Box
  </h5>
  </div>
   <div class="img-cont">
  <img class="blog-img" alt="breadboard in the box" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_1799.jpeg?v=1730490449139">
  <h5>
    Showing the Breadboard
  </h5>
  </div>
  <div class="img-cont">
  <img class="blog-img" alt="painted Device" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_1794.jpeg?v=1730490484061">
  <h5>
    Painted Device
  </h5>
  </div>
</div>
<br>

TBD

<div>
  <div class="vid-aud">
  <video width="320" height="200" controls>
  <source src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_3949.mov?v=1730490967204" >
Your browser does not support the video tag.
</video><h5>
    <i>It Works!</i>
  </h5>
  </div>
</div>
 -->
