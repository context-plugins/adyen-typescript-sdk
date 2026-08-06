
# Nz Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`NzLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.<br><br>**Constraints**: *Minimum Length*: `15`, *Maximum Length*: `16` |
| `type` | [`Type233`](../../doc/models/type-233.md) | Required | **nzLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NzLocalAccountIdentification, Type233 } from 'adyen';

const nzLocalAccountIdentification: NzLocalAccountIdentification = {
  accountNumber: 'accountNumber6',
  type: Type233.NzLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

