import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**,
 * **SOCIALSECURITY**, **VISA**.
 *
 * To delete an existing entry for a document `type`, send only the `type` field in your request.
 */
export const Type15 = {
  Drivinglicense: "DRIVINGLICENSE",
  Id: "ID",
  Passport: "PASSPORT",
  Socialsecurity: "SOCIALSECURITY",
  Visa: "VISA",
} as const;
export type Type15 = (typeof Type15)[keyof typeof Type15] | (string & {});

export const type15Schema: EnumSchema<Type15> = s.enumOf<Type15>(Type15);
