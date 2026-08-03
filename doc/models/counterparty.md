
# Counterparty

*This model accepts additional fields of type unknown.*

## Structure

`Counterparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`AccountHolder`](../../doc/models/account-holder.md) | Required | - |
| `accountIdentification` | [`AccountIdentification1`](../../doc/models/account-identification-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Counterparty } from 'adyenlib';

const counterparty: Counterparty = {
  accountHolder: {
    fullName: 'John Doe',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  accountIdentification: {
    type: 'AccountIdentification1',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

