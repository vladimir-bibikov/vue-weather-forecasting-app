<template>
  <div class="input">
    <input
      type="text"
      class="input__field"
      placeholder="Enter city name"
      :value="modelValue"
      @input="handleInputChange"
      :disabled="disabled"
    />
    <button class="input__btn" :disabled="modelValue === ''" @click="setItem">
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

defineProps<{
  modelValue: string
  disabled: boolean
}>();

const emit = defineEmits<{(e: 'update:modelValue', value: string): void
  (e: 'setItem'): void
}>();

const handleInputChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};

const setItem = () => {
  console.log('fdgdfg');
  emit('setItem');
};
</script>

<style lang="less" scoped>
.input {
  display: flex;
  align-items: center;

  &__field {
    height: 57px;
    padding-left: 5px;
    border: none;
    border-top: 1px solid var(--gray-border);
    width: 100%;
    font-size: 18px;
    border-bottom-left-radius: 5px;

    &:focus {
      background-color: var(--gray);
    }

    outline: none;
  }

  &__btn {
    height: 57px;
    width: 60px;
    border: none;
    border-top: 1px solid var(--gray-border);
    border-left: 1px solid var(--gray-border);
    background-color: var(--white);
    color: var(--blue);
    font-size: 20px;
    cursor: pointer;
    border-bottom-right-radius: 5px;
  }
}

::-webkit-input-placeholder {
  color: var(--gray-border);
}

::-moz-placeholder {
  color: var(--gray-border);
}

:-moz-placeholder {
  color: var(--gray-border);
}

:-ms-input-placeholder {
  color: var(--gray-border);
}
</style>
