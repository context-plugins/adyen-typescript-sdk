
# RIX Account Identifier

## Structure

`RIXAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `clearingNumber` | `string` | Required | The 4- to 5-digit clearing number, without separators or whitespace. |

## Example

```ts
import { RIXAccountIdentifier } from 'adyen';

const rIXAccountIdentifier: RIXAccountIdentifier = {
  accountNumber: 'accountNumber8',
  clearingNumber: 'clearingNumber0',
};
```

