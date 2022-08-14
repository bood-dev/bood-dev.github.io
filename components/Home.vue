<template>
  <div
    class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div class="relative flex items-center justify-between">
      <a
        href="/"
        aria-label="Company"
        title="Company"
        class="inline-flex items-center"
      >
        <svg
          class="w-8 text-blue-500"
          viewBox="0 0 24 24"
          stroke-linejoin="round"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span
          class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
          >Company</span
        >
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/"
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >Product</a
          >
        </li>
        <li>
          <a
            href="/"
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >Features</a
          >
        </li>
        <li>
          <a
            href="/"
            aria-label="Product pricing"
            title="Product pricing"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >Pricing</a
          >
        </li>
        <li>
          <a
            href="/"
            aria-label="About us"
            title="About us"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >About us</a
          >
        </li>
      </ul>
      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          @click="isMenuOpen = true"
        >
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  class="inline-flex items-center"
                >
                  <svg
                    class="w-8 text-blue-500"
                    viewBox="0 0 24 24"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="3" y="1" width="7" height="12"></rect>
                    <rect x="3" y="17" width="7" height="6"></rect>
                    <rect x="14" y="1" width="7" height="6"></rect>
                    <rect x="14" y="11" width="7" height="12"></rect>
                  </svg>
                  <span
                    class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                    >Company</span
                  >
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                    >Proyectos</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                    >Pricing</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500"
                    >About us</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-10 lg:grid-cols-2">
            <div class="lg:pr-10">
              <a href="/" aria-label="Go Home" title="Logo" class="inline-block mb-5">
                  <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg class="w-10 h-10 text-blue-500" stroke="currentColor" viewBox="0 0 52 52">
                      <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                  </div>
              </a>
              <h5 class="mb-4 text-4xl font-extrabold leading-none">
                  Brandon Ortiz<br class="hidden md:block" />
                  <span class="inline-block text-blue-500">AppSec Engineer</span>
              </h5>
              <p class="mb-6 text-gray-900">
                  Developer and security analyst, interested in programming and knowing how the applications works. I write about security in my <strong>blog</strong>.
              </p>
              <hr class="mb-5 border-gray-300" />
              <div class="flex items-center space-x-4">
                  <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-blue-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                      <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                      ></path>
                  </svg>
                  </a>
                  <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-blue-600">
                    <i data-feather="circle"></i>
                  </a>
                  <button type="submit" class="inline-flex items-center justify-center h-10 px-4 mr-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                  Download my CV
                  </button>
              </div>
            </div>

            <div>
              <img class="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="" />
            </div>
        </div>
    </div>

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div class="px-12 text-center sm:px-0">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg class="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Fearless
        </h6>
        <div class="mb-2 text-gray-700">
            I will remember and recover, not forgive and forget.
        </div>
        </div>
        <div class="px-12 text-center sm:px-0">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg class="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Honest
        </h6>
        <div class="mb-2 text-gray-700">
            I have nothing to lose but something to gain.
        </div>
        </div>
        <div class="px-12 text-center sm:px-0">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg class="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Beautiful
        </h6>
        <div class="mb-2 text-gray-700">
            White is not always light and black is not always dark.
        </div>
        </div>
        <div class="px-12 text-center sm:px-0">
        <div class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg class="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
        </div>
        <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Fantastic
        </h6>
        <div class="mb-2 text-gray-700">
            The meaning of life is to give life meaning.
        </div>
        </div>
    </div>
    </div>

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div class="relative lg:w-1/2">
        <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" class="object-cover w-full lg:absolute h-80 lg:h-full" />
        <svg class="absolute top-0 right-0 hidden h-full text-white lg:inline-block" viewBox="0 0 20 104" fill="currentColor">
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
        </svg>
        </div>
        <div class="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
        <div>
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
            </p>
        </div>
        <h5 class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Your new ideal style
        </h5>
        <p class="mb-5 text-gray-800">
            <span class="font-bold">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Etiam sem neque, molestie sit amet venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend, sed consequat odio sollicitudin.
        </p>
        <div class="flex items-center">
            <button
            type="submit"
            class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
            Get started
            </button>
            <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-blue-500 hover:text-deep-purple-800">
            Learn More
            <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
            </a>
        </div>
        </div>
    </div>
    </div>

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-10 row-gap-8 lg:grid-cols-5">
            <div class="lg:col-span-2">
            <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                20 Nov 2020
            </p>
            <div class="mb-3">
                <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-blue-500">
                <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                    What it means when a man falls from outer space
                </p>
                </a>
            </div>
            <p class="mb-4 text-base text-gray-700 md:text-lg">
                Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimah's playfully subversive style is wholly her own.
            </p>
            <div class="flex items-center">
                <a href="/" aria-label="Author" class="mr-3">
                <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                </a>
                <div>
                <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-500">Petru Vîrtos</a>
                <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
                </div>
            </div>
            </div>
            <div class="flex flex-col space-y-8 lg:col-span-3">
            <div>
                <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                14 Jul 2020
                </p>
                <div class="mb-3">
                <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-blue-500">
                    <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    Mascarpone cheese triangles taleggio
                    </p>
                </a>
                </div>
                <p class="mb-4 text-base text-gray-700 md:text-lg">
                Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.
                </p>
                <div class="flex items-center">
                <a href="/" aria-label="Author" class="mr-3">
                    <img alt="avatar" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                </a>
                <div>
                    <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-500">Alex Stratulat</a>
                    <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
                </div>
                </div>
            </div>
            <div>
                <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                18 Mar 2020
                </p>
                <div class="mb-3">
                <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-blue-500">
                    <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    The quick, brown fox jumps over a lazy dog
                    </p>
                </a>
                </div>
                <p class="mb-4 text-base text-gray-700 md:text-lg">
                "A kitten, a nice little, sleek playful kitten, that I can play with, and teach, and feed--and feed--and feed!" I was not unprepared for this request, for I had noticed how his pets went on increasing in size.
                </p>
                <div class="flex items-center">
                <a href="/" aria-label="Author" class="mr-3">
                    <img alt="avatar" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
                </a>
                <div>
                    <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-500">Susie the Cat</a>
                    <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p class="text-sm text-gray-600">Brandon Ortiz</p>
            <div class="flex items-center mt-1 space-x-3">
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-blue-500">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                </svg>
                </a>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-blue-500">
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                    <circle cx="15" cy="15" r="4"></circle>
                    <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                    ></path>
                </svg>
                </a>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-blue-500">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                </svg>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
