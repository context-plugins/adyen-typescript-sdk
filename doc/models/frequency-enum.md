
# Frequency Enum

The frequency with which a shopper should be charged.

Possible values: **adhoc**, **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**., The frequency with which a shopper should be charged.

Possible values: **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**.

## Enumeration

`FrequencyEnum`

## Fields

| Name |
|  --- |
| `Adhoc` |
| `Daily` |
| `Weekly` |
| `BiWeekly` |
| `Monthly` |
| `Quarterly` |
| `HalfYearly` |
| `Yearly` |

## Example

```ts
import { FrequencyEnum } from 'adyen';

const frequency = FrequencyEnum.Monthly;
```

