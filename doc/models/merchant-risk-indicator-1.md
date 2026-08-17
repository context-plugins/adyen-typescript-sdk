
# Merchant Risk Indicator 1

Additional risk fields for 3D Secure 2.

> For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.

## Structure

`MerchantRiskIndicator1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressMatch` | `boolean \| undefined` | Optional | Whether the chosen delivery address is identical to the billing address. |
| `deliveryAddressIndicator` | [`DeliveryAddressIndicatorEnum \| undefined`](../../doc/models/delivery-address-indicator-enum.md) | Optional | Indicator regarding the delivery address.<br>Allowed values:<br><br>* `shipToBillingAddress`<br>* `shipToVerifiedAddress`<br>* `shipToNewAddress`<br>* `shipToStore`<br>* `digitalGoods`<br>* `goodsNotShipped`<br>* `other` |
| `deliveryEmail` | `string \| undefined` | Optional | The delivery email address (for digital goods). |
| `deliveryEmailAddress` | `string \| undefined` | Optional | For Electronic delivery, the email address to which the merchandise was delivered. Maximum length: 254 characters.<br><br>**Constraints**: *Maximum Length*: `254` |
| `deliveryTimeframe` | [`DeliveryTimeframeEnum \| undefined`](../../doc/models/delivery-timeframe-enum.md) | Optional | The estimated delivery time for the shopper to receive the goods.<br>Allowed values:<br><br>* `electronicDelivery`<br>* `sameDayShipping`<br>* `overnightShipping`<br>* `twoOrMoreDaysShipping` |
| `giftCardAmount` | [`Amount7 \| undefined`](../../doc/models/amount-7.md) | Optional | For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s). |
| `giftCardCount` | `number \| undefined` | Optional | For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased. |
| `giftCardCurr` | `string \| undefined` | Optional | For prepaid or gift card purchase, [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) three-digit currency code of the gift card, other than those listed in Table A.5 of the EMVCo 3D Secure Protocol and Core Functions Specification. |
| `preOrderDate` | `string \| undefined` | Optional | For pre-order purchases, the expected date this product will be available to the shopper. |
| `preOrderPurchase` | `boolean \| undefined` | Optional | Indicator for whether this transaction is for pre-ordering a product. |
| `preOrderPurchaseInd` | `string \| undefined` | Optional | Indicates whether Cardholder is placing an order for merchandise with a future availability or release date. |
| `reorderItems` | `boolean \| undefined` | Optional | Indicator for whether the shopper has already purchased the same items in the past. |
| `reorderItemsInd` | `string \| undefined` | Optional | Indicates whether the cardholder is reordering previously purchased merchandise. |
| `shipIndicator` | `string \| undefined` | Optional | Indicates shipping method chosen for the transaction. |

## Example

```ts
import {
  DeliveryAddressIndicatorEnum,
  DeliveryTimeframeEnum,
  MerchantRiskIndicator1,
} from 'adyen';

const merchantRiskIndicator1: MerchantRiskIndicator1 = {
  addressMatch: false,
  deliveryAddressIndicator: DeliveryAddressIndicatorEnum.ShipToBillingAddress,
  deliveryEmail: 'deliveryEmail8',
  deliveryEmailAddress: 'deliveryEmailAddress8',
  deliveryTimeframe: DeliveryTimeframeEnum.OvernightShipping,
};
```

