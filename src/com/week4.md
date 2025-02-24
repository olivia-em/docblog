---
title: Week 4
when: February 11th, 2025
layout: layouts/blog.njk
class: Code of Music
url: /classes/com/
tags:
  - com
---

<br>

#### Rhythm!

<div>
  <div class="vid-aud">
  <video width="320" height="200" controls>
  <source src="https://cdn.glitch.me/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_6308.mov?v=1740367198717" >
Your browser does not support the video tag.
</video><h5>
    <a target="_blank" href="https://editor.p5js.org/oliviaemlee/sketches/YIxktzOSy"><i>Drumpads</i></a>
  </h5>
  </div>
</div>

I've wanted to make a drum pad ever since a classmate made one in ICM last semester. I modeled mine after
<a target="_blank" href="https://coral-feverfew-6ba.notion.site/Sound-1413c51e8cc7804c97a6da84524fadd3">his</a>, but made it compatible with tone.js.
I added a slider to change BPM, which also changes the color scheme of the drumpad, with cool tones for slower beats and warm tones for faster ones. I recorded
the sounds from different kits / instruments in Ableton. I had to run the MP3s back through to fix the FFTs from making the sounds cut off abruptly. I did it in a bit of janky way, however
and I'd like to learn the proper way to export, for example a smooth sounding 16th note. I was struggling with structuring the interface, so that it
adapted correctly to the window. The was a lot of math and tinkering involved in that, but it was good practice. The interface is simpler than I wanted; my next step would have been to add reverb & delay (I'll probably do that later).
Also, even though this was an exploration of rhythm, when I was choosing synthy notes for the pad, I wasn't sure what would be good together. If I was to get really fancy, I'd like to be able to change note lenghths, but I'm not
sure where to begin with that.

The video above is me playing with it. In that clip, I don't think I messed with the BPM but I recorded myself for about 6 minutes. Functionally, the BPM won't update until the slider is released, so it isn't changing gradually, and I think
it would be nicer if it did.
