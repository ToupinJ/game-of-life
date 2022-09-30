import { describe, it, expect, beforeEach, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Cell from '../Cell.vue'

describe('HomeView', () => {
  let cellActivateWrapper, cellDeactivateWrapper;

  beforeEach(() => {
    cellActivateWrapper = shallowMount(Cell, { props: { statusObj: { isAlive: true}}});
    cellDeactivateWrapper = shallowMount(Cell, { props: { statusObj: { isAlive: false}}});
  });

  describe('props', () => {
    it('Should render with default cell class.', () => {
      const wrapper = shallowMount(Cell, {});
      expect(wrapper.find('.cell').classes()).toEqual(['dead', 'cell']);
    });

    it('Should render with alive cell class when the status of the cell coming from her parent is alive.', () => {
      expect(cellActivateWrapper.find('.cell').classes()).toEqual(['alive', 'cell']);
    });

    it('Should render with dead cell class when the status of the cell coming from her parent is dead.', () => {
      expect(cellDeactivateWrapper.find('.cell').classes()).toEqual(['dead', 'cell']);
    });
  });

  describe('changeCellState', () => {
    it('Should activate a cell when the cell is dead.', () => {
      cellDeactivateWrapper.vm.changeCellState();
      expect(cellDeactivateWrapper.vm.state).toEqual({ isAlive: true });
    });

    it('Should deactivate a cell when the cell is alive.', () => {
      cellActivateWrapper.vm.changeCellState();
      expect(cellActivateWrapper.vm.state).toEqual({ isAlive: false });
    });

    it('Should call changeCellState when the cell is clicked.', () => {
      const changeCellStateSpy = vi.spyOn(cellActivateWrapper.vm, 'changeCellState');

      cellActivateWrapper.find('.cell').trigger('click');
      expect(changeCellStateSpy).toHaveBeenCalledTimes(1);
    });
  });
});
