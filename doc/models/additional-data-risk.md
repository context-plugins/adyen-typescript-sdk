
# Additional Data Risk

## Structure

`AdditionalDataRisk`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `riskdataCustomFieldName` | `string \| undefined` | Optional | The data for your custom risk field. For more information, refer to [Create custom risk fields](https://docs.adyen.com/risk-management/configure-custom-risk-rules#step-1-create-custom-risk-fields). |
| `riskdataBasketItemItemNrAmountPerItem` | `string \| undefined` | Optional | The price of item in the basket, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `riskdataBasketItemItemNrBrand` | `string \| undefined` | Optional | Brand of the item. |
| `riskdataBasketItemItemNrCategory` | `string \| undefined` | Optional | Category of the item. |
| `riskdataBasketItemItemNrColor` | `string \| undefined` | Optional | Color of the item. |
| `riskdataBasketItemItemNrCurrency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217). |
| `riskdataBasketItemItemNrItemID` | `string \| undefined` | Optional | ID of the item. |
| `riskdataBasketItemItemNrManufacturer` | `string \| undefined` | Optional | Manufacturer of the item. |
| `riskdataBasketItemItemNrProductTitle` | `string \| undefined` | Optional | A text description of the product the invoice line refers to. |
| `riskdataBasketItemItemNrQuantity` | `string \| undefined` | Optional | Quantity of the item purchased. |
| `riskdataBasketItemItemNrReceiverEmail` | `string \| undefined` | Optional | Email associated with the given product in the basket (usually in electronic gift cards). |
| `riskdataBasketItemItemNrSize` | `string \| undefined` | Optional | Size of the item. |
| `riskdataBasketItemItemNrSku` | `string \| undefined` | Optional | [Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit). |
| `riskdataBasketItemItemNrUpc` | `string \| undefined` | Optional | [Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code). |
| `riskdataPromotionsPromotionItemNrPromotionCode` | `string \| undefined` | Optional | Code of the promotion. |
| `riskdataPromotionsPromotionItemNrPromotionDiscountAmount` | `string \| undefined` | Optional | The discount amount of the promotion, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `riskdataPromotionsPromotionItemNrPromotionDiscountCurrency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217). |
| `riskdataPromotionsPromotionItemNrPromotionDiscountPercentage` | `string \| undefined` | Optional | Promotion's percentage discount. It is represented in percentage value and there is no need to include the '%' sign.<br><br>e.g. for a promotion discount of 30%, the value of the field should be 30. |
| `riskdataPromotionsPromotionItemNrPromotionName` | `string \| undefined` | Optional | Name of the promotion. |
| `riskdataRiskProfileReference` | `string \| undefined` | Optional | Reference number of the risk profile that you want to apply to the payment. If not provided or left blank, the merchant-level account's default risk profile will be applied to the payment. For more information, see [dynamically assign a risk profile to a payment](https://docs.adyen.com/risk-management/create-and-use-risk-profiles#dynamically-assign-a-risk-profile-to-a-payment). |
| `riskdataSkipRisk` | `string \| undefined` | Optional | If this parameter is provided with the value **true**, risk checks for the payment request are skipped and the transaction will not get a risk score. |

## Example

```ts
import { AdditionalDataRisk } from 'adyen';

const additionalDataRisk: AdditionalDataRisk = {
  riskdataCustomFieldName: Liquid error: Value cannot be null. (Parameter 'key'),
  riskdataBasketItemItemNrAmountPerItem: Liquid error: Value cannot be null. (Parameter 'key'),
  riskdataBasketItemItemNrBrand: Liquid error: Value cannot be null. (Parameter 'key'),
  riskdataBasketItemItemNrCategory: Liquid error: Value cannot be null. (Parameter 'key'),
  riskdataBasketItemItemNrColor: Liquid error: Value cannot be null. (Parameter 'key'),
};
```

