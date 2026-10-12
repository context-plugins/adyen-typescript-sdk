import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links1Schema, type Links1 } from "./links1.js";
import { nameSchema, type Name } from "./name.js";

export type CompanyUser = {
  /** References to resources connected with this user. */
  links?: Links1;
  /**
   * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups)
   * associated with this user.
   */
  accountGroups?: string[];
  /** Indicates whether this user is active. */
  active?: boolean;
  /** Set of apps available to this user */
  apps?: string[];
  /**
   * The list of [merchant
   * accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) associated with
   * this user.
   */
  associatedMerchantAccounts?: string[];
  /** The email address of the user. */
  email: string;
  /** The unique identifier of the user. */
  id: string;
  /** The user's full name. */
  name?: Name;
  /** The list of [roles](https://docs.adyen.com/account/user-roles) for this user. */
  roles: string[];
  /**
   * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the
   * time zone of the user. For example, **Europe/Amsterdam**.
   */
  timeZoneCode: string;
  /** The username for this user. */
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
