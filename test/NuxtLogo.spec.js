import { shallowMount } from '@vue/test-utils'
import Portfolio from '../components/Portfolio/Portfolio'

describe('Portfolio', () => {
  test('NuxtLogo renders properly', () => {
    const wrapper = shallowMount(Portfolio, {})
    expect(wrapper.html()).toMatchSnapshot()
  })
})
