<template>
  <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <Header />

    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <br>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        Projects
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Listado de proyectos
      </p>
    </div>

    <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      
      <article
        class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
        v-for="(project, $index) in projects"
        :key="`project-${$index}`">

        <img :src="project.media" class="object-cover w-full h-64" :alt="project.title" />
        <div class="p-5 border border-t-0">
          <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a href="/" class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700" aria-label="Category" :title="project.category">{{ project.category }}</a>
            <span class="text-gray-600">— {{ project.date }}</span>
          </p>

          <nuxt-link :to="project.path" class="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
            {{ project.title }}
          </nuxt-link>
          <p class="mb-2 text-gray-700">
            {{ project.description }}
          </p>
          <nuxt-link :to="project.path" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            {{ $t('blog_read_more') }}
          </nuxt-link>
        </div>
      </article>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  async asyncData(context) {
    const { $content, app } = context;
    const projects = await $content(`${app.i18n.locale}/projects`).fetch();

    return {
      projects: projects.map(project => ({
        ...project,
        path: project.path.replace(`/${app.i18n.locale}`, '')
      })),
    }
  },
}
</script>