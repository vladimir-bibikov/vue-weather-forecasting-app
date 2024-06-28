<template>
  <div class="top__page">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.top__page::v-deep {
  padding: 0 10px;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-border);
  font-size: 20px;
  color: var(--blue);

  a {
    color: var(--blue);
  }

  i {
    cursor: pointer;
  }
}
</style>
