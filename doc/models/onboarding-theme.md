
# Onboarding Theme

## Structure

`OnboardingTheme`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string` | Required | The creation date of the theme. |
| `description` | `string \| undefined` | Optional | The description of the theme. |
| `id` | `string` | Required | The unique identifier of the theme. |
| `properties` | `Record<string, string>` | Required | The properties of the theme. |
| `updatedAt` | `string \| undefined` | Optional | The date when the theme was last updated. |

## Example

```ts
import { OnboardingTheme } from 'adyen';

const onboardingTheme: OnboardingTheme = {
  createdAt: '2016-03-13T12:52:32.123Z',
  id: 'id6',
  properties: {
    'key0': 'properties4',
    'key1': 'properties5',
    'key2': 'properties6'
  },
  description: 'description4',
  updatedAt: '2016-03-13T12:52:32.123Z',
};
```

