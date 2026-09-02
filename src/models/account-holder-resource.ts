import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountHolderResource = {
  type?: string;
  accountHolderId: string;
};

export const accountHolderResourceSchema: Schema<AccountHolderResource> = s.object<AccountHolderResource>({
  type: s.optional(s.string()),
  accountHolderId: s.string(),
});
