
# Create Test Card Ranges Result

*This model accepts additional fields of type unknown.*

## Structure

`CreateTestCardRangesResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rangeCreationResults` | [`TestCardRangeCreationResult[]`](../../doc/models/test-card-range-creation-result.md) | Required | The results of the test card creation. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreateTestCardRangesResult, CreationResultCode } from 'adyen';

const createTestCardRangesResult: CreateTestCardRangesResult = {
  rangeCreationResults: [
    {
      cardNumberRangeEnd: 'cardNumberRangeEnd6',
      cardNumberRangeStart: 'cardNumberRangeStart8',
      creationResultCode: CreationResultCode.AlreadyExists,
      message: 'message0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

