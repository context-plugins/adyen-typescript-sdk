
# Mandate Party Identification 2

Contains information about the owner of the counterparty bank account.

*This model accepts additional fields of type unknown.*

## Structure

`MandatePartyIdentification2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string \| undefined` | Optional | The full name of the entity that owns the bank account.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MandatePartyIdentification2 } from 'adyenlib';

const mandatePartyIdentification2: MandatePartyIdentification2 = {
  fullName: 'fullName2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

