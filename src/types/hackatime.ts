type HackatimeUserStatsResponse = {
  data: {
    username: string;
    user_id: string;
    is_coding_activity_visible: boolean;
    is_other_usage_visible: boolean;
    status: string;
    start: string;
    end: string;
    range: string;
    human_readable_range: string;
    total_seconds: number;
    daily_average: number;
    human_readable_total: string;
    human_readable_daily_average: string;
    languages: LanguageStat[];
  };
};
type LanguageStat = {
  name: string;
  total_seconds: number;
  text: string;
  hours: number;
  minutes: number;
  percent: number;
  digital: string;
};

export type { HackatimeUserStatsResponse, LanguageStat };
