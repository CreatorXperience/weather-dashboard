export type TOpenApiResponse = {
  current: {
    cloud: number;
    condition: {
      text: string;
    };
    isday: number;
    temp_c: number;
  };
  location: {
    name: string;
    region: string;
    tz_id: string;
  };
  forecast: {
    forecastday: {
      date: string;
    }[];
  };
};
