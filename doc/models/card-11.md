
# Card 11

Contains information about the counterparty card.

*This model accepts additional fields of type unknown.*

## Structure

`Card11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardHolder` | [`PartyIdentification`](../../doc/models/party-identification.md) | Required | - |
| `cardIdentification` | [`CardIdentification`](../../doc/models/card-identification.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Card11 } from 'adyen';

const card11: Card11 = {
  cardHolder: {
    address: {
      country: 'country0',
      city: 'city6',
      line1: 'line18',
      line2: 'line20',
      postalCode: 'postalCode8',
      stateOrProvince: 'stateOrProvince4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    dateOfBirth: '2016-03-13T12:52:32.123Z',
    email: 'email0',
    firstName: 'firstName8',
    fullName: 'fullName6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cardIdentification: {
    expiryMonth: 'expiryMonth2',
    expiryYear: 'expiryYear2',
    issueNumber: 'issueNumber0',
    number: 'number6',
    startMonth: 'startMonth8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

