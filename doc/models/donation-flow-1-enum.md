
# Donation Flow 1 Enum

The interaction flow for in-person donations. Possible values:

- **oneStep**: The shopper presents their payment method for the payment and the donation in one go, after the donation.

- **twoStep**: The shopper presents their payment method twice: after the payment and after the donation.

## Enumeration

`DonationFlow1Enum`

## Fields

| Name |
|  --- |
| `OneStep` |
| `TwoStep` |

## Example

```ts
import { DonationFlow1Enum } from 'adyen';

const donationFlow1 = DonationFlow1Enum.OneStep;
```

