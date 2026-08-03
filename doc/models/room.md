
# Room

*This model accepts additional fields of type unknown.*

## Structure

`Room`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfNights` | `number \| undefined` | Optional | The total number of nights the room is booked for.<br><br>* Format: Numeric<br>* Must be a number between 1 and 99<br>* **additionalData key:** `lodging.room[N].numberOfNights` |
| `rate` | `bigint \| undefined` | Optional | Room rate per night, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.room[N].rate` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Room } from 'adyenlib';

const room: Room = {
  numberOfNights: 138,
  rate: BigInt(46),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

