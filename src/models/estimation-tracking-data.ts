import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type202Schema, type Type202 } from "./type202.js";

export type EstimationTrackingData = {
  estimatedArrivalTime: Date;
  type: Type202;
};

export const estimationTrackingDataSchema: Schema<EstimationTrackingData> = s.object<EstimationTrackingData>({
  estimatedArrivalTime: s.dateTime(),
  type: type202Schema,
});
