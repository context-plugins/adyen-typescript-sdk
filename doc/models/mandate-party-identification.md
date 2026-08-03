
# Mandate Party Identification

*This model accepts additional fields of type unknown.*

## Structure

`MandatePartyIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullName` | `string \| undefined` | Optional | The full name of the entity that owns the bank account.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MandatePartyIdentification } from 'adyenlib';

const mandatePartyIdentification: MandatePartyIdentification = {
  fullName: 'fullName0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

