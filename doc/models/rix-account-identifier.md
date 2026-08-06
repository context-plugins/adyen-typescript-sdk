
# Rix Account Identifier

*This model accepts additional fields of type unknown.*

## Structure

`RixAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `clearingNumber` | `string` | Required | The 4- to 5-digit clearing number, without separators or whitespace. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RixAccountIdentifier } from 'adyen';

const rixAccountIdentifier: RixAccountIdentifier = {
  accountNumber: 'accountNumber6',
  clearingNumber: 'clearingNumber6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

