
# Pse Latam

*This model accepts additional fields of type unknown.*

## Structure

`PseLatam`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bank` | `string` | Required | The shopper's bank. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `clientType` | `string` | Required | The client type. |
| `identification` | `string` | Required | The identification code. |
| `identificationType` | `string` | Required | The identification type. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type46 \| undefined`](../../doc/models/type-46.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PseLatam, Type46 } from 'adyenlib';

const pseLatam: PseLatam = {
  bank: 'bank2',
  clientType: 'clientType2',
  identification: 'identification8',
  identificationType: 'identificationType6',
  checkoutAttemptId: 'checkoutAttemptId0',
  sdkData: 'sdkData6',
  type: Type46.PsePayulatam,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

