import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EstimationTrackingData = {
  estimatedArrivalTime: Date;
  type: "estimation";
};

export const estimationTrackingDataSchema: Schema<EstimationTrackingData> = s.object<EstimationTrackingData>({
  estimatedArrivalTime: s.dateTime(),
  type: s.literal("estimation"),
});
