
# Card 12

Contains information about the counterparty card.

## Structure

`Card12`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardHolder` | [`PartyIdentification1`](../../doc/models/party-identification-1.md) | Required | Contains information about the cardholder. |
| `cardIdentification` | [`CardIdentification3`](../../doc/models/card-identification-3.md) | Required | Contains the identification details of the card. |

## Example

```ts
import { Card12, Type112Enum } from 'adyen';

const card12: Card12 = {
  cardHolder: {
    address: {
      country: 'country0',
      city: 'city6',
      line1: 'line18',
      line2: 'line20',
      postalCode: 'postalCode8',
      stateOrProvince: 'stateOrProvince4',
    },
    dateOfBirth: '2016-03-13T12:52:32.123Z',
    email: 'email0',
    firstName: 'firstName8',
    fullName: 'fullName6',
    type: Type112Enum.Unknown,
  },
  cardIdentification: {
    expiryMonth: 'expiryMonth2',
    expiryYear: 'expiryYear2',
    issueNumber: 'issueNumber0',
    number: 'number6',
    startMonth: 'startMonth8',
  },
};
```

