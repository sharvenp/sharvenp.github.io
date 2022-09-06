+++
date = "2021-03-27"
title = "UofTalk"
description = "A social network app developed for UofT students to make connections with like-minded people."
tags = [
    "full-stack",
    "web development",
    "python",
    "mongodb",
    "machine learning"
]
draft = false
+++

As part of my software engineering course, I worked in a team of 7 people to build an app from scratch.

We decided to make a social networking platform where users can match with other users that share similar preferences in music, video games, movies, and humour.

We implemented various features where users can create profiles, chat with other users, form groups, and many more. We also added Spotify API integration where users OAuth into their Spotify accounts and display their top 5 most listened artists on their profile.

For the matching algorithm, we used the unsupervised machine learning algorithm, K-means. We essentially form clusters of users in different dimensions of space and to generate matches for a user, we fetch all users within that cluster. We also allow the user to specify how granular they want their matches to be, and based on this specificity, we choose a certain k-value for the K-means model to return the matches according to the new space.

<div style="text-align: center">
  <img  src="/img/projects/uoftalk/uoftalk_login.png" alt="UofTalk login page"/>
</div>

For more details and screenshots, please visit the [GitHub repository](https://github.com/manuboojuk/MAYPASS-UofTalk).