<template>
  <div>
    <div class="game-grid columns">
      <div
        v-for="(col, indexX) in gridList"
        :key="indexX"
        class="game-column">
        <app-cell
          v-for="(isAlive, indexY) in col"
          :key="indexY"
          :status-obj="isAlive"
          :x-pos="indexX"
          :y-pos="indexY"
        />
      </div>
    </div>
    <div class="actions">
      <button class="start-button" @mousedown="doSomething()"> Start </button>
      <button class="reset-button" @mousedown="reset()"> Reset </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Cell from './Cell.vue';
export default defineComponent({
  components: {
    'app-cell': Cell,
  },
  props: {
  },
  setup() {
      const width = 4;
      const height = 4;
      let gridList = ref([] as {isAlive: boolean}[][]);
      return {
        width,
        height,
        gridList,
      }
  },
  created() {
    this.cellCalc();
  },
  methods: {
    cellCalc() {
      for (let i = 0; i < this.width; i++) {
        this.gridList[i] = [];
        for (let j = 0; j < this.height; j++) {
          this.gridList[i][j] = {isAlive: false};
        }
      }
    },
    doSomething() {
      console.log("coucou");
    },
    reset() {
      console.log("reset");
    },
  },
});
</script>

<style>
.game-grid {
  border-top: 1px solid white;
  border-left: 1px solid white;
  display: flex;
  flex: 1;
  justify-content: center;
}
.game-column {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  flex-direction: column;
}

.actions {
  display: flex;
  justify-content: space-around;
}
.start-button, .reset-button {
  margin-top: 10px;
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: #FA8072;
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
              inset -2px -2px 3px rgba(0, 0, 0, .6);
}

.start-button:hover, .reset-button:hover {
    background-color: #E9967A;
}

</style>