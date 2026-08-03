
# Balance Account

*This model accepts additional fields of type unknown.*

## Structure

`BalanceAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account. |
| `balances` | [`Balance[] \| undefined`](../../doc/models/balance.md) | Optional | List of balances with the amount and currency. |
| `defaultCurrencyCode` | `string \| undefined` | Optional | The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. This is the currency displayed on the Balance Account overview page in your Customer Area.<br>The default value is **EUR**.<br><br>> After a balance account is created, you cannot change its default currency. |
| `description` | `string \| undefined` | Optional | A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.<br><br>**Constraints**: *Maximum Length*: `300` |
| `id` | `string` | Required | The unique identifier of the balance account. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `migratedAccountCode` | `string \| undefined` | Optional, Read-only | The unique identifier of the account of the migrated account holder in the classic integration. |
| `platformPaymentConfiguration` | [`PlatformPaymentConfiguration \| undefined`](../../doc/models/platform-payment-configuration.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the balance account, maximum 150 characters.<br><br>**Constraints**: *Maximum Length*: `150` |
| `status` | [`Status21 \| undefined`](../../doc/models/status-21.md) | Optional | - |
| `timeZone` | `string \| undefined` | Optional | The time zone of the balance account. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalanceAccount } from 'adyenlib';

const balanceAccount: BalanceAccount = {
  accountHolderId: 'accountHolderId4',
  id: 'id2',
  balances: [
    {
      available: BigInt(152),
      balance: BigInt(224),
      currency: 'currency0',
      reserved: BigInt(158),
      pending: BigInt(152),
      pendingAvailable: BigInt(88),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      available: BigInt(152),
      balance: BigInt(224),
      currency: 'currency0',
      reserved: BigInt(158),
      pending: BigInt(152),
      pendingAvailable: BigInt(88),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      available: BigInt(152),
      balance: BigInt(224),
      currency: 'currency0',
      reserved: BigInt(158),
      pending: BigInt(152),
      pendingAvailable: BigInt(88),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  defaultCurrencyCode: 'defaultCurrencyCode8',
  description: 'description2',
  metadata: {
    'key0': 'metadata9',
    'key1': 'metadata8'
  },
  migratedAccountCode: 'migratedAccountCode6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

