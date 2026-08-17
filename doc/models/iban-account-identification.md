
# Iban Account Identification

## Structure

`IbanAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bic` | `string \| undefined` | Optional | The bank's 8- or 11-character BIC or SWIFT code. |
| `iban` | `string` | Required | The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard. |
| `type` | `string` | Required, Constant | **iban**<br><br>**Value**: `'iban'` |

## Example

```ts
import { IbanAccountIdentification } from 'adyen';

const ibanAccountIdentification: IbanAccountIdentification = {
  iban: 'iban4',
  type: 'iban',
  bic: 'bic2',
};
```

