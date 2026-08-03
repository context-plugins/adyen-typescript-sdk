
# Contact

*This model accepts additional fields of type unknown.*

## Structure

`Contact`

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
import { Contact } from 'adyenlib';

const contact: Contact = {
  email: 'email4',
  firstName: 'firstName2',
  infix: 'infix6',
  lastName: 'lastName6',
  phoneNumber: 'phoneNumber2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

