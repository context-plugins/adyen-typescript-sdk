import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UkFpsTracingData = {
  /**
   * The FPS trace number. This is a unique identifier assigned to transfers processed by
   * [FPS](https://www.bankofengland.co.uk/payment-systems/services/faster-payments-service).
   */
  fpid: string;
  /** **ukFps** @default "ukFps" */
  type?: "ukFps";
};

export const ukFpsTracingDataSchema: Schema<UkFpsTracingData> = s.object<UkFpsTracingData>({
  fpid: s.string(),
  type: s.defaulted(s.literal("ukFps"), "ukFps"),
});
