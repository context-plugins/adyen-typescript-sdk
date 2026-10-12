import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name22Schema, type Name22 } from "./name22.js";

export type UpdateCompanyUserRequest = {
  /**
   * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups)
   * associated with this user.
   */
  accountGroups?: string[];
  /** Indicates whether this user is active. */
  active?: boolean;
  /**
   * The list of [merchant
   * accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) to associate the
   * user with.
   */
  associatedMerchantAccounts?: string[];
  /** The email address of the user. */
  email?: string;
  /**
   * The requested login method for the user. To use SSO, you must already have SSO configured with
   * Adyen before creating the user.
   *
   * Possible values: **Email** or **SSO**
   */
  loginMethod?: string;
  /** The user's full name. */
  name?: Name22;
  /** The list of [roles](https://docs.adyen.com/account/user-roles) for this user. */
  roles?: string[];
  /**
   * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the
   * time zone of the user. For example, **Europe/Amsterdam**.
   */
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
