import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeView, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
