<template>
  <div>
    <p>FullName: {{ fullName }}</p>
    <p>Message: {{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'
import { UserSettings } from './ExampleSettings'

export default defineComponent({
  name: 'ExampleComponent',
  props: {
    user: {
      type: Object as () => UserSettings,
      required: true,
    },
  },
  setup({ user }) {
    const fullName = computed(() => `${user.firstName} ${user.lastName}`)
    const message = ref('Hello')

    return {
      fullName,
      message,
    }
  },
})
</script>
