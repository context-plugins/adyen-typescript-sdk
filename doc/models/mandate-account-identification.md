
# Mandate Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`MandateAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MandateAccountIdentification } from 'adyen';

const mandateAccountIdentification: MandateAccountIdentification = {
  type: 'MandateAccountIdentification',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

