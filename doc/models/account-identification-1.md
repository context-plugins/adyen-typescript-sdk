
# Account Identification 1

Contains the account number to which the payment funds are sent.

*This model accepts additional fields of type unknown.*

## Structure

`AccountIdentification1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountIdentification1 } from 'adyenlib';

const accountIdentification1: AccountIdentification1 = {
  type: 'AccountIdentification1',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

