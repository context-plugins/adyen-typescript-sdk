
# Three DS Availability Request

## Structure

`ThreeDSAvailabilityRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | This field contains additional data, which may be required for a particular request.<br><br>The `additionalData` object consists of entries, each of which includes the key and value. |
| `brands` | `string[] \| undefined` | Optional | List of brands. |
| `cardNumber` | `string \| undefined` | Optional | Card number or BIN. |
| `merchantAccount` | `string` | Required | The merchant account identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | A recurring detail reference corresponding to a card. |
| `shopperReference` | `string \| undefined` | Optional | The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). |

## Example

```ts
import { ThreeDSAvailabilityRequest } from 'adyen';

const threeDSAvailabilityRequest: ThreeDSAvailabilityRequest = {
  merchantAccount: 'merchantAccount6',
  additionalData: {
    'key0': 'additionalData4'
  },
  brands: [
    'brands5',
    'brands6'
  ],
  cardNumber: 'cardNumber0',
  recurringDetailReference: 'recurringDetailReference4',
  shopperReference: 'shopperReference2',
};
```

