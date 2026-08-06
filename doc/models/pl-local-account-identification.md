
# Pl Local Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`PlLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `26`, *Maximum Length*: `26` |
| `type` | [`Type256`](../../doc/models/type-256.md) | Required | **plLocal** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PlLocalAccountIdentification, Type256 } from 'adyen';

const plLocalAccountIdentification: PlLocalAccountIdentification = {
  accountNumber: 'accountNumber6',
  type: Type256.PlLocal,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

