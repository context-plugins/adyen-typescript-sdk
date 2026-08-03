
# Level Two Three

*This model accepts additional fields of type unknown.*

## Structure

`LevelTwoThree`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerReferenceNumber` | `string \| undefined` | Optional | The reference number to identify the customer and their order.<br><br>* Format: ASCII<br>* Max length: 25 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `enhancedSchemeData.customerReference` |
| `destination` | [`Destination \| undefined`](../../doc/models/destination.md) | Optional | - |
| `dutyAmount` | `bigint \| undefined` | Optional | The duty tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.dutyAmount` |
| `freightAmount` | `bigint \| undefined` | Optional | The shipping amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `enhancedSchemeData.freightAmount` |
| `itemDetailLines` | [`ItemDetailLine[] \| undefined`](../../doc/models/item-detail-line.md) | Optional | The list of item detail lines. |
| `orderDate` | `string \| undefined` | Optional | The date of the order.<br><br>* Min Length: 10 characters<br>* Max Length: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `enhancedSchemeData.orderDate` |
| `shipFromPostalCode` | `string \| undefined` | Optional | The postal code of the address where the item is shipped from.<br><br>* Encoding: ASCII<br>* Max length: 10 characters<br>* For the US, it must be in five or nine digits format. For example, 10001 or 10001-0000.<br>* For Canada, it must be in 6 digits format. For example, M4B 1G5.<br>* **additionalData key:** `enhancedSchemeData.shipFromPostalCode` |
| `totalTaxAmount` | `bigint \| undefined` | Optional | The amount of state or provincial [tax included in the total transaction amount](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/l2-l3#requirements-to-send-level-2-3-esd), in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* For L2 data: must not be all zeroes.<br>* For L3 data: can be zero.<br>* **additionalData key:** `enhancedSchemeData.totalTaxAmount` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LevelTwoThree } from 'adyenlib';

const levelTwoThree: LevelTwoThree = {
  customerReferenceNumber: 'customerReferenceNumber0',
  destination: {
    countryCode: 'countryCode0',
    postalCode: 'postalCode6',
    stateOrProvince: 'stateOrProvince2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  dutyAmount: BigInt(234),
  freightAmount: BigInt(136),
  itemDetailLines: [
    {
      commodityCode: 'commodityCode4',
      description: 'description8',
      discountAmount: BigInt(220),
      productCode: 'productCode0',
      quantity: BigInt(184),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

