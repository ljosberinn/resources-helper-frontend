import { IUseStoreon } from './store';

export const API = {
  getMines: async ({ dispatch }: IUseStoreon) => {
    const mines = await API.get('/mines');
    dispatch('mines/get', mines);
  },
  getFactories: async ({ dispatch }: IUseStoreon) => {
    const factories = await API.get('/factories');
    dispatch('factories/get', factories);
  },
  getSpecialBuildings: async ({ dispatch }: IUseStoreon) => {
    const specialBuildings = await API.get('/specialBuildings');
    dispatch('specialBuildings/get', specialBuildings);
  },
  get: async (path: string) => {
    const response = await fetch(`/api${path}`);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    return json;
  },
};
