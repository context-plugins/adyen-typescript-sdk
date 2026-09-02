import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { ukFpsTracingDataSchema, type UkFpsTracingData } from "../uk-fps-tracing-data.js";
import { usAchTracingDataSchema, type UsAchTracingData } from "../us-ach-tracing-data.js";

export type Tracing = (UsAchTracingData & { type: "usAch" }) | (UkFpsTracingData & { type: "ukFps" });

export const tracingSchema: Schema<Tracing> = s.discriminatedUnion<Tracing>("type", {
  usAch: usAchTracingDataSchema,
  ukFps: ukFpsTracingDataSchema,
});
