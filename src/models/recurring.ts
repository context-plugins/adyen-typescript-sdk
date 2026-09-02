import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contractSchema, type Contract } from "./contract.js";
import { tokenServiceSchema, type TokenService } from "./token-service.js";

export type Recurring = {
  contract?: Contract;
  recurringDetailName?: string;
  recurringExpiry?: Date;
  recurringFrequency?: string;
  tokenService?: TokenService;
};

export const recurringSchema: Schema<Recurring> = s.object<Recurring>({
  contract: s.optional(s.lazy(() => contractSchema)),
  recurringDetailName: s.optional(s.string()),
  recurringExpiry: s.optional(s.dateTime()),
  recurringFrequency: s.optional(s.string()),
  tokenService: s.optional(s.lazy(() => tokenServiceSchema)),
});
