import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Name of the person., The shopper's full name., the name of the person, The name of the shopper.,
 * The shopper's full name., The shopper's name.
 *
 * When the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.,
 * The shopper's name.
 *
 * In case the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.
 *
 * > This field is required to update the existing `shopperName` associated with a recurring
 * contract., Name of the person., The user's full name.
 *
 * Allowed length: 1—80 characters., The user's full name., The name of the contact.
 */
export type Name = {
  /** The first name. */
  firstName: string;
  /** The last name. */
  lastName: string;
};

export const nameSchema: Schema<Name> = s.object<Name>({
  firstName: s.string(),
  lastName: s.string(),
});
