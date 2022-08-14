<template>
  <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <Header />

    <div class="container w-full md:max-w-3xl mx-auto pt-5">
      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

        <!--Title-->
        <div class="font-sans">
              <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{{ project.title }}</h1>
              <p class="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
        </div>

        <br>

        <article>
          <NuxtContent :document="project" class="prose"/>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context;
    const slug = params.slug;
    const project = await $content(`${app.i18n.locale}/projects`, slug).fetch();

    return { project }
  },
  head() {
    return {
      title: this.project.title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },

    }
  }
};
</script>
