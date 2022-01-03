<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid gap-10 lg:grid-cols-2">
            <div class="lg:pr-10">
                <a href="/" aria-label="Go Home" title="Logo" class="inline-block mb-5">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                    <svg class="w-10 h-10 text-blue-500" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                    </div>
                </a>
                <h5 class="mb-4 text-4xl font-extrabold leading-none">
                    Brandon Ortiz<br class="hidden md:block" />
                    <span class="inline-block text-blue-500">{{ $t('about_position') }}</span>
                </h5>
                <p class="mb-6 text-gray-900">
                    {{ $t('about_description_1') }} <strong>blog</strong>.
                </p>
                <hr class="mb-5 border-gray-300" />
                <div class="flex items-center space-x-4">
                    <a href="https://twitter.com/_bood" target="_blank" class="text-gray-600 transition-colors duration-300 hover:text-blue-600">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                        <path
                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                        ></path>
                    </svg>
                    </a>

                    <button type="submit" class="inline-flex items-center justify-center h-10 px-4 mr-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none">
                    {{ $t('about_download_CV') }}
                    </button>
                </div>
            </div>

            <div>
                <img class="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="" />
            </div>
        </div>
    </div>
</template>
