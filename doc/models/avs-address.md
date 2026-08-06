
# Avs Address

*This model accepts additional fields of type unknown.*

## Structure

`AvsAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `streetAddress` | `string` | Required | The street and house number of the address.<br><br>Example: 1 Infinite Loop, Cupertino. |
| `zip` | `string \| undefined` | Optional | The zip or post code of the address.<br><br>Example: CA 95014 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AvsAddress } from 'adyen';

const avsAddress: AvsAddress = {
  streetAddress: 'streetAddress6',
  zip: 'zip0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

