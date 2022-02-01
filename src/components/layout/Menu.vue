<template>
    <section class style=" background-color: #1f2235">
        <nav
            class="flex md:flex-wrap gap-4 items-center py-4 md:mx-20 mx-5 justify-end"
            :class="open ? ' justify-between' : ''"
        >
            <div class="hidden md:flex">
                <img src="../../assets/vue.jpg" alt height="100" width="100" />
            </div>
            <ul class="text-white text-xl hidden md:flex flex-1 justify-end gap-4">
                <NuxtLink
                    to="/pages/documentation"
                    class="text-white hover:text-red-500 px-2 py-1 font-semibold"
                >Home</NuxtLink>

                <li class="text-white hover:text-red-500 px-2 py-1 font-semibo">Servicios</li>
                <li class="text-white hover:text-red-500 px-2 py-1 font-semibo">About</li>
                <li class="text-white hover:text-red-500 px-2 py-1 font-semibo">Skills</li>
                <li class="text-white hover:text-red-500 px-2 py-1 font-semibo">Contact</li>
            </ul>
            <div :class="open ? 'justify-between' : 'hidden'" class="bg-redd-600 flex md:hidden">
                <ul class="text-white font-semibold space-y-4">
                    <NuxtLink
                        to="/pages/documentation"
                        class="text-white hover:text-red-500 px-2 py-1 font-semibold"
                    >Home</NuxtLink>

                    <li class="text-white hover:text-red-500 px-2 py-1 font-semibo">Servicios</li>
                    <li class="text-white hover:text-red-500 px-2 py-1 font-semibo">About</li>
                    <li class="text-white hover:text-red-500 px-2 py-1 font-semibo">Skills</li>
                    <li class="text-white hover:text-red-500 px-2 py-1 font-semibo">Contact</li>
                </ul>
            </div>
            <div class="flex md:hidden bg-yeldlow-400 hd-56" :class="open ? 'h-56' : ''">
                <div id="app" class="flex">
                    <nav class="main-nav bg-yesllow-900 flex flex-1">
                        <div @click="open = !open" class="animate-pulse">
                            <img
                                :class="open ? 'hidden' : ' '"
                                src="../../../src/assets/menu.png"
                                height="32"
                                width="32"
                                alt
                            />
                            <img
                                :class="open ? '' : ' hidden'"
                                src="../../../src/assets/x.png"
                                height="32"
                                width="32"
                                alt
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    </section>
</template>
<script>
// import { getIcon } from '../../../tools'
// import { Slide } from 'vue3-burger-menu'
export default {
    name: "Menu",
    data() {
        return {
            open: false
        }
    },
    components: {
        // Slide
    },
    methods: {
        // openMenu() {
        //     this.open = true;
        // }          
    }
    // computed: {
    //     moduleIcon() {
    //         return getIcon(this.icon)
    //     }
    // }

}
</script>