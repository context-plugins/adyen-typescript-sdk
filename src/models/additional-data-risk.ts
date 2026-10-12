import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataRisk = {
  /**
   * The data for your custom risk field. For more information, refer to [Create custom risk
   * fields](https://docs.adyen.com/risk-management/configure-custom-risk-rules#step-1-create-custom-risk-fields).
   */
  riskdataCustomFieldName?: string;
  /**
   * The price of item in the basket, represented in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  riskdataBasketItemItemNrAmountPerItem?: string;
  /** Brand of the item. */
  riskdataBasketItemItemNrBrand?: string;
  /** Category of the item. */
  riskdataBasketItemItemNrCategory?: string;
  /** Color of the item. */
  riskdataBasketItemItemNrColor?: string;
  /** The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217). */
  riskdataBasketItemItemNrCurrency?: string;
  /** ID of the item. */
  riskdataBasketItemItemNrItemId?: string;
  /** Manufacturer of the item. */
  riskdataBasketItemItemNrManufacturer?: string;
  /** A text description of the product the invoice line refers to. */
  riskdataBasketItemItemNrProductTitle?: string;
  /** Quantity of the item purchased. */
  riskdataBasketItemItemNrQuantity?: string;
  /** Email associated with the given product in the basket (usually in electronic gift cards). */
  riskdataBasketItemItemNrReceiverEmail?: string;
  /** Size of the item. */
  riskdataBasketItemItemNrSize?: string;
  /** [Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit). */
  riskdataBasketItemItemNrSku?: string;
  /** [Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code). */
  riskdataBasketItemItemNrUpc?: string;
  /** Code of the promotion. */
  riskdataPromotionsPromotionItemNrPromotionCode?: string;
  /**
   * The discount amount of the promotion, represented in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  riskdataPromotionsPromotionItemNrPromotionDiscountAmount?: string;
  /** The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217). */
  riskdataPromotionsPromotionItemNrPromotionDiscountCurrency?: string;
  /**
   * Promotion's percentage discount. It is represented in percentage value and there is no need to
   * include the '%' sign.
   *
   * e.g. for a promotion discount of 30%, the value of the field should be 30.
   */
  riskdataPromotionsPromotionItemNrPromotionDiscountPercentage?: string;
  /** Name of the promotion. */
  riskdataPromotionsPromotionItemNrPromotionName?: string;
  /**
   * Reference number of the risk profile that you want to apply to the payment. If not provided or
   * left blank, the merchant-level account's default risk profile will be applied to the payment.
   * For more information, see [dynamically assign a risk profile to a
   * payment](https://docs.adyen.com/risk-management/create-and-use-risk-profiles#dynamically-assign-a-risk-profile-to-a-payment).
   */
  riskdataRiskProfileReference?: string;
  /**
   * If this parameter is provided with the value **true**, risk checks for the payment request are
   * skipped and the transaction will not get a risk score.
   */
  riskdataSkipRisk?: string;
};

export const additionalDataRiskSchema: Schema<AdditionalDataRisk> = s.object<AdditionalDataRisk>({
  riskdataCustomFieldName: s.optional(s.string()),
  riskdataBasketItemItemNrAmountPerItem: s.optional(s.string()),
  riskdataBasketItemItemNrBrand: s.optional(s.string()),
  riskdataBasketItemItemNrCategory: s.optional(s.string()),
  riskdataBasketItemItemNrColor: s.optional(s.string()),
  riskdataBasketItemItemNrCurrency: s.optional(s.string()),
  riskdataBasketItemItemNrItemId: s.optional(s.string()),
  riskdataBasketItemItemNrManufacturer: s.optional(s.string()),
  riskdataBasketItemItemNrProductTitle: s.optional(s.string()),
  riskdataBasketItemItemNrQuantity: s.optional(s.string()),
  riskdataBasketItemItemNrReceiverEmail: s.optional(s.string()),
  riskdataBasketItemItemNrSize: s.optional(s.string()),
  riskdataBasketItemItemNrSku: s.optional(s.string()),
  riskdataBasketItemItemNrUpc: s.optional(s.string()),
  riskdataPromotionsPromotionItemNrPromotionCode: s.optional(s.string()),
  riskdataPromotionsPromotionItemNrPromotionDiscountAmount: s.optional(s.string()),
  riskdataPromotionsPromotionItemNrPromotionDiscountCurrency: s.optional(s.string()),
  riskdataPromotionsPromotionItemNrPromotionDiscountPercentage: s.optional(s.string()),
  riskdataPromotionsPromotionItemNrPromotionName: s.optional(s.string()),
  riskdataRiskProfileReference: s.optional(s.string()),
  riskdataSkipRisk: s.optional(s.string()),
  _keysMap: {
    riskdataCustomFieldName: "riskdata.[customFieldName]",
    riskdataBasketItemItemNrAmountPerItem: "riskdata.basket.item[itemNr].amountPerItem",
    riskdataBasketItemItemNrBrand: "riskdata.basket.item[itemNr].brand",
    riskdataBasketItemItemNrCategory: "riskdata.basket.item[itemNr].category",
    riskdataBasketItemItemNrColor: "riskdata.basket.item[itemNr].color",
    riskdataBasketItemItemNrCurrency: "riskdata.basket.item[itemNr].currency",
    riskdataBasketItemItemNrItemId: "riskdata.basket.item[itemNr].itemID",
    riskdataBasketItemItemNrManufacturer: "riskdata.basket.item[itemNr].manufacturer",
    riskdataBasketItemItemNrProductTitle: "riskdata.basket.item[itemNr].productTitle",
    riskdataBasketItemItemNrQuantity: "riskdata.basket.item[itemNr].quantity",
    riskdataBasketItemItemNrReceiverEmail: "riskdata.basket.item[itemNr].receiverEmail",
    riskdataBasketItemItemNrSize: "riskdata.basket.item[itemNr].size",
    riskdataBasketItemItemNrSku: "riskdata.basket.item[itemNr].sku",
    riskdataBasketItemItemNrUpc: "riskdata.basket.item[itemNr].upc",
    riskdataPromotionsPromotionItemNrPromotionCode: "riskdata.promotions.promotion[itemNr].promotionCode",
    riskdataPromotionsPromotionItemNrPromotionDiscountAmount:
      "riskdata.promotions.promotion[itemNr].promotionDiscountAmount",
    riskdataPromotionsPromotionItemNrPromotionDiscountCurrency:
      "riskdata.promotions.promotion[itemNr].promotionDiscountCurrency",
    riskdataPromotionsPromotionItemNrPromotionDiscountPercentage:
      "riskdata.promotions.promotion[itemNr].promotionDiscountPercentage",
    riskdataPromotionsPromotionItemNrPromotionName: "riskdata.promotions.promotion[itemNr].promotionName",
    riskdataRiskProfileReference: "riskdata.riskProfileReference",
    riskdataSkipRisk: "riskdata.skipRisk",
  },
});
