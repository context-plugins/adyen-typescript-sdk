
# Account Party

## Structure

`AccountParty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identity` | [`Identity2`](../../doc/models/identity-2.md) | Required | Contains the identity details of the party. |
| `role` | [`PartyRole2Enum`](../../doc/models/party-role-2-enum.md) | Required | Specifies a role or capacity of the party in relation to the bank account. |

## Example

```ts
import { AccountParty, PartyRole2Enum } from 'adyen';

const accountParty: AccountParty = {
  identity: {
    fullLegalName: 'fullLegalName2',
    name: 'name4',
  },
  role: PartyRole2Enum.OTHER,
};
```

