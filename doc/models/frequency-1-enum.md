
# Frequency 1 Enum

The frequency of payouts initiated by this payout schedule.

Possible values:

* daily
* weekdays
* weekly
* monthly

Default value: The `defaultFrequency` from the balance platform schedule that you are applying.

## Enumeration

`Frequency1Enum`

## Fields

| Name |
|  --- |
| `Daily` |
| `Weekly` |
| `Weekdays` |
| `Monthly` |

## Example

```ts
import { Frequency1Enum } from 'adyen';

const frequency1 = Frequency1Enum.Weekdays;
```

