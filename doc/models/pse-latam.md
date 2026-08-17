
# PSE Latam

## Structure

`PSELatam`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bank` | `string` | Required | The shopper's bank. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `clientType` | `string` | Required | The client type. |
| `identification` | `string` | Required | The identification code. |
| `identificationType` | `string` | Required | The identification type. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type46Enum \| undefined`](../../doc/models/type-46-enum.md) | Optional | The payment method type. |

## Example

```ts
import { PSELatam, Type46Enum } from 'adyen';

const pSELatam: PSELatam = {
  bank: 'bank6',
  clientType: 'clientType6',
  identification: 'identification4',
  identificationType: 'identificationType0',
  checkoutAttemptId: 'checkoutAttemptId4',
  sdkData: 'sdkData2',
  type: Type46Enum.PsePayulatam,
};
```

