import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountHolderDetails4Schema, type AccountHolderDetails4 } from "./account-holder-details4.js";
import { legalEntitySchema, type LegalEntity } from "./legal-entity.js";

export type UpdateAccountHolderRequest = {
  /** The code of the Account Holder to be updated. */
  accountHolderCode: string;
  /**
   * The details to which the Account Holder should be updated.
   *
   * Required if a processingTier is not provided.
   */
  accountHolderDetails?: AccountHolderDetails4;
  /**
   * A description of the account holder, maximum 256 characters. You can use alphanumeric
   * characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
   */
  description?: string;
  /**
   * The legal entity type of the account holder. This determines the information that should be
   * provided in the request.
   *
   * Possible values: **Business**, **Individual**, or **NonProfit**.
   *
   * * If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be
   *   provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders`
   *   list.
   *
   * * If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.
   */
  legalEntity?: LegalEntity;
  /**
   * The primary three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder
   * should be updated.
   *
   * @deprecated
   */
  primaryCurrency?: string;
  /**
   * The processing tier to which the Account Holder should be updated. >The processing tier can not
   * be lowered through this request.
   *
   * >Required if accountHolderDetails are not provided.
   */
  processingTier?: number;
  /** The identifier of the profile that applies to this entity. */
  verificationProfile?: string;
};

export const updateAccountHolderRequestSchema: Schema<UpdateAccountHolderRequest> =
  s.object<UpdateAccountHolderRequest>({
    accountHolderCode: s.string(),
    accountHolderDetails: s.optional(s.lazy(() => accountHolderDetails4Schema)),
    description: s.optional(s.string()),
    legalEntity: s.optional(s.lazy(() => legalEntitySchema)),
    primaryCurrency: s.optional(s.string()),
    processingTier: s.optional(s.int()),
    verificationProfile: s.optional(s.string()),
  });
