
# Bsb Account Identifier 2

Identifiers relevant for Australian banking, specifically for BSB (Bank-State-Branch) numbers.

*This model accepts additional fields of type unknown.*

## Structure

`BsbAccountIdentifier2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `bsbCode` | `string` | Required | The BSB (Bank-State-Branch) code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BsbAccountIdentifier2 } from 'adyen';

const bsbAccountIdentifier2: BsbAccountIdentifier2 = {
  accountNumber: 'accountNumber2',
  bsbCode: 'bsbCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

