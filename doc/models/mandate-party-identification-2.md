
# Mandate Party Identification 2

Contains information about the owner of the counterparty bank account.

## Structure

`MandatePartyIdentification2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string \| undefined` | Optional | The full name of the entity that owns the bank account.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space. |

## Example

```ts
import { MandatePartyIdentification2 } from 'adyen';

const mandatePartyIdentification2: MandatePartyIdentification2 = {
  fullName: 'fullName2',
};
```

