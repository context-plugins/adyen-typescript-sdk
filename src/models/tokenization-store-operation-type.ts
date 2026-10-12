import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operation performed on the token. Possible values:
 *
 * * **created**: the token has been created.
 * * **updated**: the existing token has been updated.
 * * **alreadyExisting**: the details have already been stored.
 */
export const TokenizationStoreOperationType = {
  Created: "created",
  Updated: "updated",
  AlreadyExisting: "alreadyExisting",
} as const;
export type TokenizationStoreOperationType =
  | (typeof TokenizationStoreOperationType)[keyof typeof TokenizationStoreOperationType]
  | (string & {});

export const tokenizationStoreOperationTypeSchema: EnumSchema<TokenizationStoreOperationType> =
  s.enumOf<TokenizationStoreOperationType>(TokenizationStoreOperationType);
