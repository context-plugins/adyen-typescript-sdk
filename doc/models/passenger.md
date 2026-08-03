
# Passenger

*This model accepts additional fields of type unknown.*

## Structure

`Passenger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateOfBirth` | `string \| undefined` | Optional | The passenger's date of birth.<br><br>* Format `yyyy-MM-dd`<br>* minLength: 10<br>* maxLength: 10<br>* **additionalData key:** `airline.passenger[N].date_of_birth` |
| `firstName` | `string \| undefined` | Optional | The passenger's first name.<br><br>> This field is required if the airline data includes passenger details or leg details.<br><br>* Encoding: ASCII<br>* **additionalData key:** `airline.passenger[N].first_name` |
| `lastName` | `string \| undefined` | Optional | The passenger's last name.<br><br>> This field is required if the airline data includes passenger details or leg details.<br><br>* Encoding: ASCII<br>* **additionalData key:** `airline.passenger[N].last_name` |
| `phoneNumber` | `string \| undefined` | Optional | The passenger's phone number, including country code. This is an alphanumeric field that can include the '+' and '-' signs.<br><br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 30 characters<br>* **additionalData key:** `airline.passenger[N].phone_number` |
| `travellerType` | `string \| undefined` | Optional | The IATA passenger type code (PTC).<br><br>* Encoding: ASCII<br>* minLength: 3 characters<br>* maxLength: 6 characters<br>* **additionalData key:** `airline.passenger[N].traveller_type` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Passenger } from 'adyenlib';

const passenger: Passenger = {
  dateOfBirth: '2016-03-13T12:52:32.123Z',
  firstName: 'firstName6',
  lastName: 'lastName4',
  phoneNumber: 'phoneNumber0',
  travellerType: 'travellerType8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

