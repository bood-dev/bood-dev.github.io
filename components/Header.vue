<template>
      <div class="relative flex items-center justify-between">
      <a
        href="/"
        aria-label="Brandon Ortiz"
        title="Brandon Ortiz"
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
          >Brandon Ortiz</span
        >
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <nuxt-link :to="localePath('/')"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500">
            {{ $t('header_about_me') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('blog')"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500">
            {{ $t('header_blog') }}
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('projects')"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500">
            {{ $t('header_projects') }}
          </nuxt-link>
        </li>

        <li>
          <ul class="flex lang-switch justify-around">
              <li v-if="$i18n.locale !== 'en'">
                  <nuxt-link class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500" :to="switchLocalePath('en')">EN</nuxt-link>
              </li>
              <li v-if="$i18n.locale !== 'es'">
                  <nuxt-link class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500" :to="switchLocalePath('es')">ES</nuxt-link>
              </li>
          </ul>
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
                  <nuxt-link :to="localePath('/')"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500">
                    {{ $t('header_about_me') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('blog')"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500">
                    {{ $t('header_blog') }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('projects')"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500">
                    {{ $t('header_projects') }}
                  </nuxt-link>
                </li>

                <li>
                  <ul class="flex lang-switch justify-around">
                      <li v-if="$i18n.locale !== 'en'">
                          <nuxt-link class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500" :to="switchLocalePath('en')">EN</nuxt-link>
                      </li>
                      <li v-if="$i18n.locale !== 'es'">
                          <nuxt-link class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-500" :to="switchLocalePath('es')">ES</nuxt-link>
                      </li>
                  </ul>
                </li>
                <li>
                  <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                      <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                      <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </button>
                </li>
              </ul>

            </nav>
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
