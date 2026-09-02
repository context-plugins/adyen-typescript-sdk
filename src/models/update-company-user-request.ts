import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name22Schema, type Name22 } from "./name22.js";

export type UpdateCompanyUserRequest = {
  accountGroups?: string[];
  active?: boolean;
  associatedMerchantAccounts?: string[];
  email?: string;
  loginMethod?: string;
  name?: Name22;
  roles?: string[];
  timeZoneCode?: string;
};

export const updateCompanyUserRequestSchema: Schema<UpdateCompanyUserRequest> =
  s.object<UpdateCompanyUserRequest>({
    accountGroups: s.optional(s.array(s.string())),
    active: s.optional(s.boolean()),
    associatedMerchantAccounts: s.optional(s.array(s.string())),
    email: s.optional(s.string()),
    loginMethod: s.optional(s.string()),
    name: s.optional(s.lazy(() => name22Schema)),
    roles: s.optional(s.array(s.string())),
    timeZoneCode: s.optional(s.string()),
  });
