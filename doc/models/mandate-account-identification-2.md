
# Mandate Account Identification 2

Contains the bank account details of the counterparty. The fields required in this object depend on the country of the bank account and the currency of the transfer.

*This model accepts additional fields of type unknown.*

## Structure

`MandateAccountIdentification2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MandateAccountIdentification2 } from 'adyenlib';

const mandateAccountIdentification2: MandateAccountIdentification2 = {
  type: 'MandateAccountIdentification2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

