
# Eft Account Identifier 2

Identifiers relevant for Electronic Funds Transfer (EFT) payments, commonly used in Canada.

*This model accepts additional fields of type unknown.*

## Structure

`EftAccountIdentifier2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `branch` | `string` | Required | Identifies the specific branch where the account is held within the Canadian banking system. |
| `institution` | `string` | Required | The financial institution that identifies the bank in Canada. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EftAccountIdentifier2 } from 'adyenlib';

const eftAccountIdentifier2: EftAccountIdentifier2 = {
  accountNumber: 'accountNumber0',
  branch: 'branch8',
  institution: 'institution2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

