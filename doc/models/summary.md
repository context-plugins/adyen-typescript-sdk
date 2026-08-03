
# Summary

*This model accepts additional fields of type unknown.*

## Structure

`Summary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legalEntityId` | `string` | Required | The unique identifier of the legal entity. |
| `taxYears` | `number[]` | Required | The tax years for which the legal entity has a tax form. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Summary } from 'adyenlib';

const summary: Summary = {
  legalEntityId: 'legalEntityId2',
  taxYears: [
    111
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

