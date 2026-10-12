import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { financierSchema, type Financier } from "./financier.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";
import { type74Schema, type Type74 } from "./type74.js";

/**
 * Contains information about the source of your user's funds. Required only if the `service` is
 * **banking** or **issuing**.
 */
export type SourceOfFunds11 = {
  /**
   * Indicates whether the funds are coming from transactions processed by Adyen. If **false**, the
   * `type` is required.
   */
  adyenProcessedFunds: boolean;
  /**
   * Required if `type` is **business**, **assetSale**, **gamblingWinnings** or **inheritance**.
   *
   * For `type` **business**, provide the annual turn over of the business. For `type`
   * **assetSale**, **gamblingWinnings** or **inheritance**, provide the amount of the funds.
   */
  amount?: PatchableAmountDto;
  /**
   * The number of months that the asset has been in possession of the user.
   *
   * For example, if the source of funds is of type **cryptocurrencyIncome** then `assetMonthsHeld`
   * is the number of months the user has owned the cryptocurrency.
   */
  assetMonthsHeld?: number;
  /**
   * Required if `type` is **cryptocurrencyIncome**. The cryptocurrency exchange where the funds
   * were acquired.
   */
  cryptocurrencyExchange?: string;
  /**
   * Required if `type` is **donations** or **inheritance**. The date the funds were received, in
   * YYYY-MM-DD format.
   */
  dateOfFundsReceived?: string;
  /**
   * Required if `type` is **assetSale** or **gamblingWinnings**. The date the funds were received,
   * in YYYY-MM-DD format.
   *
   * For example, if the source of funds is of type **assetSale**, the dateOfSourceEvent is the date
   * of the sale. If the source of funds is of type **gamblingWinnings**, the dateOfSourceEvent is
   * the date of winnings.
   */
  dateOfSourceEvent?: string;
  /**
   * Required if `type` is **business** or **assetSale**. A description for the source of funds.
   *
   * For example, for `type` **business**, provide a description of where the business transactions
   * come from, such as payments through bank transfer. For `type` **assetSale**, provide a
   * description of the asset. For example, the address of a residential property if it is a
   * property sale.
   */
  description?: string;
  /** Required if `type` is **thirdPartyFunding**. Information about the financiers. */
  financiers?: Financier[];
  /**
   * Required if `type` is **donations** or **inheritance**. The legal entity ID representing the
   * originator of the source of funds.
   *
   * For example, if the source of funds is **inheritance**, then `originatorOfFundsReference`
   * should be the legal entity reference of the benefactor.
   */
  originatorLegalEntityId?: string;
  /** Required if `type` is **donations**. The reason for receiving the funds. */
  purpose?: string;
  /**
   * Required if `type` is **donations** or **inheritance**. The relationship of the originator of
   * the funds to the recipient.
   */
  relationship?: string;
  /**
   * The type of the source of funds.
   *
   *
   *
   * Possible values:
   * * **business**
   * * **employment**
   * * **donations**
   * * **inheritance**
   * * **financialAid**
   * * **rentalIncome**
   * * **dividendIncome**
   * * **royaltyIncome**
   * * **thirdPartyFunding**
   * * **pensionIncome**
   * * **insuranceSettlement**
   * * **cryptocurrencyIncome**
   * * **assetSale**
   * * **loans**
   * * **gamblingWinnings**
   */
  type?: Type74;
  /**
   * Required if `type` is **gamblingWinnings**. The location of the gambling site for the winnings.
   *
   * For example, if the source of funds is online gambling, provide the website of the gambling
   * company.
   */
  website?: string;
};

export const sourceOfFunds11Schema: Schema<SourceOfFunds11> = s.object<SourceOfFunds11>({
  adyenProcessedFunds: s.boolean(),
  amount: s.optional(s.lazy(() => patchableAmountDtoSchema)),
  assetMonthsHeld: s.optional(s.int()),
  cryptocurrencyExchange: s.optional(s.string()),
  dateOfFundsReceived: s.optional(s.dateOnly()),
  dateOfSourceEvent: s.optional(s.dateOnly()),
  description: s.optional(s.string()),
  financiers: s.optional(s.array(s.lazy(() => financierSchema))),
  originatorLegalEntityId: s.optional(s.string()),
  purpose: s.optional(s.string()),
  relationship: s.optional(s.string()),
  type: s.optional(s.lazy(() => type74Schema)),
  website: s.optional(s.string()),
});
