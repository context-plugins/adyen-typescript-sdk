
# Travel Agency

## Structure

`TravelAgency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The unique identifier from IATA or ARC for the travel agency that issues the ticket.<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 8 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.travel_agency_code` |
| `name` | `string \| undefined` | Optional | The name of the travel agency.<br><br>* Encoding: ASCII<br>* minLength: 1 character<br>* maxLength: 25 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.travel_agency_name` |

## Example

```ts
import { TravelAgency } from 'adyen';

const travelAgency: TravelAgency = {
  code: 'code4',
  name: 'name6',
};
```

