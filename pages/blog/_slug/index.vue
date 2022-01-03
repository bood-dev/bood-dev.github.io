<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="mx-auto sm:text-center lg:max-w-2xl">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            {{ post.category }}
          </p>
        </div>
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          {{ post.title }}
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          
        </p>
      </div>
      <div class="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
        <img class="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96" :src="post.media" :alt="post.title" />
      </div>
      <p class="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
        Image credits
      </p>

    <nuxt-content class="text-gray-800" :document="post" />

    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context;
    const slug = params.slug;
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch();

    return {
      post,
    }
  },
}
</script>