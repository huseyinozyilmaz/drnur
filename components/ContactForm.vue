<template>
  <div>
    <h3>Contact Me</h3>
    <form id="contact-form" role="form" action="{{ site.contactaction }}" method="POST">
        <div class="form-group">
            <label for="message">Your Message</label>
            <textarea class="form-control" id="message" name="message" required placeholder="Please type your message" style="min-height:72px;"></textarea>
        </div>
        <div class="form-group">
            <label for="replyto">Your Email</label>
            <input type="email" class="form-control" id="replyto" required name="replyto" placeholder="Email address">
        </div>
        <div class="form-group">
            <label for="fullname" class="control-label">Your Name</label>
            <input type="text" class="form-control" id="fullname" required name="fullname" placeholder="Your Name">
        </div>
        <div class="form-group">
            <button id="btn-submit" type="submit" class="btn btn-success">Send</button>
        </div>
        <input class="form-control" id="signtime" name="signtime" type="hidden">
        <input class="form-control" id="signclick" name="signclick" type="hidden">
      </form><!-- form -->
  </div>
</template>

