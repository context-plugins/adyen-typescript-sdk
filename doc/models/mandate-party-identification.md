
# Mandate Party Identification

## Structure

`MandatePartyIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string \| undefined` | Optional | The full name of the entity that owns the bank account.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space. |

## Example

```ts
import { MandatePartyIdentification } from 'adyen';

const mandatePartyIdentification: MandatePartyIdentification = {
  fullName: 'fullName0',
};
```

