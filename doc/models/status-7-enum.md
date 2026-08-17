
# Status 7 Enum

The status of the app. Possible values:

* `processing`: the app is being signed and converted to a format that the terminal can handle.
* `error`: something went wrong. Check that the app matches the [requirements](https://docs.adyen.com/point-of-sale/android-terminals/app-requirements).
* `invalid`: there is something wrong with the APK file of the app.
* `ready`: the app has been signed and converted.
* `archived`: the app is no longer available.

## Enumeration

`Status7Enum`

## Fields

| Name |
|  --- |
| `Archived` |
| `Error` |
| `Invalid` |
| `Processing` |
| `Ready` |

## Example

```ts
import { Status7Enum } from 'adyen';

const status7 = Status7Enum.Archived;
```

