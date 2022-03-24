<template>
    <div class="max-w-6xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
      <div class="bg-bevagelse-blue-dark rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">
                  <slot name="headline"></slot>
              </span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-white">
                <slot name="teaser"></slot>
            </p>
            <slot name="button"></slot>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <slot name="image"></slot>
        </div>
      </div>
    </div>
</template>