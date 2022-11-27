import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import Counter from './Counter.vue';

test('increments value on click (NOT GREAT TEST)', async () => {
  const wrapper = mount(Counter);
  const paragraph = wrapper.find('.paragraph');

  expect(paragraph.text()).toBe('Times clicked: 0');

  await wrapper.vm.increment();
  await wrapper.vm.increment();

  expect(paragraph.text()).toBe('Times clicked: 2');
});

/**
 *
 *
 *
 *
 *
 *
 */

test('increments value on click FIXED', async () => {
  const wrapper = mount(Counter);

  expect(wrapper.text()).toContain('Times clicked: 0');

  const button = wrapper.find('button');
  await button.trigger('click');

  expect(wrapper.text()).toContain('1');

  await button.trigger('click');
  await button.trigger('click');

  expect(wrapper.text()).toContain('3');
});
