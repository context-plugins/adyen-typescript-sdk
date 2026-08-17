
# Authorised Card Users

## Structure

`AuthorisedCardUsers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legalEntityIds` | `string[] \| undefined` | Optional | The legal entity IDs of the authorized card users linked to the specified payment instrument. |

## Example

```ts
import { AuthorisedCardUsers } from 'adyen';

const authorisedCardUsers: AuthorisedCardUsers = {
  legalEntityIds: [
    'legalEntityIds2'
  ],
};
```

