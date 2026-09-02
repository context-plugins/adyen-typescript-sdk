import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataRisk = {
  riskdataCustomFieldName?: string;
  riskdataBasketItemItemNrAmountPerItem?: string;
  riskdataBasketItemItemNrBrand?: string;
  riskdataBasketItemItemNrCategory?: string;
  riskdataBasketItemItemNrColor?: string;
  riskdataBasketItemItemNrCurrency?: string;
  riskdataBasketItemItemNrItemId?: string;
  riskdataBasketItemItemNrManufacturer?: string;
  riskdataBasketItemItemNrProductTitle?: string;
  riskdataBasketItemItemNrQuantity?: string;
  riskdataBasketItemItemNrReceiverEmail?: string;
  riskdataBasketItemItemNrSize?: string;
  riskdataBasketItemItemNrSku?: string;
  riskdataBasketItemItemNrUpc?: string;
  riskdataPromotionsPromotionItemNrPromotionCode?: string;
  riskdataPromotionsPromotionItemNrPromotionDiscountAmount?: string;
  riskdataPromotionsPromotionItemNrPromotionDiscountCurrency?: string;
  riskdataPromotionsPromotionItemNrPromotionDiscountPercentage?: string;
  riskdataPromotionsPromotionItemNrPromotionName?: string;
  riskdataRiskProfileReference?: string;
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
