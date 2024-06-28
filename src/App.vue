<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script lang="ts"></script>
<style lang="less" scoped>
.app {
  width: 80vw;
  margin: 50px auto;
  border: 1px solid #eaeaea;
  background-color: var(--white);
  color: #000;
  border-radius: 5px;
  overflow: hidden;
  height: 415px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--blue);
    height: 50px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-border);
  }
}
</style>
