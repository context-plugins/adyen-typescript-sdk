
# RIX Account Identifier 2

Identifiers relevant for the Rix (Russian Interbank eXchange) system, used for interbank payments within Russia.

## Structure

`RIXAccountIdentifier2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `clearingNumber` | `string` | Required | The 4- to 5-digit clearing number, without separators or whitespace. |

## Example

```ts
import { RIXAccountIdentifier2 } from 'adyen';

const rIXAccountIdentifier2: RIXAccountIdentifier2 = {
  accountNumber: 'accountNumber0',
  clearingNumber: 'clearingNumber2',
};
```

