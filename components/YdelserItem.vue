<template>
    <div class="relative max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="mt-6 font-poppins prose prose-indigo prose-lg text-black mx-auto">
          <h2><slot name="headline"></slot></h2>
          <p class="text-lg italic"><slot name="intro"></slot></p>

          <slot name="content"></slot>

          <div class="relative max-w-4xl mx-auto py-16 mt-16 px-4 sm:px-6 lg:px-8">
              <div class="relative lg:flex lg:items-center">
                <div class="relative lg:ml-10">
                  <svg class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
                    <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
                  </svg>
                  <blockquote class="relative">
                    <div class="text-4xl leading-9 text-bevagelse-blue-dark font-poppins font-semibold">
                      <p><slot name="quote"></slot></p>
                    </div>
                    <footer class="mt-8">
                      <div class="flex">
                        <div class="ml-4 lg:ml-0">
                          <div class="text-base font-medium text-black"><slot name="quote-name"></slot></div>
                          <div class="text-base font-medium text-bevagelse-blue-light"><slot name="quote-profession"></slot></div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
          </div>
      </div>
    </div>
</template>