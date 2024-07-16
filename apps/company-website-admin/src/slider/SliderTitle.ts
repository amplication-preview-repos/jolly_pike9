import { Slider as TSlider } from "../api/slider/Slider";

export const SLIDER_TITLE_FIELD = "title";

export const SliderTitle = (record: TSlider): string => {
  return record.title?.toString() || String(record.id);
};
