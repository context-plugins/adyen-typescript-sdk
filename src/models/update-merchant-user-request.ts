import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { name22Schema, type Name22 } from "./name22.js";

export type UpdateMerchantUserRequest = {
  /**
   * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups)
   * associated with this user.
   */
  accountGroups?: string[];
  /** Sets the status of the user to active (**true**) or inactive (**false**). */
  active?: boolean;
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
