---
layout:     post
title:      "MongoDB Security Review 2015"
subtitle:   "Hacking Big Data"
comments:   true
date:       2015-12-05 12:00:00
author:     Mark Roxberry
tags: [mongodb, security]
header-img: "img/mongosec.jpg"
header-img-400: "img/mongosec-400.jpg"
---

MongoDB is hackable. It is an application that requires a hole in a firewall to get access. It is an application written in C++ with some drivers written in C. MongoDB can be exploited, like any application.

This post will act as a clearing house to track MongoDB security realted topics (starting as of December 2015).

#### pen testing with nosql w/ kali
Here's a short walk through of a pen test of a web application that uses MongoDB.
<!-- <iframe width="420" height="315" src="https://www.youtube.com/embed/PgnawxIA6M8" frameborder="0" allowfullscreen></iframe>    
-->
#### hacks
[MongoDB ports start showing up in pen tests](https://www.trustwave.com/Resources/SpiderLabs-Blog/Mongodb---Security-Weaknesses-in-a-typical-NoSQL-database/)

[Mongo targets in the wild](http://thehackernews.com/2015/02/mongodb-database-hacking.html)

#### alerts, fixes, workarounds
[MongoDB alerts](https://www.mongodb.com/alerts)

#### security guides
[MongoDB Security Checklist](https://docs.mongodb.org/v3.0/administration/security-checklist/)

[MongoDB Security Docs](https://docs.mongodb.org/v3.0/administration/security/)

I'll spend some time in 2016 auditing and verifying security controls in MongoDB. I'd like to see what gaps there are and if I can code any tools to help.