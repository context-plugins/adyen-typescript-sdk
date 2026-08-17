
# IBAN Account Identifier

## Structure

`IBANAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bban` | `string` | Required | The Basic Bank Account Number (BBAN) component of the IBAN. |
| `bic` | `string` | Required | BIC of a bank account. |
| `iban` | `string` | Required | The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard. This is the national identifier for the bank account, following the country-specific format, and is part of the full IBAN. |

## Example

```ts
import { IBANAccountIdentifier } from 'adyen';

const iBANAccountIdentifier: IBANAccountIdentifier = {
  bban: 'bban8',
  bic: 'bic6',
  iban: 'iban8',
};
```

