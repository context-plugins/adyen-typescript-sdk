
# Balance Account Update Request

## Structure

`BalanceAccountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string \| undefined` | Optional | The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account. |
| `description` | `string \| undefined` | Optional | A human-readable description of the balance account. You can use this parameter to distinguish between multiple balance accounts under an account holder.<br><br>**Constraints**: *Maximum Length*: `300` |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `platformPaymentConfiguration` | [`PlatformPaymentConfiguration1 \| undefined`](../../doc/models/platform-payment-configuration-1.md) | Optional | Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account. |
| `reference` | `string \| undefined` | Optional | Your reference to the balance account.<br><br>**Constraints**: *Maximum Length*: `150` |
| `status` | [`Status43Enum \| undefined`](../../doc/models/status-43-enum.md) | Optional | The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.<br><br>Possible values: **active**, **closed**, **suspended**. |
| `timeZone` | `string \| undefined` | Optional | The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |

## Example

```ts
import { BalanceAccountUpdateRequest } from 'adyen';

const balanceAccountUpdateRequest: BalanceAccountUpdateRequest = {
  accountHolderId: 'accountHolderId8',
  description: 'description6',
  metadata: {
    'key0': 'metadata3'
  },
  platformPaymentConfiguration: {
    salesDayClosingTime: '2016-03-13T12:52:32.123Z',
    settlementDelayDays: 80,
  },
  reference: 'reference2',
};
```

