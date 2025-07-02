---
title: Girl Time
class: Code of Music
url: /classes/com/
when: Weeks 8-14
layout: layouts/blog.njk
tags:
  - project
---
<!-- 
#### Building on my PCOMP Midterm

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="original visual from the pcomp midterm" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_3940.JPG?v=1733722690149">
  <h5>
    The Ripple Visual from my Midterm
  </h5>
  </div>
</div>
<br> -->

Girl Time is an immersive installation dedicated to sharing femme stories, created in collaboration with classmate, Prisha Jain. This installation draws inspiration from the deeply personal conversations that unfold in women’s restrooms—spaces of vulnerability, camaraderie, and unfiltered expression. Through interactive and generative elements, Girl Time invites users to step into the experience of being female-identifying, capturing its beauty and struggle. No two users will have the same experience, the same way no two women do. It is a space where whispers of encouragement, secrets, and moments of collective empowerment come to life, offering a window into the emotional landscapes that define femme existence. 

Girl Time comes together using Arduino, p5.js, and Tone.js. The removable objects are magnetized, and the magnets are detected by hall effect sensors. Through serial communication, the sensors send messages to p5, which initiates sound and video corresponding to the object, with added randomness. 

<!-- 
<br>

I started by creating three visuals the resonated with me, and initially used keypress functions to simulate box interacting, as I had alread done the serial communication code necessary for connecting this to an arduino, and I knew I could replicate it.

#### [soundStorm](https://editor.p5js.org/oliviaemlee/sketches/aA7Suir-g)

I liked the idea doing something with a thunderstorm, because I thought lightning and rain would be cool effects to see while music was playing. I started searching for inspiration code, and came across these three examples/sketches:
[Mouse Ripple](https://happycoding.io/tutorials/p5js/input/mouse-ripple), [Generative Lightning](https://editor.p5js.org/dlatolley/sketches/Bu3JRNqgF), and [rain](https://editor.p5js.org/kelsierose94/sketches/MU2Y21aG0). I took this code and tweaked it so that it would have variable changes and could function as an effect that is called based on key press (or button press for serial communication). I wrote the code for the bubble clouds based on a
[bouncyBalls](https://editor.p5js.org/oliviaemlee/sketches/KfGtsVCtU) homework assignment in ICM.

#### [soundWaves](https://editor.p5js.org/oliviaemlee/sketches/nL5Cfv6Oi)

For this sketch, which isn't retained in the final version, I just wanted something simple and found two example of people working with sound waves. I added them both to this sketch and tweaked positioning, number, color, and opacity.

#### [videoKill](https://editor.p5js.org/oliviaemlee/sketches/89DohdKNp)

This sketch was to be the one that incorporated the video aspect. I was really into the colors and video capture from my [pixel project](https://editor.p5js.org/oliviaemlee/sketches/hzMPd6IpS) so I wanted to find a way to get video of myself with no background, which I could tweak the pixel colors of. I found
this great [source code](https://editor.p5js.org/ml5/sketches/ruoyal-RC) for ML5 body segmentation. I thought it would be could to be able to change this into a grid, and have the grid number be one of the variable changes on the box interface, so I added that grid number as a variable to the code, as well as made two of the pixel colors chnage to a variable so the colors of the video would change as well.
I wanted the box to have some general effects as well, so I added variables for blur, grain, and frame rate. The film grain code I found [here](https://editor.p5js.org/lazydistribution/sketches/nB-VddIvd).

<div class="img-div">
  <div class="img-cont">
  <img class="blog-img" alt="Olivia in pixels project" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4320.JPG?v=1733722690149">
  <h5>
   Me in the pixels project!
  </h5>
  </div>
<div class="img-cont">
  <img class="blog-img" alt="Olivia in videoKill video capture" src="https://cdn.glitch.global/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_4697.JPG?v=1733722787324">
  <h5>
   Me in the video capture!
  </h5>
  </div>
</div>

#### Arduino IDE & Fabrication

Once I had mostly finished making these sketches, I had to start fabricating the box and updating my original arduino code. This interface has two rotary encoders, fours slide potentiometers, 3 regular potentiometers, and six buttons.
For the box fabrication, I expanded the design of my midterm box so that it was much larger. I updated my arduino code so that it had the proper number of inputs, created a basic version of the circuit,
and set up soundStorm so that it could check the serial communication and make sure that everything was reacting properly.

<!-- ADD SKETCH PICTURES!! -->

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

#### Execution

Here's a [video](https://drive.google.com/file/d/16esVSRQ3alPVk1kufLlmkbxxZRxrYIJB/view?usp=drive_link) of the project working, as well as the final source code!
 -->
<!--
<div>
  <div class="vid-aud">
  <video width="320" height="200" controls>
  <source src="" >
Your browser does not support the video tag.
</video><h5>
    <i>It Works!</i>
  </h5>
  </div>
</div> -->
<!-- 
##### [Final Visualization Code](https://editor.p5js.org/oliviaemlee/sketches/e5eQotsBQ) in p5.js

##### [Final Arduino Code](https://editor.p5js.org/oliviaemlee/sketches/eCxUK3-la) typed out in p5.js sketch
 -->