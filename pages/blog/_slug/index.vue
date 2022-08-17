<template>
  <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <Header />

    <div class="container w-full md:max-w-3xl mx-auto pt-5">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

        <img :src="post.media" :alt="post.title" :title="post.title">
        <small>{{ post.attribution_text }}</small>
        <!--Title-->
        <div class="font-sans">
              <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{{ post.title }}</h1>
              <p class="text-sm md:text-base font-normal text-gray-600">{{ $t('post_published') }} {{ post.date }}</p>
              <p class="text-sm md:text-base font-normal text-blue-600"><a href="https://twitter.com/_bood" target="_blank">@_bood</a></p>
        </div>

        <br>

        <article>
          <NuxtContent :document="post" class="prose"/>
        </article>
      </div>
    </div>

    <Footer />
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
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'bood.dev'
        },

        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@_bood'
        },
        {
          hid: 'twitter:domain',
          property: 'twitter:domain',
          content: 'bood.dev'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.post.media
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: '@_bood'
        }

      ],
    };
  },
};
</script>
