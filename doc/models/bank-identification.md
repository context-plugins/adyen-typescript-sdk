
# Bank Identification

## Structure

`BankIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `country` | `string \| undefined` | Optional | Two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code. |
| `identification` | `string \| undefined` | Optional | The bank identification code. |
| `identificationType` | [`IdentificationTypeEnum \| undefined`](../../doc/models/identification-type-enum.md) | Optional | The type of the identification.<br><br>Possible values: **iban**, **routingNumber**, **sortCode**, **bic**. |

## Example

```ts
import { BankIdentification, IdentificationTypeEnum } from 'adyen';

const bankIdentification: BankIdentification = {
  country: 'country4',
  identification: 'identification2',
  identificationType: IdentificationTypeEnum.RoutingNumber,
};
```

