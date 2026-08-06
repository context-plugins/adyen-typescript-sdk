
# Authorised Card Users

*This model accepts additional fields of type unknown.*

## Structure

`AuthorisedCardUsers`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legalEntityIds` | `string[] \| undefined` | Optional | The legal entity IDs of the authorized card users linked to the specified payment instrument. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuthorisedCardUsers } from 'adyen';

const authorisedCardUsers: AuthorisedCardUsers = {
  legalEntityIds: [
    'legalEntityIds2'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

