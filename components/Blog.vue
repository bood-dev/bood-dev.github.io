<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h5 class="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
                <span>&#128221;</span>&nbsp;{{ $t('home_title_latest_blog_posts')}}
            </h5>
        </div>

        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

          <div v-for="(post, $index) in posts"
              :key="`post-${$index}`">
            <p>{{ post.description }}</p>
          </div>

          <div class="text-center">
            <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              {{ $t('home_button_blog') }}
              <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Blog',
  data: function () {
    return {
      posts: []
    }
  },
  methods: {
    asyncData: function () {
      this.posts = [
        {
          description: "Foo"
        }
      ];
    }

    /*
    asyncData: async function(context) {
    const { $content, app } = context;
    const posts = await $content(`${app.i18n.locale}/blog`).fetch();

    this.posts = posts.map(post => ({
        ...post,
        path: post.path.replace(`/${app.i18n.locale}`, '')
      }));
    }*/
  },
  beforeMount(context) {
    this.asyncData(context);
  }
}
</script>

