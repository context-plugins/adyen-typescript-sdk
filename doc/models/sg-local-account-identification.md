
# SG Local Account Identification

## Structure

`SGLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 4- to 19-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19` |
| `bic` | `string` | Required | The bank's 8- or 11-character BIC or SWIFT code.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11` |
| `type` | [`Type82Enum \| undefined`](../../doc/models/type-82-enum.md) | Optional | **sgLocal**<br><br>**Default**: `Type82Enum.SgLocal` |

## Example

```ts
import { SGLocalAccountIdentification, Type82Enum } from 'adyen';

const sGLocalAccountIdentification: SGLocalAccountIdentification = {
  accountNumber: 'accountNumber4',
  bic: 'bic8',
  type: Type82Enum.SgLocal,
};
```

