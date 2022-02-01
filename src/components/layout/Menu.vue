<template>
    <section class="fixed top-0 left-0 right-0" style=" background-color: #1f2235">
        <nav
            class="flex md:flex-wrap gap-4 items-center py-4 md:mx-20 mx-5 justify-end"
            :class="open ? ' flex justify-between' : ' justify-end '"
        >
            <!-- <div class="hidden md:flex">
                <img src="../../assets/vue.jpg" alt height="100" width="100" />
            </div>-->
            <div class="md:flex hidden justdify-end bg-dindigo-200">
                <ul
                    class="text-white text-xl justify-end bg-green-30 px-4 gap-4"
                    v-for="items in menuOne"
                    :key="items.id"
                >
                    <li
                        class="text-white hover:text-red-500 px-2 py-1 font-semibold bgd-blue-700"
                    >{{ items.name }}</li>
                </ul>
            </div>
            <div :class="open ? 'justify-between' : 'hidden'" class="bg-redd-600 flex md:hidden">
                <div class="-mt-5 py-12">
                    <ul
                        class="text-white font-semibold spacse-y-4 py-1"
                        v-for="items in menuOne"
                        :key="items.id"
                    >
                        <li class="text-white px-2 py-1 font-semibo">{{ items.name }}</li>
                    </ul>
                </div>
            </div>
            <div class="flex md:hidden bg-yeldlow-400 hd-56" :class="open ? 'h-56' : ''">
                <div class="flex">
                    <nav class="main-nav bg-yesllow-900 flex flex-1">
                        <div @click="open = !open" class="animate-pulse">
                            <img
                                :class="open ? 'hidden' : ' '"
                                src="../../../src/assets/img/menu.png"
                                height="32"
                                width="32"
                                alt
                            />
                            <img
                                :class="open ? '' : ' hidden'"
                                src="../../../src/assets/img/x.png"
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

export default {
    name: "Menu",
    data() {
        return {
            open: false,

            menuOne: [
                { id: 1, name: 'Home' },
                { id: 2, name: 'Services' },
                { id: 3, name: 'About' },
                { id: 4, name: 'Skills' },
                { id: 5, name: 'Contact' }
            ]


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