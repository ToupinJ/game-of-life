<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="state.isAlive ? 'alive' : 'dead'"
    class="cell"
    @click="changeCellState()"
    />
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  props: {
    statusObj: {
      type: Object,
      default: () => ({
        isAlive: false
      })
    },
  },
  setup(props) {
    let state = reactive(props.statusObj)
    return {
      state
    }
  },
  methods: {
    changeCellState() {
      this.state.isAlive = !this.state.isAlive;
    },
  },
});
</script>

<style>
.cell {
  flex: 1;
  user-select: none;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  padding-bottom: 100%;
}
.cell:hover {
  background-color: rgba(132, 26, 26, 0.6);
}
.alive {
  background-color: #FA8072 !important;
}
</style>