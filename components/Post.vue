<template>
  <div class="grid py-8 sm:grid-cols-4">
    <div class="mb-4 sm:mb-0">
      <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
        <a href="/" class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800" aria-label="Category">{{ category }}</a>
        <p class="text-gray-600">{{ date }}</p>
      </div>
    </div>
    <div class="sm:col-span-3 lg:col-span-2">
      <div class="mb-3">
        <a href="/" aria-label="Article" class="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
          <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
            {{ title }}
          </p>
        </a>
      </div>
      <p class="text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        category: String,
        date: String
    }
}
</script>
