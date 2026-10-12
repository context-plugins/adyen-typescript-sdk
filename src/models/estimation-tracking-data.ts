import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EstimationTrackingData = {
  /** The estimated time the beneficiary should have access to the funds. */
  estimatedArrivalTime: Date;
  /**
   * The type of tracking event.
   *
   * Possible values:
   *
   * - **estimation**: the estimated date and time of when the funds will be credited has been
   *   determined.
   *
   * @default "estimation"
   */
  type?: "estimation";
};

export const estimationTrackingDataSchema: Schema<EstimationTrackingData> = s.object<EstimationTrackingData>({
  estimatedArrivalTime: s.dateTime(),
  type: s.defaulted(s.literal("estimation"), "estimation"),
});
