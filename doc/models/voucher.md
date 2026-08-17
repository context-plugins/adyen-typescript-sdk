
# Voucher

## Structure

`Voucher`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `firstName` | `string` | Required | The shopper's first name. |
| `lastName` | `string` | Required | The shopper's last name. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperEmail` | `string` | Required | The shopper's email. |
| `telephoneNumber` | `string` | Required | The shopper's contact number. It must have an international number format, for example **+31 20 779 1846**. Formats like **+31 (0)20 779 1846** or **0031 20 779 1846** are not accepted. |
| `type` | [`Type29Enum`](../../doc/models/type-29-enum.md) | Required | **econtextvoucher** |

## Example

```ts
import { Type29Enum, Voucher } from 'adyen';

const voucher: Voucher = {
  firstName: 'firstName2',
  lastName: 'lastName6',
  shopperEmail: 'shopperEmail6',
  telephoneNumber: 'telephoneNumber4',
  type: Type29Enum.EcontextStores,
  checkoutAttemptId: 'checkoutAttemptId8',
  sdkData: 'sdkData8',
};
```

