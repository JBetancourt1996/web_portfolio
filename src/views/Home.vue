<template>
  <layout-content>
    <div
      class="w-full h-full flex  justify-center content-center py-12 from-gray-900 to-gray-600 bg-gradient-to-r"
    >
    
      <div class="flex flex-col space-y-4 ">
        <div
          class="bg-gra-400 h-32 w-32 mx-4 flex tdext-center  "
        >
    
            <img class=" rounded-full " src="../../src/assets/img/jb.jpg" alt />
        
        </div>
        <div class=" ">
     
          <div class=" w-96 mx-8 ">
            <p
              class=" text-blue-400  text-xl text-justify "
            >My name is <i class="text-green-400">Jorge Betancourt</i>, I have knowledge of web development  and I focus on modern  web technology</p>
          </div>
        </div>
            <p class=" mx-6 md:mx-10 text-xl font-semibold text-white">Social network</p>
          <div class=" flex  md:mx-6">
               <div
            class="inline-block leading-none  px-4 bgd-green-200"
            v-for="items in red"
            :key="items.id"
          >
            <div :class="items.estilo" class="rounded-full p-2">
              <a class="mx-auto" :href="items.url" target=" black__">
                <img class="w-6 h-6" :src="items.icon" alt />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </layout-content>
</template>

<script>
import LayoutContent from '../components/layout/Content'
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
        estilo: 'bg-gradient-to-tr from-blue-100 via-blue-300 to-blue-500'
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
        estilo: 'bg-gradient-to-r from-blue-300 via-gray-200 to-gray-100'

      },
         {
        id: 4,
        name: 'Git',
        url: 'https://github.com/JBetancourt1996',
        icon: require('../../src/assets/img/git.svg'),
        estilo: 'from-gray-200 to-gray-600 bg-gradient-to-r'

      }
      ]
    }
  },
  methods: {

  }
}
</script>
