import { ref } from 'vue';
import { ICity } from '../types/types';

export function citiesState() {
  const data = ref(
    localStorage.getItem('cities')
      ? (JSON.parse(localStorage.getItem('cities') as string) as Array<
          Pick<ICity, 'id' | 'name' | 'country' | 'city_user'>
        >)
      : ([] as Array<Pick<ICity, 'id' | 'name' | 'country' | 'city_user'>>),
  );
  return data;
}
