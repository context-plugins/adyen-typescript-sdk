
# Wallet Purpose Enum

The purpose of a digital wallet transaction.

## Enumeration

`WalletPurposeEnum`

## Fields

| Name |
|  --- |
| `IdentifiedBoleto` |
| `TransferDifferentWallet` |
| `TransferOwnWallet` |
| `TransferSameWallet` |
| `UnidentifiedBoleto` |

## Example

```ts
import { WalletPurposeEnum } from 'adyen';

const walletPurpose = WalletPurposeEnum.TransferOwnWallet;
```

