
# Donation Flow 4 Enum

The interaction flow for in-person donations: complete payment for the purchase and the donation in one go, or separately.

## Enumeration

`DonationFlow4Enum`

## Fields

| Name |
|  --- |
| `OneStep` |
| `TwoStep` |

## Example

```ts
import { DonationFlow4Enum } from 'adyen';

const donationFlow4 = DonationFlow4Enum.OneStep;
```

