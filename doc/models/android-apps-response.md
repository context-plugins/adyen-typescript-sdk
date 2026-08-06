
# Android Apps Response

*This model accepts additional fields of type unknown.*

## Structure

`AndroidAppsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AndroidApp[] \| undefined`](../../doc/models/android-app.md) | Optional | Apps uploaded for Android payment terminals. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AndroidAppsResponse, Status15 } from 'adyen';

const androidAppsResponse: AndroidAppsResponse = {
  data: [
    {
      id: 'id0',
      status: Status15.Invalid,
      description: 'description0',
      errorCode: 'errorCode6',
      errors: [
        {
          errorCode: 'errorCode6',
          terminalModels: [
            'terminalModels3',
            'terminalModels4'
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      label: 'label0',
      packageName: 'packageName6',
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

