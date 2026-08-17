
# Party Identification

## Structure

`PartyIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address12 \| undefined`](../../doc/models/address-12.md) | Optional | The address of the bank account or card owner. |
| `dateOfBirth` | `string \| undefined` | Optional | The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.<br><br>Allowed only when `type` is **individual**. |
| `email` | `string \| undefined` | Optional | The email address of the organization or individual. Maximum length: 254 characters.<br><br>**Constraints**: *Maximum Length*: `254` |
| `firstName` | `string \| undefined` | Optional | The first name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br><br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**. |
| `fullName` | `string \| undefined` | Optional | The full name of the entity that owns the bank account or card.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space.<br><br>Required when `category` is **bank**. |
| `lastName` | `string \| undefined` | Optional | The last name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br><br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**. |
| `reference` | `string \| undefined` | Optional | A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.<br><br>Required when you include `cardIdentification.storedPaymentMethodId`.<br><br>**Constraints**: *Maximum Length*: `150` |
| `type` | [`Type112Enum \| undefined`](../../doc/models/type-112-enum.md) | Optional | The type of entity that owns the bank account or card.<br><br>Possible values: **individual**, **organization**, or **unknown**.<br><br>Required when `category` is **card**. In this case, the value must be **individual**.<br><br>**Default**: `Type112Enum.Unknown` |
| `url` | `string \| undefined` | Optional | The URL of the organization or individual. Maximum length: 255 characters.<br><br>**Constraints**: *Maximum Length*: `255` |

## Example

```ts
import { PartyIdentification, Type112Enum } from 'adyen';

const partyIdentification: PartyIdentification = {
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
};
```

