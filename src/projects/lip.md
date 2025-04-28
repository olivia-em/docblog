---
title: Lessons in Perspective
class: CYW & CATN
url: /classes/catn/
when: Weeks 7-14
layout: layouts/blog.njk
tags:
  - project
---

#### thinking about hypertext

<div class="img-div">
<div class="img-cont">
  <img class="blog-img" alt="twine diagram" src="https://cdn.glitch.me/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/Screenshot%202025-02-24%20at%202.41.17%E2%80%AFPM.png?v=1740498221948">
  <h5>
    Diagram from my <a target="_blank" src="https://docblog-olee.glitch.me/catn/sketch2/">Twine Game</a>
  </h5>
  </div>
</div>
<br>

I was really interested in hypertext as a way of connecting objects, like web pages, and I especially loved the diagram behind those linkages. For my final project, I knew I wanted to do some sort fo poetic composition
that has a narrative throughline, but also plays with the idea of perspective and the relation between past and present. Initially, I was going to do some sort of installation with prijection mapping into photo frames on the wall, 
but I ultimately wanted to use this project for Code Your Way and Computational Approaches to Narrative. Then I came to the idea of 3D website that visualizes, in some way, a diagram with unexpected connections. I was working with parametric equations
as I liked how they have the same variable affecting different aspects of the code, such that each part is related to one another, and I thought this melded well with the concept I had. At the time, I knew what I wanted to write about, and much of the writing process
was therapeutic.

#### [Project Plan](https://www.figma.com/board/vDXCJi2QHw0K9Blf3hi0el/Lessons-in-Perspective?node-id=0-1&t=aUvvWP5k2U1H21jG-1)

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/board/vDXCJi2QHw0K9Blf3hi0el/Lessons-in-Perspective?node-id=0-1&embed-host=share" allowfullscreen></iframe>

<br><br>

This was my initial project plan, in which there would be some sort of main text in 3D page, and then zooming out would reveal subtexts. My first proof of concept was a basic Three.js page with two cubes. The user could rotate either cube individually or rotate the scene
as a whole. Once I got that working, I knew I could achieve an expanded version. 

#### [Writing](https://docs.google.com/document/d/1QZ2nN5u5q2l1qOvAAPWlnl6e6UL9sjyc2AEvdsX9_FM/edit?usp=sharing)

I wrote from personal experience, so I started by just dumping a lot of stuff on the page. The main text is broken into 5 sections, which are about 5 confrontations that came over the course of being involved with a person. 
Each situation relates to a subtext, a short prose excerpt about a person from the past who treated me similarly. Going into the writing, I really felt like these connections meant I should have known better at the time. However, 
as I wrote I realize that this process is what allowed me to understand the connections, just really sitting down to think through the past and try to see something from many angles. So I think the content strays away from that initial idea, which I'm actually happy about 
because it seems like a harmful mentality. 

#### [Prototyping](https://docs.google.com/document/d/1QZ2nN5u5q2l1qOvAAPWlnl6e6UL9sjyc2AEvdsX9_FM/edit?usp=sharing)

  <div class="vid-aud">
  <video width="320" height="200" controls>
  <source src="https://cdn.glitch.me/d7ac8ce9-d6b5-4915-b92c-e6f0bf0d0c29/Screen%20Recording%202025-04-06%20at%208.31.55%E2%80%AFPM.mov?v=1743990777755" >
Your browser does not support the video tag.
</video><h5>
    <i>interaction</i>
  </h5>
  </div>
  
So I took everything I wrote and for the main text made PNGs. I brought those into the code, and coded a framework such that the main text would be considered a section, but the X & Y rotation of each piece within
would somehow affect its corresponding subtext. I was originally going to manipulate each subtext differently, with but I got some feedback throughout iteration that have different effects wouldn't necessarily add to the user's understanding
of the content more than what already going on. So I decided to normalize and keep the effects the same. 

The effect I chose, in the end, manipulates the line height and kerning of the subtexts. I like this for a number of reasons. This was going to be the first subtext's effect, which talks about a tug of war. I like the pulling back and forth, and I think
that goes well with the rest of the composition as well. I also like that you can create a different readable text layout for each one, even though it's the same function, and I think there's poetic merit in that. 

