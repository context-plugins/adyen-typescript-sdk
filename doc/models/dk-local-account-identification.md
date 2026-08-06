
# Dk Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`DkLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `10` |
| `bankCode` | `string` | Required | The 4-digit bank code (Registreringsnummer) (without separators or whitespace).<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `type` | [`Type173`](../../doc/models/type-173.md) | Required | **dkLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DkLocalAccountIdentification, Type173 } from 'adyen';

const dkLocalAccountIdentification: DkLocalAccountIdentification = {
  accountNumber: 'accountNumber6',
  bankCode: 'bankCode8',
  type: Type173.DkLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

