import { CharacterResponse } from "../interface/character";
import { ClientApi } from "./Axios";

export const Service = {
  async getCharacters(): Promise<CharacterResponse> {
    try {
      const { data } = await ClientApi.get("/search");

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
};
