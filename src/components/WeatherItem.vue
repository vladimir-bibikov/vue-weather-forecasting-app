<template>
  <div v-if="data">
    <div class="weather-item" v-for="item in data" :key="item.id">
      <h3 class="weather-item__name">{{ item.name }}, {{ item.country }}</h3>
      <div class="weather-item__сontent-temp">
        <img
          class="weather-item__img"
          :src="`http://openweathermap.org/img/wn/${item.icon}.png`"
          alt=""
        />
        <span class="weather-item__temp">{{ temp(item.temp) }}&deg;C</span>
      </div>
      <div class="weather-item__content">
        <div class="content__item content__item_recede">
          <span class="weather-item__feels"
            >Feels like: {{ temp(item.feels_like) }}&deg;c</span
          >
          <span class="weather-item__clouds">{{
            capitalised(item.clouds)
          }}</span>
        </div>
        <div class="content__item content__item_line">
          <span class="weather-item__wind">
            <i class="fa-solid fa-location-arrow"></i>
            {{ item.wind }}
            m/s</span
          >
          <span class="weather-item__pressure"
            ><i class="fa-solid fa-weight-hanging"></i
            >{{ item.pressure }} hPa</span
          >
        </div>
        <div class="content__item content__item_line">
          <span class="weather-item__humidity"
            ><i class="fa-solid fa-droplet"></i> {{ item.humidity }} %</span
          >
          <span class="weather-item__visibility"
            ><i class="fa-solid fa-binoculars"></i>
            {{ visibility(item.visibility) }} km</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { ICity } from '../types/types';

defineProps<{
  data: Array<ICity>
}>();

const temp = (data: number) => Math.round(data - 273);
const capitalised = (str: string) => str[0].toUpperCase() + str.slice(1);
const visibility = (data: number) => Math.round(data / 1000);
</script>

<style lang="less" scoped>
.weather-item {
  height: 357px;
  padding: 35px 0 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--gray-border);
  &__date {
    margin-bottom: 20px;
    text-align: center;
  }

  &__name {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: var(--orange);
  }

  &__сontent-temp {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  &__content {
    margin-top: auto;
  }

  &__temp {
    font-size: 50px;
    margin-left: 10px;
    font-weight: bold;
  }

  &__feels {
    font-weight: bold;
  }

  &__clouds {
    font-weight: bold;
  }

  &__wind {
    border-right: 1px solid var(--gray-border);
  }

  &__humidity {
    border-right: 1px solid var(--gray-border);
  }
}

.content {
  &__item {
    font-size: 18px;
    display: flex;
    justify-content: space-around;
  }

  &__item_recede {
    margin-bottom: 10px;
  }

  &__item_line {
    border-top: 1px solid var(--gray-border);

    span {
      display: block;
      padding: 17px 0;
      width: 50%;
      margin-left: 45px;
    }
  }
}

.fa-solid {
  color: var(--blue);
}
</style>
