
# Contact 1

The contact details for the shipping location.

*This model accepts additional fields of type unknown.*

## Structure

`Contact1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | The individual's email address. |
| `firstName` | `string \| undefined` | Optional | The individual's first name. |
| `infix` | `string \| undefined` | Optional | The infix in the individual's name, if any. |
| `lastName` | `string \| undefined` | Optional | The individual's last name. |
| `phoneNumber` | `string \| undefined` | Optional | The individual's phone number, specified as 10-14 digits with an optional `+` prefix. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Contact1 } from 'adyen';

const contact1: Contact1 = {
  email: 'email6',
  firstName: 'firstName4',
  infix: 'infix4',
  lastName: 'lastName4',
  phoneNumber: 'phoneNumber0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

