import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** All Of Resource, AccountHolderResource. */
export type AccountHolderResource = {
  type?: string;
  /**
   * The unique identifier of the resource connected to the component. For [Platform Experience
   * components](https://docs.adyen.com/platforms/build-user-dashboards), this is the account holder
   * linked to the balance account shown in the component.
   */
  accountHolderId: string;
};

export const accountHolderResourceSchema: Schema<AccountHolderResource> = s.object<AccountHolderResource>({
  type: s.optional(s.string()),
  accountHolderId: s.string(),
});
