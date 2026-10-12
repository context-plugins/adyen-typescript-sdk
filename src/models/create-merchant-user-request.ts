import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type CreateMerchantUserRequest = {
  /**
   * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups)
   * associated with this user.
   */
  accountGroups?: string[];
  /** The email address of the user. */
  email: string;
  /**
   * The requested login method for the user. To use SSO, you must already have SSO configured with
   * Adyen before creating the user.
   *
   * Possible values: **Email** or **SSO**
   */
  loginMethod?: string;
  /**
   * The user's full name.
   *
   * Allowed length: 1—80 characters.
   */
  name: Name;
  /** The list of [roles](https://docs.adyen.com/account/user-roles) for this user. */
  roles?: string[];
  /**
   * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the
   * time zone of the user. For example, **Europe/Amsterdam**.
   */
  timeZoneCode?: string;
  /**
   * The user's email address that will be their username. Must be the same as the one in the
   * `email` field.
   */
  username: string;
};

export const createMerchantUserRequestSchema: Schema<CreateMerchantUserRequest> =
  s.object<CreateMerchantUserRequest>({
    accountGroups: s.optional(s.array(s.string())),
    email: s.string(),
    loginMethod: s.optional(s.string()),
    name: nameSchema,
    roles: s.optional(s.array(s.string())),
    timeZoneCode: s.optional(s.string()),
    username: s.string(),
  });
