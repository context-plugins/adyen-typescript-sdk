
# Migrated Accounts

*This model accepts additional fields of type unknown.*

## Structure

`MigratedAccounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The unique identifier of the account of the migrated account holder in the classic integration. |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the account of the migrated account holder in the balance platform. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MigratedAccounts } from 'adyenlib';

const migratedAccounts: MigratedAccounts = {
  accountCode: 'accountCode6',
  balanceAccountId: 'balanceAccountId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

