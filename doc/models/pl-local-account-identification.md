
# PL Local Account Identification

## Structure

`PLLocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `26`, *Maximum Length*: `26` |
| `type` | `string` | Required, Constant | **plLocal**<br><br>**Value**: `'plLocal'` |

## Example

```ts
import { PLLocalAccountIdentification } from 'adyen';

const pLLocalAccountIdentification: PLLocalAccountIdentification = {
  accountNumber: 'accountNumber2',
  type: 'plLocal',
};
```

