
# BR Local Account Identification

## Structure

`BRLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `bankCode` | `string` | Required | The 3-digit bank code, with leading zeros.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `branchNumber` | `string` | Required | The bank account branch number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4` |
| `ispb` | `string \| undefined` | Optional | The 8-digit ISPB, with leading zeros.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `type` | `string` | Required, Constant | **brLocal**<br><br>**Value**: `'brLocal'` |

## Example

```ts
import { BRLocalAccountIdentification } from 'adyen';

const bRLocalAccountIdentification: BRLocalAccountIdentification = {
  accountNumber: 'accountNumber0',
  bankCode: 'bankCode2',
  branchNumber: 'branchNumber2',
  type: 'brLocal',
  ispb: 'ispb6',
};
```

