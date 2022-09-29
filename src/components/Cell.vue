<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="isAlive.isAlive ? 'alive' : 'dead'"
    class="cell"
    @mousedown="reborn()"
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
    let isAlive = reactive(props.statusObj)
    return {
      isAlive
    }
  },
  methods: {
    reborn: function() {
      this.isAlive.isAlive = !this.isAlive.isAlive;
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