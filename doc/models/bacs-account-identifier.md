
# Bacs Account Identifier

*This model accepts additional fields of type unknown.*

## Structure

`BacsAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `sortCode` | `string` | Required | A number that identifies the specific bank and branch where a UK bank account is held. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BacsAccountIdentifier } from 'adyenlib';

const bacsAccountIdentifier: BacsAccountIdentifier = {
  accountNumber: 'accountNumber0',
  sortCode: 'sortCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

