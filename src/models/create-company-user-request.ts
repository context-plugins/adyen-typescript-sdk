import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type CreateCompanyUserRequest = {
  accountGroups?: string[];
  associatedMerchantAccounts?: string[];
  email: string;
  loginMethod?: string;
  name: Name;
  roles?: string[];
  timeZoneCode?: string;
  username: string;
};

export const createCompanyUserRequestSchema: Schema<CreateCompanyUserRequest> =
  s.object<CreateCompanyUserRequest>({
    accountGroups: s.optional(s.array(s.string())),
    associatedMerchantAccounts: s.optional(s.array(s.string())),
    email: s.string(),
    loginMethod: s.optional(s.string()),
    name: nameSchema,
    roles: s.optional(s.array(s.string())),
    timeZoneCode: s.optional(s.string()),
    username: s.string(),
  });
