import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name22Schema, type Name22 } from "./name22.js";

export type UpdateMerchantUserRequest = {
  accountGroups?: string[];
  active?: boolean;
  email?: string;
  loginMethod?: string;
  name?: Name22;
  roles?: string[];
  timeZoneCode?: string;
};

export const updateMerchantUserRequestSchema: Schema<UpdateMerchantUserRequest> =
  s.object<UpdateMerchantUserRequest>({
    accountGroups: s.optional(s.array(s.string())),
    active: s.optional(s.boolean()),
    email: s.optional(s.string()),
    loginMethod: s.optional(s.string()),
    name: s.optional(s.lazy(() => name22Schema)),
    roles: s.optional(s.array(s.string())),
    timeZoneCode: s.optional(s.string()),
  });
