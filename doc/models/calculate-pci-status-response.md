
# Calculate Pci Status Response

## Structure

`CalculatePciStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `signingRequired` | `boolean \| undefined` | Optional | Indicates if the user is required to sign PCI questionnaires. If **false**, they do not need to sign any questionnaires. |

## Example

```ts
import { CalculatePciStatusResponse } from 'adyen';

const calculatePciStatusResponse: CalculatePciStatusResponse = {
  signingRequired: false,
};
```

