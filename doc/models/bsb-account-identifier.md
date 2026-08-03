
# Bsb Account Identifier

*This model accepts additional fields of type unknown.*

## Structure

`BsbAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `bsbCode` | `string` | Required | The BSB (Bank-State-Branch) code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BsbAccountIdentifier } from 'adyenlib';

const bsbAccountIdentifier: BsbAccountIdentifier = {
  accountNumber: 'accountNumber8',
  bsbCode: 'bsbCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

