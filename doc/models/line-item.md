
# Line Item

## Structure

`LineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountExcludingTax` | `bigint \| undefined` | Optional | Item amount excluding the tax, in [minor units](https://docs.adyen.com/development-resources/currency-codes/#minor-units). |
| `amountIncludingTax` | `bigint \| undefined` | Optional | Item amount including the tax, in [minor units](https://docs.adyen.com/development-resources/currency-codes/#minor-units). |
| `brand` | `string \| undefined` | Optional | Brand of the item. |
| `color` | `string \| undefined` | Optional | Color of the item. |
| `description` | `string \| undefined` | Optional | Description of the line item.<br><br>**Constraints**: *Maximum Length*: `10000` |
| `id` | `string \| undefined` | Optional | ID of the line item. |
| `imageUrl` | `string \| undefined` | Optional | Link to the picture of the purchased item. |
| `itemCategory` | `string \| undefined` | Optional | Item category, used by the payment methods PayPal and Ratepay. |
| `manufacturer` | `string \| undefined` | Optional | Manufacturer of the item. |
| `marketplaceSellerId` | `string \| undefined` | Optional | Marketplace seller id. |
| `productUrl` | `string \| undefined` | Optional | Link to the purchased item. |
| `quantity` | `bigint \| undefined` | Optional | Number of items. |
| `receiverEmail` | `string \| undefined` | Optional | Email associated with the given product in the basket (usually in electronic gift cards). |
| `returnShippingCompany` | `string \| undefined` | Optional | Shipping company handling the return of the item. |
| `returnTrackingNumber` | `string \| undefined` | Optional | Tracking number for the return of the item. |
| `returnTrackingUri` | `string \| undefined` | Optional | Tracking URI for the return of the item. |
| `shippingCompany` | `string \| undefined` | Optional | Shipping company handling the delivery of the item. |
| `shippingMethod` | `string \| undefined` | Optional | Shipping method used to deliver the item. |
| `size` | `string \| undefined` | Optional | Size of the item. |
| `sku` | `string \| undefined` | Optional | Stock keeping unit. |
| `taxAmount` | `bigint \| undefined` | Optional | Tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes/#minor-units). |
| `taxPercentage` | `bigint \| undefined` | Optional | Tax percentage, represented as a [basis point](https://en.wikipedia.org/wiki/Basis_point) integer. For example:<br><br>- **530** for 5.3% (five point three percent)<br>- **2100** for 21% (twenty-one percent) |
| `trackingNumber` | `string \| undefined` | Optional | Tracking number for the delivery of the item. |
| `trackingUri` | `string \| undefined` | Optional | Tracking URI for the delivery of the item. |
| `upc` | `string \| undefined` | Optional | Universal Product Code. |

## Example

```ts
import { LineItem } from 'adyen';

const lineItem: LineItem = {
  amountExcludingTax: BigInt(242),
  amountIncludingTax: BigInt(96),
  brand: 'brand0',
  color: 'color0',
  description: 'description6',
};
```

