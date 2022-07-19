<template>
  <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <Header />

    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <br>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        {{ post.title }}
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        {{ post.description }}
      </p>
    </div>

    <article>
      <NuxtContent :document="post" class="prose"/>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Post',
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context;
    const slug = params.slug;
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch();

    return { post }
  },
  head() {
    return {
      title: this.post.title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.media
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: ''
        },

        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@_bood'
        }
      ],
    };
  },
};
</script>
