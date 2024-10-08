---
title: Week 5
when: October 1st, 2024
layout: layouts/blog.njk
class: Physical Computing
url: /classes/physcomp/
tags:
  - pc
---

#### High Current Loads

I didn't really understand how controling speed vs. direction worked until I saw one of the schematics (figure 10) in the reading. The H-bridge
figure made it clear how alternating the closed and open transistors would reverse the polarity of the motor. There were a few things
I do have a few questions about; I didn't understand the different use cases for a bipolar vs. unipolar stepper motor. Also, why 
is it better to use a transistor instead of a relay when powering a a DC motor, if relays don't require a protection diode?

#### Readings

##### <i>Making Things Move,</i> Dustyn Roberts

It took me a little bit by surprise to see that my readings for the week were written by Dustyn Roberts, because I took her class, <i>Intro to Mechanical Design,</i>
during my last semester of undergrad. After reading the two chapters of her book, I would definitely say that she's pretty consistent with what she writes and how she teaches. 
In that class, we learned how to use SOLIDWORKS to make 3D and 2D models for printing/laser cutting. One of the most important things I learned was the anecdote of measuring twice, cutting once; this
is especially true for getting tolerance correct and adjusting for kerf. These two things, in regards to 3D printing and laser cutting respectively, are super important and not 
always known or easily understood. From my experience in laser cutting, kerf takes about 0.07mm(?) on either side of a line, which can really affect the fit of parts when you're trying to put things 
together. This is especially the case when you want to fasten with a press fit joint. For 3D printing, especially with lower resolution, faster prints in PLA, there will be significant shrinkage for holes 
and expansion for posts. I digress, the emphasis on the lack of precision in measurements is really important to understand when trying to rapid prototype, and would definitely be the thing I adjust for time-wise. 
You absolutely cannot expect your first design to do what you want it to, even if your models are "precise and accurate."

#### Midterm

Kalinda and I are working on trying to get our arduino to interact with some sort of javascript visualization. We're purchasing (or have already
purchased) different kinds of sensors that might be fun for non-tactile interaction, namely audio and ultra-sonic sensors. At first we tried to recreate a 
[visualization project](https://www.arduino.cc/education/visualization-with-arduino-and-processing/) that uses Processing, but we faced some issues trying to get 
Processing and Arduino IDE to talk to eachother. We thought it was a problem with getting the right serial port name, but even then, we couldn't get the interaction to work. 
Kalinda then replicated a lab that's coming up in a few weeks that connect p5.js and the arduino, using a potentiometer. This seems really promising, but it's a little black-boxy
because we don't really understand how p5 knows that its getting data from the A0 pin. Once we figure that out (we've scheduled some office hours to ask about that), we're probably going to have 2-3 types of interaction 
that will change p5.js visuals. I'm happy about changing to p5 from Processing, because that's something we already have experience in from ICM, while Processing required learning a somehwhat different
syntax that may have been too much to do at this point for our project. Also, I'm thinking I'd like to build something to contain the circuit, like some sort of box or board where only the sensors are visible/accessible, 
but we'll probably do that after we finalize the set-up and start coding in p5. 


