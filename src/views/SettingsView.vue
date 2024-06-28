<template>
  <div class="settings">
    <TopPage>
      Settings
      <RouterLink to="/"><i class="fa-solid fa-xmark"></i></RouterLink>
    </TopPage>
    <div class="settings__content">
      <DraggableNext class="draggable" :list="cities" @change="onDrag">
        <SettingsItem
          class="settings__drag-item"
          v-for="city in cities"
          :key="city.id"
          :name="city.name"
          :id="city.id"
          :country="city.country"
          :city_user="city.city_user"
          @deleteItem="deleteItem"
        />
      </DraggableNext>
    </div>
    <SettingsInput
      v-model.trim="name"
      @setItem="setItem"
      :disabled="cities.length >= 6"
    ></SettingsInput>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import SettingsItem from '../components/settings/SettingsItem.vue';
import SettingsInput from '../components/settings/SettingsInput.vue';
import TopPage from '../components/TopPage.vue';
import { fetchCity } from '../api/api';
import { ICity } from '../types/types';
import { citiesState } from '../composables/cities';

const cities = citiesState();

const name = ref('');

const setItem = async () => {
  if (name.value) {
    try {
      const response: ICity = await fetchCity(name.value);
      const index = cities?.value.findIndex(
        (el: Pick<ICity, 'id' | 'name' | 'country'>) => el.id === response.id,
      );
      if (index === -1) {
        const obj: Pick<ICity, 'id' | 'name' | 'country'> = {
          id: response.id,
          name: response.name,
          country: response.country,
        };
        if (cities.value.length < 6) {
          cities.value.push(obj);
          localStorage.setItem('cities', JSON.stringify(cities.value));
          name.value = '';
        } else {
          alert('Maximum 6 cities');
        }
      } else {
        alert('The city exists');
      }
    } catch (error) {
      alert('Wrong city name');
    }
  }
};
const deleteItem = (id: number) => {
  if (confirm('Do you want to delete a city?')) {
    cities.value = cities.value.filter((el) => el.id !== id);
    localStorage.setItem('cities', JSON.stringify(cities.value));
  }
};
const onDrag = () => {
  localStorage.setItem('cities', JSON.stringify(cities.value));
};
</script>

<style lang="less" scoped>
.settings {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__content {
    flex: 1 0 auto;

    .settings__drag-item:nth-child(6) {
      border-bottom: none;
    }
  }
}

.input {
  margin-top: auto;
}
</style>
