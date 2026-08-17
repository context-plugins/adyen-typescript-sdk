
# Paginated Balance Accounts Response

## Structure

`PaginatedBalanceAccountsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccounts` | [`BalanceAccountBase[]`](../../doc/models/balance-account-base.md) | Required | List of balance accounts. |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |

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
      platformPaymentConfiguration: {
        salesDayClosingTime: '2016-03-13T12:52:32.123Z',
        settlementDelayDays: 80,
      },
    }
  ],
  hasNext: false,
  hasPrevious: false,
};
```

