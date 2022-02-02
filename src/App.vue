<template>
  <layoutcontent>
    <Layoutmenu></Layoutmenu>
    <layoutbody />
  </layoutcontent>
</template>
<script>

import Layoutcontent from './components/layout/Content'
import Layoutmenu from './components/layout/Menu'
import Layoutbody from './components/layout/body'

export default {
  components: { Layoutcontent, Layoutmenu, Layoutbody }
}
</script>