import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nonprofitCauseSchema, type NonprofitCause } from "./nonprofit-cause.js";

export type Nonprofit = {
  causes: NonprofitCause[];
  description: string;
  goals: string[];
  id?: string;
  locales: string[];
  logoUrl: string;
  name: string;
  regions: string[];
  termsAndConditionsUrl: string;
  website: string;
};

export const nonprofitSchema: Schema<Nonprofit> = s.object<Nonprofit>({
  causes: s.array(s.lazy(() => nonprofitCauseSchema)),
  description: s.string(),
  goals: s.array(s.string()),
  id: s.optional(s.string()),
  locales: s.array(s.string()),
  logoUrl: s.string(),
  name: s.string(),
  regions: s.array(s.string()),
  termsAndConditionsUrl: s.string(),
  website: s.string(),
});
