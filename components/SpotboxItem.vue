<template>
    <div class="flex flex-col shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
            
            <a href="#" class="block mt-2 no-underline">
            <p class="text-xl font-semibold text-bevagelse-blue-dark">
                <slot name="headline"></slot>
            </p>
            <p class="mt-3 text-base font-light text-black">
                <slot name="description"></slot>
            </p>
            </a>
        </div>
        </div>
    </div>
</template>