---
layout:     post
title:      Site Roadmap
subtitle:   Retrospective and plan for site improvements
comments:   true
date:       2020-12-17 18:00:00
author:     Mark Roxberry
excerpt:    Reviewing site improvements over the past month and setting a plan for future improvements.  Done, todo and obstacles.
header-img-list:     "improvements-list.jpg"
header-img-post:     "improvements-post.jpg"
tags:       [blog, site, retrospective, improvements, projects]
categories: Planning
featured:   true
---
## Site Roadmap
I've done a ton of layout and formatting work than I have done writing for my site.  I hope to change that, by keeping notes on that work and other projects.  These are milestones on that roadmap:

1. Workflow improvement
1. Continuous performance improvements
1. Responsiveness
1. Scheduled branding
1. Integration features
1. Content features

## Workflow improvement
Using Github actions and Azure deployment center, I can quickly deploy site changes and content on a push to my Github repo.  Details on the Github action and Azure configuration to follow.  

One note, I hit a snag with Azure running out of space after I made a bunch of pushes to my repo.  It looks like the .repository directory increases each time, maybe the .git directory?  Will need to figure that out.

## Continuous performance improvements
Roxberry.dev is hitting an outstanding 95 on mobile and a 99 on desktop on the Pagespeed site (using [Lighthouse](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.Roxberry.dev&tab=desktop) /  [Gtmetrix.com](https://gtmetrix.com) ). Both of these tools (Gtmetrix uses Lighthouse) I made a few changes to get this score.  

Following the tools "opportunities", I made several changes to the content of my website and process to build it. I added a grunt step to compress my images. I used "uncss" and "critical" to slim down linked styles.  I used preloads, preconnects, async calls to speed up getting assets to get the "First Contentful Paint" as soon as possible.

Future improvements will include a compression review, and taking a harder look at the mobile score.

## Responsiveness
Details about changes to my SASS files for media queries, development using Safari and Responsive tools.

Going forward, I'll continue to refactor the SASS classes.  I'd like to add features to make the sidebar act like a drawer on a click and switch from dark to light mode.

## Scheduled branding
New feature for changing the css colors based on a schedule.  I expect this will probably be some jquery call on page load, need to see if it is feasible (and if it won't impact my awesome perf score).

## Integration features
Some ideas for new features:
1. Photo integration
1. RSS briefing 
1. Code Kata demos

## Content features
Pages for projects

