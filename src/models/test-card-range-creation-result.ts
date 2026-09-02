import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creationResultCodeSchema, type CreationResultCode } from "./creation-result-code.js";

export type TestCardRangeCreationResult = {
  cardNumberRangeEnd: string;
  cardNumberRangeStart: string;
  creationResultCode: CreationResultCode;
  message?: string;
};

export const testCardRangeCreationResultSchema: Schema<TestCardRangeCreationResult> =
  s.object<TestCardRangeCreationResult>({
    cardNumberRangeEnd: s.string(),
    cardNumberRangeStart: s.string(),
    creationResultCode: creationResultCodeSchema,
    message: s.optional(s.string()),
  });
