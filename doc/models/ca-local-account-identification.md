
# Ca Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`CaLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 5- to 12-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `12` |
| `accountType` | [`AccountType \| undefined`](../../doc/models/account-type.md) | Optional | - |
| `institutionNumber` | `string` | Required | The 3-digit institution number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `transitNumber` | `string` | Required | The 5-digit transit number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `5` |
| `type` | [`Type153`](../../doc/models/type-153.md) | Required | **caLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountType, CaLocalAccountIdentification, Type153 } from 'adyenlib';

const caLocalAccountIdentification: CaLocalAccountIdentification = {
  accountNumber: 'accountNumber2',
  institutionNumber: 'institutionNumber6',
  transitNumber: 'transitNumber2',
  type: Type153.CaLocal,
  accountType: AccountType.Checking,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

