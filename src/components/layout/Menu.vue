<template>
    <section class="fixed top-0 left-0 right-0" style=" background-color: #1f2235">
        <nav
            class="flex py-2 mx-5 justify-end bg-gdray-200"
            :class="open ? ' flex justify-between' : ' justify-end '"
        >
            <!-- <div class="hidden md:flex">
                <img src="../../assets/vue.jpg" alt height="100" width="100" />
            </div>-->
            <div class="md:flex hidden">
                <ul
                    class="text-white xl:text-2xl text-lg px-4 gap-4"
                    v-for="items in menu"
                    :key="items.id"
                >
                    <li
                        class="text-white hover:text-red-500 px-2 py-1 font-semibold"
                    >{{ items.name }}</li>
                </ul>
            </div>
            <div :class="open ? 'justify-between' : 'hidden'">
                <div class="-mt-5 py-2">
                    <ul class="text-white font-semibold py-1" v-for="items in menu" :key="items.id">
                        <li class="text-white px-2 py-1 font-semibo">{{ items.name }}</li>
                    </ul>
                </div>
            </div>
            <div class="md:hidden" :class="open ? 'h-56' : ''">
                <nav class>
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
        </nav>
    </section>
</template>
<script>

export default {
    name: "Menu",
    data() {
        return {
            open: false,

            menu: [
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

    }


}
</script>