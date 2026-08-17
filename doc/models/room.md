
# Room

## Structure

`Room`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfNights` | `number \| undefined` | Optional | The total number of nights the room is booked for.<br><br>* Format: Numeric<br>* Must be a number between 1 and 99<br>* **additionalData key:** `lodging.room[N].numberOfNights` |
| `rate` | `bigint \| undefined` | Optional | Room rate per night, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.room[N].rate` |

## Example

```ts
import { Room } from 'adyen';

const room: Room = {
  numberOfNights: 138,
  rate: BigInt(46),
};
```

