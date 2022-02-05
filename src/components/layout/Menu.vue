<template>
    <section
        class="fixed top-0 left-0 right-0 border-b-2 border-red-500"
        style=" background-color: #1f2235"
    >
        <nav
            class="flex py-2 mx-5 md:justify-end bg-gdray-200"
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

            <div class="-mt-5 py-2" :class="open ? '' : ' hidden'">
                <div class>
                    <ul
                        class="text-white font-semibold py-1"
                        v-for="items in menu"
                        :key="items.id"
                        :to="items.to"
                    >
                        <router-link
                            :to="{ name: '', params: { links: 'items.to' }, }"
                            class="text-white px-2 py-1 font-semibold md:hidden"
                        >{{ items.name }}</router-link>
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
                { id: 1, name: 'Home', to: '/', components: 'Home', },
                { id: 2, name: 'Services', to: '/service', components: 'Services', },
                { id: 3, name: 'About', to: '/About', components: 'About', },
                { id: 4, name: 'Skills', to: '/Skills', components: 'Skills', },
                { id: 5, name: 'Contact', to: '/Contact', components: 'Contact', }
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