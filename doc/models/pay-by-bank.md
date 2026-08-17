
# Pay by Bank

## Structure

`PayByBank`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string \| undefined` | Optional | The PayByBank issuer value of the shopper's selected bank. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | `string` | Required, Constant | **paybybank**<br><br>**Value**: `'paybybank'` |

## Example

```ts
import { PayByBank } from 'adyen';

const payByBank: PayByBank = {
  type: 'paybybank',
  checkoutAttemptId: 'checkoutAttemptId0',
  issuer: 'issuer4',
  sdkData: 'sdkData6',
};
```

