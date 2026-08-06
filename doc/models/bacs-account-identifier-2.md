
# Bacs Account Identifier 2

Identifiers relevant for Bankers' Automated Clearing Services (BACS) payments, primarily used in the United Kingdom.

*This model accepts additional fields of type unknown.*

## Structure

`BacsAccountIdentifier2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `sortCode` | `string` | Required | A number that identifies the specific bank and branch where a UK bank account is held. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BacsAccountIdentifier2 } from 'adyen';

const bacsAccountIdentifier2: BacsAccountIdentifier2 = {
  accountNumber: 'accountNumber8',
  sortCode: 'sortCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

