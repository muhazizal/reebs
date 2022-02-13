<template>
  <div>
    <user-dummy :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const user = ref({
      firstName: 'Muhammad Aziz',
      lastName: 'Al-Assad',
    })

    return {
      user,
    }
  },
})
</script>
