import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { ukFpsTracingDataSchema, type UkFpsTracingData } from "../uk-fps-tracing-data.js";
import { usAchTracingDataSchema, type UsAchTracingData } from "../us-ach-tracing-data.js";

/** Additional tracing information for the tracing event. */
export type TracingData = (UsAchTracingData & { type: "usAch" }) | (UkFpsTracingData & { type: "ukFps" });

export const tracingDataSchema: Schema<TracingData> = s.discriminatedUnion<TracingData>("type", {
  usAch: usAchTracingDataSchema,
  ukFps: ukFpsTracingDataSchema,
});
