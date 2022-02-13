import 'ts-jest'
import { shallowMount } from '@vue/test-utils'
import { UserSettings } from '../ExampleSettings'
import ExampleComponent from '../ExampleComponent.vue'

describe('ExampleComponent.vue', () => {
  test('renders props.user when passed', () => {
    const user: UserSettings = {
      firstName: 'Muhammad Aziz',
      lastName: 'Al-Assad',
    }
    const wrapper = shallowMount(ExampleComponent, {
      propsData: { user },
    })
    expect(wrapper.props('user')).toBe(user)
  })
})
