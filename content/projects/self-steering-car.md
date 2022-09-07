+++
date = "2019-06-19"
title = "Self-Steering Car"
description = "An AI agent trained with Reinforcement Learning to steer along any track."
tags = [
    "machine learning",
    "python"
]
draft = false
+++

Developed an AI agent that learned how to steer a car along a randomly generated race track using Reinforcement Learning.

Reinforcement Learning is the process of training an agent to complete a task purely by supplying it rewards/punishment. If the agent does something that is desired, it receives a positive reward, and alternatively, if it does something that isn't desired, it receives a negative reward.

This may sound familiar, and that's because this is exactly how animals and humans learn!

With a lot of Statistics and Calculus, we can convert this idea to train an AI agent in a similar fashion to steer a virtual track. Essentially, if the AI reaches the end of the track, it receives a large positive reward, and if it hits the edge of the track, it receives a negative reward.

There are many algorithms out there to perform Reinforcement Learning and the algorithm used in the project is called [Policy Gradients](https://towardsdatascience.com/policy-gradients-in-a-nutshell-8b72f9743c5d) (I used a vanilla version for this project). In a nutshell, it tries to search for an optimal policy which will dictate its actions at certain states and it will do this by exploring random moves. As it explores random moves, it will run into many different scenarios that result in different rewards and by doing this repeatedly, it will gain a sense of what the optimal policy is.

Learn more about the project at this [GitHub repository](https://github.com/sharvenp/self-steering-car).

After running the simulation 6000 times, here is how the AI agent performs on a track I drew in paint:

<div style="text-align: center">
  <img  width="600" src="/images/projects/self-steer/self_steer.gif" alt="AI agent steering car along track after training 6000 times"/>
</div>

Some next steps would be to load this model onto a Raspberry Pi and have it control a small toy car using ultrasonic sensors.