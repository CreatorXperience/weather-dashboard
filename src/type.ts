export type TOpenApiResponse = {
  current: {
    cloud: number;
    condition: {
      text: string;
    };
    isday: number;
    temp_c: number;
    feelslike_c: number;
  };

  location: {
    name: string;
    region: string;
    tz_id: string;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        avgtemp_c: number;
        avghumidity: number;
        condition: {
          text: string;
        };
      };
    }[];
  };
};

export type TProp = {
  data: TOpenApiResponse | null;
};
