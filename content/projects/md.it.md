+++
date = "2022-07-31"
title = "md.it"
description = "A dead-simple desktop markdown editor developed using Vue.js and Electron."
tags = [
    "electron",
    "vue",
    "markdown",
]
draft = false
+++

During my co-op internship as a Web Developer at [Environment and Climate Change Canada](https://www.canada.ca/en/environment-climate-change.html), I found myself writing a lot of markdown for discussions, design documents, and bug reports. [HackMD.io](https://hackmd.io/) is my always first choice for writing markdown documents, but I've always wanted a desktop/offline version of HackMD... so I decided to make one 😉

I saw this as an excellent opportunity to learn ElectronJS, which is a framework for creating cross-platform desktop applications using a web development framework of your choice. Vue.js is an amazing and easy-to-use framework, so that's the framework I went with for this application.

Now about this app, it is a dead-simple markdown editor live previews the markdown in side-by-side panel view, and offers the basic functions that you would see in any text editor such as opening files and saving files, plus a simple set of keyboard commands. The editor uses the [Codemirror6](https://codemirror.net/) library with the `markdown` language defaults, which is in fact the same library that HackMD.io uses as well.

Here is an example markdown file in md.it:

<div style="text-align: center">
  <img  src="/images/projects/md.it/demo-pic.png" alt="md.it screenshot"/>
</div>

Visit the [GitHub repo](https://github.com/sharvenp/md.it) for more information, and feel free to [download](https://github.com/sharvenp/md.it/releases) it and try it out!
