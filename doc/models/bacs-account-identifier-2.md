
# BACS Account Identifier 2

Identifiers relevant for Bankers' Automated Clearing Services (BACS) payments, primarily used in the United Kingdom.

## Structure

`BACSAccountIdentifier2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `sortCode` | `string` | Required | A number that identifies the specific bank and branch where a UK bank account is held. |

## Example

```ts
import { BACSAccountIdentifier2 } from 'adyen';

const bACSAccountIdentifier2: BACSAccountIdentifier2 = {
  accountNumber: 'accountNumber6',
  sortCode: 'sortCode6',
};
```

