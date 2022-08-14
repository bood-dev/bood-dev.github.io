<template>
  <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <Header />

    <Hero />

    <Features />

    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Brandon Ortiz',
      description: 'Brandon Ortiz personal website',
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Página personal de Brandon Ortiz, escribo acerca de temas relacionados con la seguridad en aplicaciones web y móviles'
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
