import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creationResultCodeSchema, type CreationResultCode } from "./creation-result-code.js";

export type TestCardRangeCreationResult = {
  /**
   * The last test card number in the generated test card range.
   *
   * Example: 5432 1234 1234 4321
   */
  cardNumberRangeEnd: string;
  /**
   * The first test card number in the generated test card range.
   *
   * Example: 5432 1234 1234 1234
   */
  cardNumberRangeStart: string;
  /**
   * Notification message. It informs about the outcome of the operation. Possible values:
   * * CREATED
   * * ALREADY_EXISTS
   * * ERROR
   */
  creationResultCode: CreationResultCode;
  /** An optional information message about the result. */
  message?: string;
};

export const testCardRangeCreationResultSchema: Schema<TestCardRangeCreationResult> =
  s.object<TestCardRangeCreationResult>({
    cardNumberRangeEnd: s.string(),
    cardNumberRangeStart: s.string(),
    creationResultCode: creationResultCodeSchema,
    message: s.optional(s.string()),
  });
