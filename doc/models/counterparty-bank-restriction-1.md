
# Counterparty Bank Restriction 1

Contains a list of counterparty financial institutions and how they must be evaluated.

Supported operations: **anyMatch**, **noneMatch**.

*This model accepts additional fields of type unknown.*

## Structure

`CounterpartyBankRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`BankIdentification[] \| undefined`](../../doc/models/bank-identification.md) | Optional | The list of counterparty bank institutions to be evaluated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CounterpartyBankRestriction1, IdentificationType } from 'adyenlib';

const counterpartyBankRestriction1: CounterpartyBankRestriction1 = {
  operation: 'operation2',
  value: [
    {
      country: 'country6',
      identification: 'identification0',
      identificationType: IdentificationType.Bic,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      country: 'country6',
      identification: 'identification0',
      identificationType: IdentificationType.Bic,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      country: 'country6',
      identification: 'identification0',
      identificationType: IdentificationType.Bic,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

