
# CZ Local Account Identification 1

## Structure

`CZLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 2- to 16-digit bank account number (Číslo účtu) in the following format:<br><br>- The optional prefix (předčíslí).<br><br>- The required second part (základní část) which must be at least two non-zero digits.<br><br>Examples:<br><br>- **19-123457** (with prefix)<br><br>- **123457** (without prefix)<br><br>- **000019-0000123457** (with prefix, normalized)<br><br>- **000000-0000123457** (without prefix, normalized)<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `17` |
| `bankCode` | `string` | Required | The 4-digit bank code (Kód banky), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |

## Example

```ts
import { CZLocalAccountIdentification1 } from 'adyen';

const cZLocalAccountIdentification1: CZLocalAccountIdentification1 = {
  accountNumber: 'accountNumber4',
  bankCode: 'bankCode8',
  type: 'czLocal',
};
```

