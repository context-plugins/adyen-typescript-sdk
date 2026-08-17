
# HK Local Account Identification

## Structure

`HKLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `17` |
| `clearingCode` | `string` | Required | The 3-digit clearing code, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `type` | `string` | Required, Constant | **hkLocal**<br><br>**Value**: `'hkLocal'` |

## Example

```ts
import { HKLocalAccountIdentification } from 'adyen';

const hKLocalAccountIdentification: HKLocalAccountIdentification = {
  accountNumber: 'accountNumber8',
  clearingCode: 'clearingCode4',
  type: 'hkLocal',
};
```

