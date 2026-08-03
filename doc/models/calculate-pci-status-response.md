
# Calculate Pci Status Response

*This model accepts additional fields of type unknown.*

## Structure

`CalculatePciStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `signingRequired` | `boolean \| undefined` | Optional | Indicates if the user is required to sign PCI questionnaires. If **false**, they do not need to sign any questionnaires. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CalculatePciStatusResponse } from 'adyenlib';

const calculatePciStatusResponse: CalculatePciStatusResponse = {
  signingRequired: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

