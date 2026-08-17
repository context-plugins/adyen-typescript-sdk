
# DK Local Account Identification

## Structure

`DKLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `10` |
| `bankCode` | `string` | Required | The 4-digit bank code (Registreringsnummer) (without separators or whitespace).<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `type` | `string` | Required, Constant | **dkLocal**<br><br>**Value**: `'dkLocal'` |

## Example

```ts
import { DKLocalAccountIdentification } from 'adyen';

const dKLocalAccountIdentification: DKLocalAccountIdentification = {
  accountNumber: 'accountNumber8',
  bankCode: 'bankCode4',
  type: 'dkLocal',
};
```

