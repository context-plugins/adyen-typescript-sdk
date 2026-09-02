import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links1Schema, type Links1 } from "./links1.js";
import { nameSchema, type Name } from "./name.js";

export type CompanyUser = {
  links?: Links1;
  accountGroups?: string[];
  active?: boolean;
  apps?: string[];
  associatedMerchantAccounts?: string[];
  email: string;
  id: string;
  name?: Name;
  roles: string[];
  timeZoneCode: string;
  username: string;
};

export const companyUserSchema: Schema<CompanyUser> = s.object<CompanyUser>({
  links: s.optional(s.lazy(() => links1Schema)),
  accountGroups: s.optional(s.array(s.string())),
  active: s.optional(s.boolean()),
  apps: s.optional(s.array(s.string())),
  associatedMerchantAccounts: s.optional(s.array(s.string())),
  email: s.string(),
  id: s.string(),
  name: s.optional(s.lazy(() => nameSchema)),
  roles: s.array(s.string()),
  timeZoneCode: s.string(),
  username: s.string(),
  _keysMap: {
    links: "_links",
  },
});
