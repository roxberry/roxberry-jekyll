---
layout: page
title: "Contact"
permalink: "/contact/"
description: "Feel free to reach out."
# header-img: "img/contact.jpg"
visible: true
navigation: true
---

*Fill out the form below to send a message.*

<div>
<!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
<!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
<!-- NOTE: To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
<form name="sentMessage" action="https://formspree.io/contact@roxberry.dev" method="POST" id="contactForm"
    novalidate>
        <div class="form-group">
            <label>Email Address</label>
            <input type="email" class="form-control" name="_replyto" placeholder="Email Address" id="email"
                required data-validation-required-message="Please enter your email address.">
            <p class="help-block text-danger"></p>
        </div>
        <div class="form-group">
            <label>Message</label>
            <textarea rows="5" class="form-control" name="body" placeholder="Message" id="message" required
                data-validation-required-message="Please enter a message."></textarea>
            <p class="help-block text-danger"></p>
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-default" value="Send" />
        </div>
    <input type="hidden" name="_next" value="//roxberry.dev/thanks/" />
    <input type="text" name="_gotcha" style="display:none" />
</form>
</div>
