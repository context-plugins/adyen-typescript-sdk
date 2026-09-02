import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilityProblem1Schema, type CapabilityProblem1 } from "./capability-problem1.js";
import { serviceSchema, type Service } from "./service.js";
import { sourceOfFunds11Schema, type SourceOfFunds11 } from "./source-of-funds11.js";
import { webDataExemption1Schema, type WebDataExemption1 } from "./web-data-exemption1.js";
import { webDataSchema, type WebData } from "./web-data.js";

export type BusinessLine = {
  id: string;
  industryCode: string;
  industryCodeDescription?: string;
  legalEntityId: string;
  problems?: CapabilityProblem1[];
  salesChannels?: string[];
  service: Service;
  sourceOfFunds?: SourceOfFunds11;
  webData?: WebData[];
  webDataExemption?: WebDataExemption1;
};

export const businessLineSchema: Schema<BusinessLine> = s.object<BusinessLine>({
  id: s.string(),
  industryCode: s.string(),
  industryCodeDescription: s.optional(s.string()),
  legalEntityId: s.string(),
  problems: s.optional(s.array(s.lazy(() => capabilityProblem1Schema))),
  salesChannels: s.optional(s.array(s.string())),
  service: serviceSchema,
  sourceOfFunds: s.optional(s.lazy(() => sourceOfFunds11Schema)),
  webData: s.optional(s.array(s.lazy(() => webDataSchema))),
  webDataExemption: s.optional(s.lazy(() => webDataExemption1Schema)),
});
