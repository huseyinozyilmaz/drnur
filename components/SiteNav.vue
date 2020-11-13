<template>
  <div id="navbar-main">
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-label="Toggle Navigation Menu">
            <span class="ion-navicon" />
          </button>
          <a class="navbar-brand hidden-xs hidden-sm" href="#home"><span class="ion-navicon" style="font-size:28px; color:#3498db;" /></a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a v-smooth-scroll href="#home" title="Home Page">Home</a></li>
            <li><a v-smooth-scroll href="#about" title="About Dr Nur Ozyilmaz" data-toggle="collapse" data-target=".nav-collapse"> About</a></li>
            <li><a v-smooth-scroll href="#experience" title="Dr Nur Ozyilmaz's Experience"> Experience</a></li>
            <li><a v-smooth-scroll href="#nutrition" title="Nutrition"> Nutrition</a></li>
            <li><a v-smooth-scroll href="#forms" title="Registration Forms"> Forms</a></li>
            <li><a v-smooth-scroll href="#contact" title="Contact Details"> Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
  </div>
</template>
