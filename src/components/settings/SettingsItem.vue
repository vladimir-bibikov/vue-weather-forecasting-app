<template>
  <div class="setting-item">
    <i class="fa-solid fa-bars setting-item__drag"></i>
    <span class="setting-item__city">{{ name }}, {{ country }}</span>
    <i
      v-if="city_user"
      class="fa-solid fa-trash-can setting-item__desabled"
    ></i>
    <i
      v-else
      class="fa-solid fa-trash-can setting-item__delete"
      @click="deleteItem"
    ></i>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults } from 'vue';

const props = withDefaults(
  defineProps<{
    name: string
    id: number
    country: string
    city_user: boolean
  }>(),
  {
    name: '',
    country: '',
    id: 0,
    city_user: false,
  },
);

const emit = defineEmits<{(e: 'deleteItem', id: number): void
}>();
const deleteItem = () => {
  emit('deleteItem', props.id);
};
</script>

<style lang="less" scoped>
.setting-item {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #eaeaea;
  cursor: grab;

  &__city {
    margin-left: 10px;
  }

  &__delete {
    margin-left: auto;
    cursor: pointer;
    color: var(--orange);
  }
  &__desabled {
    margin-left: auto;
    color: var(--gray-dark);
  }
}

.sortable-ghost {
  background-color: var(--gray);

  .setting-item {
    &__drag {
      display: none;
    }

    &__city {
      display: none;
    }

    &__delete {
      display: none;
    }
  }
}

.sortable-drag {
  background-color: var(--blue);

  .item__drag {
    color: var(--blue);
  }
}
</style>
