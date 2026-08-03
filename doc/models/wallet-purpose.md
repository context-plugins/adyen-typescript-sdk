
# Wallet Purpose

The purpose of a digital wallet transaction.

## Enumeration

`WalletPurpose`

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
import { WalletPurpose } from 'adyenlib';

const walletPurpose = WalletPurpose.TransferOwnWallet;
```

