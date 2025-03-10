---
title: Week 6
when: March 4th, 2025
layout: layouts/blog.njk
class: Code of Music
url: /classes/com/
tags:
  - com
---

<br>
  
#### Melody

<div class="img-div">
<img class="blog-img" alt="design plan & sketches" src="https://cdn.glitch.me/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/IMG_6521.JPG?v=1741625144543">
  </div>

<br>
 
##### <a target="_blank" href="https://editor.p5js.org/oliviaemlee/sketches/azlC-n3WR"><i>EnvironmentRecorder</i></a>

Originally I wanted to do a pitch detection visual, but I couldn't for the life of me get Essentia.js to work. Some methods were deprecated, my audio context / webaudio situation was throwing errors, and I was just so lost in the code because their examples were really complicated internally, 
so I didn't know where to begin. So, I decided to pivot. 

I wanted a way to record yourself and test out different levels of reverb/delay with interesting visual feedback. I got the basic version working on my own, but
once I wanted to export, I had trouble. After consulting AI, it was because theres a difference between applying effects to the playback vs. the master. So I had Claude restructure the code so that you could test the effects, and then apply them and export once you're happy.
It's not a perfect interface, and it requires headphones to listen to the test, but I think it could work maybe for spoken word poetry, environmental recordings, and making backing vocals. I'll need to work on migrating this to my github pages, and then make sure it works on a mobile device.
