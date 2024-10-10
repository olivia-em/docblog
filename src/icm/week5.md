---
title: Week 5
when: October 3rd, 2024
layout: layouts/blog.njk
class: ICM
url: /classes/icm/
tags:
  - icm
---

#### Creating a [neonClock](https://editor.p5js.org/oliviaemlee/sketches/eDbr3VwBv)

So for the assignment this week, I felt like reorganizing an old project would be either too
simple or maybe not as fun. I look forward to doing something new every week, so that's what I did.
My first thought was to make a clock, then I pivoted to a timer. I used this [documentation](https://editor.p5js.org/denaplesk2/sketches/ryIBFP_lG)
as inspiration, but once I got everything "working" (i.e. hours, minutes, and seconds counting down), I realized a I had a HUGE
problem. I was using the <i>setInterval</i> function to initialize a timing function to count downwards. But then I was like... oh no.
Each part is counting down, but not at all in relation to one another. And I had no idea how to fix that in a way that was efficient or
even necessary, because I knew I could make a normal clock work. So I abandoned the timer concept, and just used the built in <i>second</i>, <i>minute</i>,
and <i>hour</i> functions to make a regular clock. For a little add on, I used this [example](https://editor.p5js.org/nilampwns/sketches/OITbr5lx) to have a background
gradient that would change depending on if it were morning or nighttime.
