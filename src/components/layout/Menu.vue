<template>
    <section
        class="fixed top-0 z-10 left-0 right-0 border-b-2 border-red-500 bg-gradient-to-r from-gray-700 via-gray-900 to-black"
        :class="open ? 'z-20' : ''"
    >
        <nav
            class="flex py-2 mx-5 md:justify-end bg-gdray-200"
            :class="open ? ' flex justify-between' : ' justify-end '"
        >
            <div class="md:flex hidden" v-for="items in menu" :key="items.id">
                <router-link
                    tag="a"
                    class="text-white hover:text-red-500 font-semibold xl:text-2xl text-lg px-4 gap-4"
                    :to="items.to"
                >{{ items.name }}</router-link>
            </div>

            <div class="py-2 flex flex-col gap-4" :class="open ? '' : ' hidden'">
                <div class v-for="items in menu" :key="items.id">
                    <router-link
                        tag="a"
                        class="text-white text-lg px-2 py-1 font-semibold md:hidden"
                        :to="items.to"
                    >{{ items.name }}</router-link>
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

            menu: [{
                id: 1,
                name: 'Home',
                to: '/',
            },
            {
                id: 2,
                name: 'Services',
                to: '/Services',
            },
            {
                id: 3,
                name: 'About',
                to: '/About',
            },
            {
                id: 4,
                name: 'Skills',
                to: '/Skills',
            },
            {
                id: 5,
                name: 'Contact',
                to: '/Contact'
            }
            ]


        }
    },
    components: {

    },
    methods: {

    }


}
</script>