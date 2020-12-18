---
layout:     post
title:      Site Roadmap First Draft
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
I've done a ton of layout and formatting work more than I have done writing for my site recently.  I hope to change that, starting by keeping notes on that work and other projects.  

These are milestones on that roadmap, completed and planned:

1. Workflow improvement
1. Continuous performance improvements
1. Responsiveness
1. Scheduled branding
1. Integration features
1. Content features

## Workflow improvement
Using Github actions and Azure deployment center, I can quickly deploy site changes and content on a push to my Github repo.  Details on the Github action and Azure configuration to follow.  

TODO: One note, I hit a snag with Azure running out of space after I made a bunch of pushes to my repo.  It looks like the **.repository** directory increases each time, maybe the **.git** directory?  I will need to figure that out.

## Continuous performance improvements
Roxberry.dev is hitting an outstanding **95** on mobile and a **99** on desktop on the Pagespeed site (using [Lighthouse](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.Roxberry.dev&tab=desktop) /  [Gtmetrix.com](https://gtmetrix.com) ). Both of these tools (Gtmetrix uses Lighthouse) I made a few changes to get this score.  

Following the tools "opportunities", I made several changes to the content of my website and process to build it. I added a grunt step to compress my images. I used "uncss" and "critical" to slim down linked styles.  I used preloads, preconnects, async calls to speed up getting assets to get the "First Contentful Paint" as soon as possible.

TODO: Future improvements will include a compression review, and taking a harder look at the mobile score.

## Responsiveness
Add details about changes to my SASS files for media queries, development using Safari and Responsive tools.  I added format changes for spacing on main content areas, a fix for the categories **card-list** layout.

TODO: Going forward, I'll continue to refactor the SASS classes.  I'd like to add features to make the sidebar act like a drawer on a click and switch from dark to light mode.

## Scheduled branding
TODO: I just thought of a new feature for changing the css colors based on a schedule.  I expect this will probably be some jquery call on page load, need to see if it is feasible (and if it won't impact my awesome perf score).  Maybe read from a json with key value pairs of the date, the source class and to class, with the classes already predefined.

## Integration features
TODO: Some ideas for new features:
1. Photo album integration
1. RSS briefing 
1. Code Kata demos

## Content features
I made a change to the images code for posts. Before, I just dumped images into the /img folder and the path on the post would always need to find it from that starting point.  I changed that to use the convention of a folder with the same name as the post file name, e.g. 2020-03-01-delta.md will have a folder in img/posts/ named 2020-03-01-delta.md.  All of the post images can be put there and managed a bit better.

TODO: Add more pages for projects that need tracking and that I can show others.

TODO: Plan the 2021 content calendar.  

Ideas - I'm in the middle of my C|EH reup, so have a few things to write about that.  I need to do a Java and C# catchup - need some ideas for projects.  I'd like to do an AI and Robotics project.  Maybe something totally different, publish some writing on Russia / Russian Language / Soviet stufies (my academic background).  Or a peek into personal / professional productivity or fun and games? Also, need a work environment and tools update, now that I'm working out of my basement bunker.

## Wrap Up
Reading through, I don't have an excuse not to have more content here.  I'm excited to hit the milestones on this roadmap.
