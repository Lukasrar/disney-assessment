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
};
