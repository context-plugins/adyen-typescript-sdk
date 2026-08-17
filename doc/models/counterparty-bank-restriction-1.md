
# Counterparty Bank Restriction 1

Contains a list of counterparty financial institutions and how they must be evaluated.

Supported operations: **anyMatch**, **noneMatch**.

## Structure

`CounterpartyBankRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`BankIdentification[] \| undefined`](../../doc/models/bank-identification.md) | Optional | The list of counterparty bank institutions to be evaluated. |

## Example

```ts
import { CounterpartyBankRestriction1, IdentificationTypeEnum } from 'adyen';

const counterpartyBankRestriction1: CounterpartyBankRestriction1 = {
  operation: 'operation2',
  value: [
    {
      country: 'country6',
      identification: 'identification0',
      identificationType: IdentificationTypeEnum.Bic,
    },
    {
      country: 'country6',
      identification: 'identification0',
      identificationType: IdentificationTypeEnum.Bic,
    },
    {
      country: 'country6',
      identification: 'identification0',
      identificationType: IdentificationTypeEnum.Bic,
    }
  ],
};
```

