<template>
  <div>
    <p>FullName: {{ fullName }}</p>
    <p>Message: {{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'

interface User {
  firstName: string
  lastName: string
}

export default defineComponent({
  name: 'HelloUser',
  props: {
    user: {
      type: Object as () => User,
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
