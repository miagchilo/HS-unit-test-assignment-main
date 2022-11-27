import { expect, it, describe } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import MovieList from '../MovieList.vue';
import MovieCard from '../MovieCard.vue';

describe('MovieList.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(MovieList);

    expect(wrapper.exists()).toBe(true);
  });

  // TODO: Why is this a bad test? Reason your answer
  // That because we are checking if the list contains 4 movies, it will break if we added more movies
  // we should check if it has more than one movie :)

  // TODO: Rework the test so it follows best practices
  it('should render movie list', async () => {
    const wrapper = shallowMount(MovieList);
    const movieCards = wrapper.findAllComponents(MovieCard);

    expect(movieCards.length).toBeGreaterThan(1);
  });

  // TODO: write this test!
  it('should have no favorite movie by default', async () => {
    const wrapper = shallowMount(MovieList);
    // ...?
  });

  // TODO: TDD time!
  // Make this test pass by adding the missing functionality in the MovieList.vue component
  // TODO: After you made the test pass, rework the test so it follows best practices
  it('should update favorite movie on favorite-selected event received', async () => {
    const wrapper = mount(MovieList);
    const movieCard = wrapper.findAllComponents(MovieCard)[0];
    await movieCard.vm.$emit('favorite-selected', 'eeaao2022');
    await wrapper.vm.$nextTick();
    const select = wrapper.find('option:checked');
    expect(select.exists()).toBeTruthy();
  });
});
