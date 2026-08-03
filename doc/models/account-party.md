
# Account Party

*This model accepts additional fields of type unknown.*

## Structure

`AccountParty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identity` | [`Identity`](../../doc/models/identity.md) | Required | - |
| `role` | [`PartyRole2`](../../doc/models/party-role-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountParty, PartyRole2 } from 'adyenlib';

const accountParty: AccountParty = {
  identity: {
    fullLegalName: 'fullLegalName2',
    name: 'name4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  role: PartyRole2.Other,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

