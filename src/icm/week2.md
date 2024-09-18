---
title: Week 2
when: September 12th, 2024
layout: layouts/blog.njk
class: ICM
url: /classes/icm/
tags:
  - icm
---

#### Watch, Read, Run Code

I've realized throughout this week's assignments that I learn so much just by lollygagging around the internet trying to find code
that works for the problem I have, however it is incredibly time consuming. I have ideas that I struggle to execute on my own, so I look for different solutions
in various forums or documentation pages. This is definitely obvious and true for a lot of people. Still, I'm always collecting code from people and building on it, especially
complex functions. I'm not yet at the stage where the syntax is so clear to me that I can create these things on my own. I hope it'll click for me eventually, but I'm
happy that I'm at a place of understanding where I can experiment and deconstruct in order to get the results I want. The worksheet for this week was fun to complete and really tested my ability
to iterate on and abandon ideas that don't work.

#### Creating My [AnimatedSketch](https://editor.p5js.org/oliviaemlee/sketches/Nm11vqA10)

I created a primitive color changing and interactive ipod for the animated sketch. This was the first idea that came to me and I just rolled with it. I know
that I take a lot of time to code these pieces so I just wanted to dive in. The three requirements were having something that changes based on the mouse, over time, and upon running the sketch.
Since I was making a device, it seemed self explanatory that the button would dictate a change when the mouse was clicked it. I also thought it would be cute for the ipod to change color every time you ran the sketch.
I didn't come up with the idea for the change over time until very last, because I knew it would take the least amount fo time to implement. I like to build everything from the ground up, so I designed the sketch without the animations first.
I ran into some issues when I translated the coordinate system, and had to keep using <i>resetMatrix()</i> in order to make the curves of the headphones. So in the end, I backtracked to get rid of the translation altogther.
Making the gradient was difficult also, because I wanted it to fill the rectangle. I tried to mess around with lerping for a while, but I couldn't get it to work and found another solution. I plan to ask more about what <i>drawingContext</i> means in class.
The most difficult thing to do was create the button interaction. Buttons exist in p5.js, but I didn't want it to have that existing style. I found a really cool function that helped me determine when the mouse was within the bounds of my button (another reason why translating the coordinate system was a bad idea).
Once I got the button to react to being clicked, I moved on to creating a function that could be called by the mouse clicking event. I wanted an array of album covers to appear on the screen of the ipod, and this was super hard to get right. Just when the function would work, the images would be behind everything happening in the draw
function. If I called <i>mouseClicked()</i> in <i>draw()</i>, then the album covers were on top, but changed at the rate of the loop instead of on clicking the button. I felt like I was trying to solve a puzzle, and it felt liek a HUGE win when I got it right.
In the end, it all came down to when/where I created variables and when/where I used them in the code. That also seems obvious, but I can tell you it was not. Lastly, I decided on a whim to have the headphone wires change color over time. When I tested it out, it looked cool, so I stuck with it.
I'm definitely happy not only with what I made, but what I learned while making it.
