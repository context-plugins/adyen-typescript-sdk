
# Br Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`BrLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `bankCode` | `string` | Required | The 3-digit bank code, with leading zeros.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `branchNumber` | `string` | Required | The bank account branch number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4` |
| `ispb` | `string \| undefined` | Optional | The 8-digit ISPB, with leading zeros.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `type` | [`Type146`](../../doc/models/type-146.md) | Required | **brLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BrLocalAccountIdentification, Type146 } from 'adyenlib';

const brLocalAccountIdentification: BrLocalAccountIdentification = {
  accountNumber: 'accountNumber4',
  bankCode: 'bankCode6',
  branchNumber: 'branchNumber6',
  type: Type146.BrLocal,
  ispb: 'ispb0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

