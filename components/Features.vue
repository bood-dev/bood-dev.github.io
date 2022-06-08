<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h5 class="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
            <span>&#129300;</span>&nbsp;{{ $t('home_title_what_i_do') }}
        </h5>
      <p class="text-base text-gray-700 md:text-lg">
          {{ $t('home_description_what_i_do') }} {{ new Date().getFullYear() - 2015 }} {{ $t('home_description_what_i_do_cont') }}
      </p>
    </div>
    <div class="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <Feature :title="$t('feature_1_title')"
                :description="$t('feature_1_description')" />
        <Feature :title="$t('feature_2_title')"
                :description="$t('feature_2_description')" />
        <Feature :title="$t('feature_3_title')"
                  :description="$t('feature_3_description')" />
        <Feature :title="$t('feature_4_title')"
                  :description="$t('feature_4_description')" />
    </div>
  </div>
</template>
