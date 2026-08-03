
# Frequency

The frequency of payouts initiated by this payout schedule.

Possible values:

* daily
* weekdays
* weekly
* monthly

Default value: The `defaultFrequency` from the balance platform schedule that you are applying.

## Enumeration

`Frequency`

## Fields

| Name |
|  --- |
| `Daily` |
| `Weekly` |
| `Weekdays` |
| `Monthly` |

## Example

```ts
import { Frequency } from 'adyenlib';

const frequency = Frequency.Daily;
```

