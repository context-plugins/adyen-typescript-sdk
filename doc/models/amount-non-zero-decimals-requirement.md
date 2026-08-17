
# Amount Non Zero Decimals Requirement

## Structure

`AmountNonZeroDecimalsRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies for which routes the amount in a transfer request must have no non-zero decimal places, so the transfer can only be processed if the amount consists of round numbers. |
| `type` | `string` | Required, Constant | **amountNonZeroDecimalsRequirement**<br><br>**Value**: `'amountNonZeroDecimalsRequirement'` |

## Example

```ts
import { AmountNonZeroDecimalsRequirement } from 'adyen';

const amountNonZeroDecimalsRequirement: AmountNonZeroDecimalsRequirement = {
  type: 'amountNonZeroDecimalsRequirement',
  description: 'description4',
};
```

