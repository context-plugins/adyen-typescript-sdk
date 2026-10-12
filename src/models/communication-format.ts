import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Format or protocol for receiving webhooks. Possible values:
 * * **soap**
 * * **http**
 * * **json**
 */
export const CommunicationFormat = {
  Http: "http",
  Json: "json",
  Soap: "soap",
} as const;
export type CommunicationFormat =
  | (typeof CommunicationFormat)[keyof typeof CommunicationFormat]
  | (string & {});

export const communicationFormatSchema: EnumSchema<CommunicationFormat> =
  s.enumOf<CommunicationFormat>(CommunicationFormat);
