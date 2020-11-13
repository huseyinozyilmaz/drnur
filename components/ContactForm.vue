<template>
  <div class="col-lg-4">
    <h3>Contact Me</h3>
    <form id="contact-form" role="form" :action="action" method="POST">
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea class="form-control" required placeholder="Please type your message" />
      </div>
      <div class="form-group">
        <label for="replyto">Your Email</label>
        <input type="email" class="form-control" required name="replyto" placeholder="Email address">
      </div>
      <div class="form-group">
        <label for="fullname" class="control-label">Your Name</label>
        <input type="text" class="form-control" required name="fullname" placeholder="Your Name">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">
          Send
        </button>
      </div>
      <input id="signtime" class="form-control" name="signtime" type="hidden">
      <input id="signclick" class="form-control" name="signclick" type="hidden">
    </form><!-- form -->
  </div>
</template>

<style scoped>
textarea {
  min-height:72px;
}
</style>

<script>
export default {
  props: {
    action: {
      type: String,
      required: true
    }
  }
}
</script>
