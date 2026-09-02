import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourceOfFunds11Schema, type SourceOfFunds11 } from "./source-of-funds11.js";
import { webDataExemption1Schema, type WebDataExemption1 } from "./web-data-exemption1.js";
import { webDataSchema, type WebData } from "./web-data.js";

export type BusinessLineInfoUpdate = {
  industryCode?: string;
  industryCodeDescription?: string;
  salesChannels?: string[];
  sourceOfFunds?: SourceOfFunds11;
  webData?: WebData[];
  webDataExemption?: WebDataExemption1;
};

export const businessLineInfoUpdateSchema: Schema<BusinessLineInfoUpdate> = s.object<BusinessLineInfoUpdate>({
  industryCode: s.optional(s.string()),
  industryCodeDescription: s.optional(s.string()),
  salesChannels: s.optional(s.array(s.string())),
  sourceOfFunds: s.optional(s.lazy(() => sourceOfFunds11Schema)),
  webData: s.optional(s.array(s.lazy(() => webDataSchema))),
  webDataExemption: s.optional(s.lazy(() => webDataExemption1Schema)),
});
