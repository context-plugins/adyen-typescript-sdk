import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { confidenceScoreSchema, type ConfidenceScore } from "./confidence-score.js";
import { screenDimensionsSchema, type ScreenDimensions } from "./screen-dimensions.js";

export type PixPayByBankRiskSignals = {
  confidenceScore?: ConfidenceScore;
  elapsedTimeSinceBoot?: number;
  isRootedDevice?: boolean;
  language?: string;
  osVersion?: string;
  screenBrightness?: number;
  screenDimensions?: ScreenDimensions;
  userTimeZoneOffset?: number;
};

export const pixPayByBankRiskSignalsSchema: Schema<PixPayByBankRiskSignals> =
  s.object<PixPayByBankRiskSignals>({
    confidenceScore: s.optional(s.lazy(() => confidenceScoreSchema)),
    elapsedTimeSinceBoot: s.optional(s.number()),
    isRootedDevice: s.optional(s.boolean()),
    language: s.optional(s.string()),
    osVersion: s.optional(s.string()),
    screenBrightness: s.optional(s.number()),
    screenDimensions: s.optional(s.lazy(() => screenDimensionsSchema)),
    userTimeZoneOffset: s.optional(s.number()),
  });
