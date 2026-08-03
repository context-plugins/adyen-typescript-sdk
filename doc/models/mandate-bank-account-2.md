
# Mandate Bank Account 2

Contains information to identify the counterparty.

*This model accepts additional fields of type unknown.*

## Structure

`MandateBankAccount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`MandatePartyIdentification`](../../doc/models/mandate-party-identification.md) | Required | - |
| `accountIdentification` | [`MandateAccountIdentification2`](../../doc/models/mandate-account-identification-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MandateBankAccount2 } from 'adyenlib';

const mandateBankAccount2: MandateBankAccount2 = {
  accountHolder: {
    fullName: 'fullName0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  accountIdentification: {
    type: 'MandateAccountIdentification2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

