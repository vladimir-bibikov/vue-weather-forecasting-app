<template>
  <div class="home">
    <TopPage>
      Weather Forecasting
      <RouterLink to="/settings"><i class="fa-solid fa-gear"></i></RouterLink>
    </TopPage>
    <div class="home__content">
      <Loader v-if="!data.length" />
      <WeatherItem :data="data" v-else></WeatherItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { fetchCity, userCity } from '../api/api';
import { ICity } from '../types/types';
import { citiesState } from '../composables/cities';
import WeatherItem from '../components/WeatherItem.vue';
import TopPage from '../components/TopPage.vue';
import Loader from '../components/Loader.vue';

const cities = citiesState();
const data = ref([] as Array<ICity>);

const getCity = async (name: string) => {
  try {
    const response: ICity = await fetchCity(name);
    const obj: Pick<ICity, 'id' | 'name' | 'country' | 'city_user'> = {
      id: response.id,
      name: response.name,
      country: response.country,
      city_user: true,
    };
    const cityUser: Pick<ICity, 'id' | 'name' | 'country' | 'city_user'> = obj;
    if (!cities.value.length) {
      const response: ICity = await fetchCity(cityUser.name as string);
      response.city_user = true;
      data.value.push(response);
      localStorage.setItem('cities', JSON.stringify([cityUser]));
    } else {
      const index = cities.value.findIndex((el) => 'city_user' in el);
      if (index !== -1) {
        cities.value.splice(index, 1, cityUser);
      }
      for (const el of cities.value) {
        const promises = [];
        const response: ICity = await fetchCity(el.name as string);
        promises.push(response);
        Promise.all(promises)
          .then((res) => {
            for (const item of res) {
              data.value.push(item);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getWeather = async () => {
  try {
    const name = await userCity();
    getCity(name);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => getWeather());
</script>
<style lang="less" scoped>
.home {
  &__content {
    height: 357px;
    overflow: auto;
  }
}
</style>
