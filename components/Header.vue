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
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MRRXJSM36E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MRRXJSM36E');
</script>
