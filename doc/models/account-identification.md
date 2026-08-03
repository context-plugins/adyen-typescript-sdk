
# Account Identification

*This model accepts additional fields of type unknown.*

## Structure

`AccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountIdentification } from 'adyenlib';

const accountIdentification: AccountIdentification = {
  type: 'AccountIdentification',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

