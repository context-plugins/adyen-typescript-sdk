
# Three Ds Availability Request

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDsAvailabilityRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value. |
| `brands` | `string[] \| undefined` | Optional | List of brands. |
| `cardNumber` | `string \| undefined` | Optional | Card number or BIN. |
| `merchantAccount` | `string` | Required | The merchant account identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | A recurring detail reference corresponding to a card. |
| `shopperReference` | `string \| undefined` | Optional | The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThreeDsAvailabilityRequest } from 'adyenlib';

const threeDsAvailabilityRequest: ThreeDsAvailabilityRequest = {
  merchantAccount: 'merchantAccount0',
  additionalData: {
    'key0': 'additionalData8'
  },
  brands: [
    'brands9',
    'brands0'
  ],
  cardNumber: 'cardNumber4',
  recurringDetailReference: 'recurringDetailReference8',
  shopperReference: 'shopperReference6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

