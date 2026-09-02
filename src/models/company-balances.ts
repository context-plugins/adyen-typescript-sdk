import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantBalanceSchema, type MerchantBalance } from "./merchant-balance.js";

export type CompanyBalances = {
  merchantBalancesOverview?: MerchantBalance[];
};

export const companyBalancesSchema: Schema<CompanyBalances> = s.object<CompanyBalances>({
  merchantBalancesOverview: s.optional(s.array(s.lazy(() => merchantBalanceSchema))),
});
