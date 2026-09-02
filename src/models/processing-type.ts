import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProcessingType = {
  Billpay: "billpay",
  Ecom: "ecom",
  Pos: "pos",
} as const;
export type ProcessingType = (typeof ProcessingType)[keyof typeof ProcessingType] | (string & {});

export const processingTypeSchema: EnumSchema<ProcessingType> = s.enumOf<ProcessingType>(ProcessingType);
