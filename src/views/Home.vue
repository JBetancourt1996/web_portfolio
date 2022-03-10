<template>
  <layout-content>
    <div
      class="  flex flex-col gap-4  from-gray-900 to-gray-600 bg-gradient-to-r"
    >
    

      
        <div
          class=" h-32 w-32 mt-4 mx-auto "
        >
    
            <img class=" rounded-full " src="../../src/assets/img/jb.jpg" alt />
        
        </div>
         <p
              class=" text-white text-xl  md:mx-auto mx-4 "
            >My name is <i class="text-green-400">Jorge Betancourt</i>, I have knowledge of web development. <br>  and I focus on modern  web technology</p>
  
         
    <p class=" mx-auto text-center md:mx-10 text-xl font-semibold text-white">Social network</p>
          <div class=" flex mx-auto">
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

             <p class=" mx-auto text-center md:mx-10 text-xl font-semibold text-white">Technology</p>
          <div class=" flex px-4 gap-4 justify-center bg-dblack py-4 -mt-3">
                <div  v-for="items in img" :key="items.id">
        
              <img  :src="items.img" alt="" class=" h-32 w-32 rounded-full">
          
        
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
      ],
      img:[{id:1,
      img: require('../assets/img/vue.jpg')
      },
      {id:2,
      img: require('../assets/img/tail.jpeg')
      }]
    }
  },
 
}
</script>
