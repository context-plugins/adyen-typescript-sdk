import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type181Schema, type Type181 } from "./type181.js";

/** The type and ID of the resource about whose balance changes you want to be notified. */
export type Target1 = {
  /**
   * The unique identifier of the `target.type`. This can be the ID of your:
   *
   * * balance platform
   * * account holder
   * * account holder's balance account
   */
  id: string;
  /**
   * The resource for which you want to receive notifications. Possible values:
   *
   * * **balancePlatform**: receive notifications about balance changes in your entire balance
   *   platform.
   *
   * * **accountHolder**: receive notifications about balance changes of a specific user.
   *
   * * **balanceAccount**: receive notifications about balance changes in a specific balance
   *   account.
   */
  type: Type181;
};

export const target1Schema: Schema<Target1> = s.object<Target1>({
  id: s.string(),
  type: type181Schema,
});
