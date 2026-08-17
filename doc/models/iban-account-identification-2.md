
# Iban Account Identification 2

## Structure

`IbanAccountIdentification2`

## Inherits From

[`AccountIdentification`](../../doc/models/account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `iban` | `string` | Required | The IBAN of the bank account.<br><br>**Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { IbanAccountIdentification2 } from 'adyen';

const ibanAccountIdentification2: IbanAccountIdentification2 = {
  iban: 'NL00AAAA0000000000',
  type: 'iban',
};
```

