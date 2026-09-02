import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
