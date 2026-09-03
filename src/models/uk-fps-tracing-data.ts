import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UkFpsTracingData = {
  fpid: string;
  type: "ukFps";
};

export const ukFpsTracingDataSchema: Schema<UkFpsTracingData> = s.object<UkFpsTracingData>({
  fpid: s.string(),
  type: s.literal("ukFps"),
});
