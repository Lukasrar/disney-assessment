import { CharacterResponse } from "../interface/character";
import { ClientApi } from "./Axios";

export const Service = {
  async getCharacters(): Promise<CharacterResponse> {
    try {
      const { data } = await ClientApi.get("/get-characters");

      return data;
    } catch (error) {
      throw error;
    }
  },
  async getFeaturedCharacters(): Promise<CharacterResponse> {
    try {
      const { data } = await ClientApi.get("/featured-characters");

      return data;
    } catch (error) {
      throw error;
    }
  },
  async getCharacterDetails(characterId: string): Promise<CharacterResponse> {
    try {
      const { data } = await ClientApi.get(`/character-detail/${characterId}`);

      return data;
    } catch (error) {
      throw error;
    }
  },
  async searchCharacters(name: string) {
    const { data } = await ClientApi.get(`/search/${name}`);
    return data;
  },
};
