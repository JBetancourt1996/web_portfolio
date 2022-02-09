<template>
  <layout-content>
    <div
      class="w-full h-full flex flex-col mx-auto py-4 from-gray-900 to-gray-600 bg-gradient-to-r absodluste"
    >
      <div class="md:grid md:grid-cols-12 md:grid-srowds-2 md:gap-4 bg-blue-5e00 h-ful">
        <div class="w-11/12 mx-auto rounded-lg md:col-span-6 tdext-center">
          <div
            class="inline-block leading-none rzounded-full px-4 bg-grdeen-200"
            v-for="items in red"
            :key="items.id"
          >
            <div :class="items.estilo" class="rounded-full p-2">
              <a class="mx-auto" :href="items.url" target=" black__">
                <img class="w-6 h-6" :src="items.icon" alt />
              </a>
            </div>
          </div>
          <div class="h-2/3 w-11/12 mx-auto md:col-span-6 text-justidfy p-2">
            <h1
              class="textw-center leading-none font-semibold text-green-400 text-xl"
            >I'm Jorge Betancourt</h1>
            <span
              class="font-normal text-blue-400"
            >I am Jorge Betancourt, I have knowledge of web development and I focus on modern web technology</span>
          </div>
        </div>
        <div
          class="bg-grday-400 w-11/12 mx-auto rounded-lg md:col-span-6 tdext-center mt-3 md:mt-0"
        >
          <div class="leading-none rzounded-full px-4 bg-grdeen-200"></div>
          <div class="h-2/3 w-11/12 mx-auto md:col-span-6 text-justidfy p-2">
            <img class="rounded-full w-100 h-100" src="../../src/assets/img/jb.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </layout-content>
</template>

<script>
import LayoutContent from '../components/layout/Content'
// import { getIcon, } from "../../tools";
export default {
  name: 'Home',
  components: {
    LayoutContent,
  },
  data() {
    return {

      red: [{
        id: 1,
        name: 'Facebook',
        url: 'https://www.facebook.com',
        icon: require('../../src/assets/img/meta-logo-24.png'),
        estilo: ['bg-gradient-to-tr from-blue-100 via-blue-300 to-blue-500']
      },

      {
        id: 2,
        name: 'Instagram',
        url: 'https://www.instagram.com',
        icon: require('../../src/assets/img/instagram-logo-24.png'),
        estilo: 'bg-gradient-to-r from-pink-400 via-pink-300 to-pink-300'

      },
      {
        id: 3,
        name: 'Linkend',
        url: 'https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit',
        icon: require('../../src/assets/img/linkedin-logo-24.png'),
        estilo: ['bg-gradient-to-r from-blue-300 via-gray-200 to-gray-100']

      }
      ]
    }
  },
  methods: {

  }
}
</script>
