
# Paginated Balance Accounts Response

*This model accepts additional fields of type unknown.*

## Structure

`PaginatedBalanceAccountsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccounts` | [`BalanceAccountBase[]`](../../doc/models/balance-account-base.md) | Required | List of balance accounts. |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaginatedBalanceAccountsResponse } from 'adyen';

const paginatedBalanceAccountsResponse: PaginatedBalanceAccountsResponse = {
  balanceAccounts: [
    {
      accountHolderId: 'accountHolderId0',
      id: 'id8',
      defaultCurrencyCode: 'defaultCurrencyCode2',
      description: 'description8',
      metadata: {
        'key0': 'metadata5',
        'key1': 'metadata6',
        'key2': 'metadata7'
      },
      migratedAccountCode: 'migratedAccountCode2',
      platformPaymentConfiguration: {
        salesDayClosingTime: '2016-03-13T12:52:32.123Z',
        settlementDelayDays: 80,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  hasNext: false,
  hasPrevious: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

