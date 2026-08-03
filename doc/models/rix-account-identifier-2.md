
# Rix Account Identifier 2

Identifiers relevant for the Rix (Russian Interbank eXchange) system, used for interbank payments within Russia.

*This model accepts additional fields of type unknown.*

## Structure

`RixAccountIdentifier2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `clearingNumber` | `string` | Required | The 4- to 5-digit clearing number, without separators or whitespace. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RixAccountIdentifier2 } from 'adyenlib';

const rixAccountIdentifier2: RixAccountIdentifier2 = {
  accountNumber: 'accountNumber8',
  clearingNumber: 'clearingNumber0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

