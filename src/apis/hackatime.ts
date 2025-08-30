import axios, { type AxiosInstance } from "axios";
import { format, subDays } from "date-fns";
import type { HackatimeUserStatsResponse } from "../types/hackatime.js";

export class HackatimeAPI {
  private apiKey: string;
  private baseUrl: string;
  private apiClient: AxiosInstance;

  constructor(
    apiKey: string,
    baseUrl: string = "https://hackatime.hackclub.com/api/v1"
  ) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.apiClient = axios.create({
      baseURL: this.baseUrl,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
      withCredentials: true,
    });
  }
  async getUserLast7DaysStats() {
    try {
      const endDate = format(new Date(), "yyyy-MM-dd");
      const startDate = format(subDays(new Date(), 7), "yyyy-MM-dd");
      const { data } = await this.apiClient.get<HackatimeUserStatsResponse>(
        `/users/my/stats?start_date=${startDate}&end_date=${endDate}&feature=languages`
      );

      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          `Failed to fetch Hackatime stats: ${error.response?.status} ${error.response?.statusText}`
        );
      }
      throw new Error(`Failed to fetch Hackatime stats: ${error}`);
    }
  }
}
