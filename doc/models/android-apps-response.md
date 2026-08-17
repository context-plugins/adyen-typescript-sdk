
# Android Apps Response

## Structure

`AndroidAppsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AndroidApp[] \| undefined`](../../doc/models/android-app.md) | Optional | Apps uploaded for Android payment terminals. |

## Example

```ts
import { AndroidAppsResponse, Status7Enum } from 'adyen';

const androidAppsResponse: AndroidAppsResponse = {
  data: [
    {
      id: 'id0',
      status: Status7Enum.Invalid,
      description: 'description0',
      errorCode: 'errorCode6',
      errors: [
        {
          errorCode: 'errorCode6',
          terminalModels: [
            'terminalModels3',
            'terminalModels4'
          ],
        }
      ],
      label: 'label0',
      packageName: 'packageName6',
    }
  ],
};
```

