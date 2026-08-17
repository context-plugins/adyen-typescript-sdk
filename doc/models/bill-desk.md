
# Bill Desk

## Structure

`BillDesk`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The issuer id of the shopper's selected bank. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type12Enum`](../../doc/models/type-12-enum.md) | Required | **billdesk** |

## Example

```ts
import { BillDesk, Type12Enum } from 'adyen';

const billDesk: BillDesk = {
  issuer: 'issuer0',
  type: Type12Enum.BilldeskOnline,
  checkoutAttemptId: 'checkoutAttemptId6',
  sdkData: 'sdkData0',
};
```

