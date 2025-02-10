<template>
  <div class="max-w-[600px] m-auto">
    <div class="flex flex-col md:flex-row gap-8">
      <div class="w-full flex flex-col bg-neutral-100 py-10 px-3 rounded-lg shadow-sm">
        <div class="flex-1 pb-4">
          <div class="w-8 m-auto">
            <Icon name="user-plus" size="32" />
          </div>
          <h3 class="text-center font-bold py-5 uppercase text-xl">Initial <br>Consultation</h3>
          <ul class="text-sm">
            <li class="flex flex-col items-center gap-3 my-3">
              <Icon name="time" size="24"/>
              <span>60 Minutes</span>
            </li>
          </ul>
        </div>
        <div class="flex flex-row pt-4 border-t-[1px] items-center w-full h-12 px-10">
          <div class="font-thin text-4xl flex-1 h-10">£650</div>
          <div>
            <a class="font-semibold text-sm tracking-tight" href="mailto:info@drnur.co.uk?subject=Initial%20Consultation%20Booking%20Request&body=Your%20Name%3A%20%0ADate%20of%20Birth%3A%20%0AContact%20Phone%20Number%3A%20%0APurpose%20of%20the%20Consultation%3A%20%0A%0A">Book Now</a>
          </div>
        </div>
      </div>
      
      <div class="w-full flex flex-col bg-neutral-100 py-10 px-3 rounded-lg shadow-sm">
        <div class="flex-1">
          <div class="w-8 m-auto">
            <Icon name="renew" size="32" />
          </div>
          <h3 class="text-center font-bold py-5 uppercase text-xl">Follow-up <br>Consultation</h3>   
          <ul class="text-sm">
            <li class="flex flex-col items-center gap-3 my-3">
              <Icon name="time" size="24"/>
              <span>45 Minutes</span>
            </li>
          </ul>
        </div>
        <div class="flex flex-row pt-4 border-t-[1px] items-center w-full h-12 px-10">
          <div class="font-thin text-4xl flex-1 h-10">£450</div>
          <div>
            <a class="font-semibold text-sm tracking-tight" href="mailto:info@drnur.co.uk?subject=Follow-up%20Consultation%20Booking%20Request&body=Your%20Name%3A%20%0AContact%20Phone%20Number%3A%20%0A%0A">Book Now</a>
          </div>
        </div>
      </div>
    </div>
    <div class="text-sm text-gray-600 py-4">
      * For more complex cases that necessitate additional time, the extra time charges at a rate of £500 per hour.
    </div>
  </div>
</template>