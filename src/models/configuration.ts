import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";

export type Configuration = {
  brand: string;
  commercial?: boolean;
  country?: string[];
  currencies: Currency[];
  sources?: string[];
};

export const configurationSchema: Schema<Configuration> = s.object<Configuration>({
  brand: s.string(),
  commercial: s.optional(s.boolean()),
  country: s.optional(s.array(s.string())),
  currencies: s.array(s.lazy(() => currencySchema)),
  sources: s.optional(s.array(s.string())),
});
