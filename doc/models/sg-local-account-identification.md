
# Sg Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`SgLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 4- to 19-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19` |
| `bic` | `string` | Required | The bank's 8- or 11-character BIC or SWIFT code.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11` |
| `type` | [`Type8 \| undefined`](../../doc/models/type-8.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SgLocalAccountIdentification, Type8 } from 'adyenlib';

const sgLocalAccountIdentification: SgLocalAccountIdentification = {
  accountNumber: 'accountNumber8',
  bic: 'bic6',
  type: Type8.SgLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

