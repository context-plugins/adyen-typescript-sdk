
# Counterparty Bank Restriction

*This model accepts additional fields of type unknown.*

## Structure

`CounterpartyBankRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`BankIdentification[] \| undefined`](../../doc/models/bank-identification.md) | Optional | The list of counterparty bank institutions to be evaluated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CounterpartyBankRestriction, IdentificationType } from 'adyenlib';

const counterpartyBankRestriction: CounterpartyBankRestriction = {
  operation: 'operation4',
  value: [
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

