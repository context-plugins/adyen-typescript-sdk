
# Payment Instrument Group Info

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentGroupInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatform` | `string` | Required | The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs. |
| `description` | `string \| undefined` | Optional | Your description for the payment instrument group.<br><br>**Constraints**: *Maximum Length*: `300` |
| `properties` | `Record<string, string> \| undefined` | Optional | Properties of the payment instrument group. |
| `reference` | `string \| undefined` | Optional | Your reference for the payment instrument group.<br><br>**Constraints**: *Maximum Length*: `150` |
| `txVariant` | `string` | Required | The tx variant of the payment instrument group. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentInstrumentGroupInfo } from 'adyen';

const paymentInstrumentGroupInfo: PaymentInstrumentGroupInfo = {
  balancePlatform: 'balancePlatform0',
  txVariant: 'txVariant6',
  description: 'description8',
  properties: {
    'key0': 'properties6',
    'key1': 'properties7',
    'key2': 'properties8'
  },
  reference: 'reference4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

