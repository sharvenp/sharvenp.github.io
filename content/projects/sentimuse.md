+++
date = "2020-04-20"
title = "Sentimuse"
description = "A model that can generate music which fits a given text sentiment."
tags = [
    "machine learning",
    "python"
]
draft = false
+++

Developed an AI model as part of an independent research course that understands the positive/negative sentiment in a given piece of text and generates music that fits the sentiment!

The AI uses a Sentiment Analysis model to first understand the sentiment of the text and then based on the sentiment, it picks a pre-trained music generation model to generate music specific to that sentiment.

The Sentiment Analysis model consists of a bi-directional GRU Recurrent Neural Network (RNN) that creates an embedding of the given text and then passes this embedding into a fully-connected Neural Net that classifies the sentiment.

The music generation model generates uses a GRU network to generate the [ABC-notation](https://abcnotation.com/learn) which is then converted into a .midi file using the [abc2midi](http://abc.sourceforge.net/abcMIDI/original/) library for playing.

More information can be found at our [GitHub repository](https://github.com/grumpypenny/sentiment-analysis-and-music-generation).

Sentimuse used to be hosted on a website, but it is no long active (Azure free trial expired 😔).

<div style="text-align: center">
  <img  src="/img/projects/sentimuse/sentimuse.png" alt="Sentimuse home page"/>
</div>

Some sample music the AI had generated:

Positive sentiment music:

<audio src="/audio/sentimuse/happy.mp3" controls></audio>

Negative sentiment music:

<audio src="/audio/sentimuse/sad.mp3" controls></audio>
