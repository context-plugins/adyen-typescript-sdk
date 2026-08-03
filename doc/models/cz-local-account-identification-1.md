
# Cz Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`CzLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 2- to 16-digit bank account number (Číslo účtu) in the following format:<br><br>- The optional prefix (předčíslí).<br><br>- The required second part (základní část) which must be at least two non-zero digits.<br><br>Examples:<br><br>- **19-123457** (with prefix)<br><br>- **123457** (without prefix)<br><br>- **000019-0000123457** (with prefix, normalized)<br><br>- **000000-0000123457** (without prefix, normalized)<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `17` |
| `bankCode` | `string` | Required | The 4-digit bank code (Kód banky), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CzLocalAccountIdentification1 } from 'adyenlib';

const czLocalAccountIdentification1: CzLocalAccountIdentification1 = {
  accountNumber: 'accountNumber8',
  bankCode: 'bankCode4',
  type: 'czLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

