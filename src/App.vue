<template>
  <layout-content class="mt-12">
    <layout-menu></layout-menu>

    <router-view />
  </layout-content>
</template>

<script>
import LayoutContent from './components/layout/Content'
import LayoutMenu from './components/layout/Menu'
export default {
  components: {
    LayoutContent,
    LayoutMenu
  }
}
</script>


