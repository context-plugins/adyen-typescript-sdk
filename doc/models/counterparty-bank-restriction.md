
# Counterparty Bank Restriction

## Structure

`CounterpartyBankRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`BankIdentification[] \| undefined`](../../doc/models/bank-identification.md) | Optional | The list of counterparty bank institutions to be evaluated. |

## Example

```ts
import { CounterpartyBankRestriction, IdentificationTypeEnum } from 'adyen';

const counterpartyBankRestriction: CounterpartyBankRestriction = {
  operation: 'operation4',
  value: [
    {
      country: 'country6',
      identification: 'identification0',
      identificationType: IdentificationTypeEnum.Bic,
    }
  ],
};
```

