
# Phone 2

The mobile phone number provided by the cardholder. The phone number must consist of a country code, followed by the number. If the value you provide does not follow the guidelines, we do not submit it for authentication.

> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`, and did not send the shopper's phone number in `telephoneNumber`.

*This model accepts additional fields of type unknown.*

## Structure

`Phone2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cc` | `string \| undefined` | Optional | Country code. Length: 1–3 digits.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3` |
| `subscriber` | `string \| undefined` | Optional | Subscriber number. Length: 4-15  digits.<br><br>**Constraints**: *Maximum Length*: `15` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Phone2 } from 'adyen';

const phone2: Phone2 = {
  cc: 'cc6',
  subscriber: 'subscriber8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

