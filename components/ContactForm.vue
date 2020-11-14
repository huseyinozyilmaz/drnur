<template>
  <div class="col-lg-4">
    <h3>Contact Me</h3>
    <form id="contact-form" role="form" :action="action" method="POST" @submit="send">
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
        <button type="submit" class="btn btn-success" @click="sign()">
          Send
        </button>
      </div>
      <input id="signtime" class="form-control" name="signtime" type="hidden">
      <input id="signclick" class="form-control" name="signclick" type="hidden">
    </form><!-- form -->
  </div>
</template>

<style scoped>
form {
  margin-top: 25px;
}
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
  },
  data () {
    return {
      fullname: '',
      replyto: '',
      message: '',
      signclick: '',
      signtime: 0,
      loaded: Date.now()
    }
  },
  methods: {
    send (e) {
      e.preventDefault()
      this.signtime = Date.now() - this.loaded
      const xhr = new XMLHttpRequest()
      const action = e.target.action
      xhr.open('POST', action, true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.onreadystatechange = function () {
        const success = {
          icon: 'success',
          title: 'Thank you!',
          html: '<p>Your message has been successfully sent. I will try to respond as soon as I review your message. All information received will always remain confidential.</p>'
        }
        const failure = {
          icon: 'error',
          title: 'Oops...',
          html: '<p>Something went wrong and we could not send your message</p><p>You can always send an email to <a href="mailto:contact@drnur.co.uk">contact@drnur.co.uk</a></p>'
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText)
          if (response && response.success) {
            // Swal.fire(success)
            // eslint-disable-next-line no-console
            console.log(success)
            this.reset()
          } else {
            // eslint-disable-next-line no-console
            console.log(failure)
            // Swal.fire(failure)
          }
        } else {
          // Swal.fire(failure)
        }
      }.bind(this)
      const data = JSON.stringify({
        replyto: this.replyto,
        fullname: this.fullname,
        message: this.message,
        signclick: this.signclick,
        signtime: this.signtime
      })
      xhr.send(data)
    },
    sign () {
      this.signclick = 'ctrl-' + Math.random().toString(36).substr(2, 5) + '-ctrl'
    },
    reset () {
      this.fullname = ''
      this.replyto = ''
      this.message = ''
      this.loaded = Date.now()
      this.signclick = ''
      this.signtime = 0
    }
  }
}
</script>
