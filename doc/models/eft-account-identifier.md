
# Eft Account Identifier

*This model accepts additional fields of type unknown.*

## Structure

`EftAccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number of the bank account. |
| `branch` | `string` | Required | Identifies the specific branch where the account is held within the Canadian banking system. |
| `institution` | `string` | Required | The financial institution that identifies the bank in Canada. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EftAccountIdentifier } from 'adyenlib';

const eftAccountIdentifier: EftAccountIdentifier = {
  accountNumber: 'accountNumber0',
  branch: 'branch8',
  institution: 'institution2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

