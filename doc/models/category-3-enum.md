
# Category 3 Enum

The category of the transfer.

Possible values:

- **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.

- **card**: A transfer involving a third-party card.

- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.

- **issuedCard**: A transfer initiated by an Adyen-issued card.

- **platformPayment**: Funds movements related to payments that are acquired for your users.

- **topUp**: An incoming transfer initiated by your user to top up their balance account.

## Enumeration

`Category3Enum`

## Fields

| Name |
|  --- |
| `Bank` |
| `Card` |
| `Internal` |
| `IssuedCard` |
| `PlatformPayment` |
| `TopUp` |

## Example

```ts
import { Category3Enum } from 'adyen';

const category3 = Category3Enum.Bank;
```

