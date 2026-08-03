
# Onboarding Themes

*This model accepts additional fields of type unknown.*

## Structure

`OnboardingThemes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `next` | `string \| undefined` | Optional | The next page. Only present if there is a next page. |
| `previous` | `string \| undefined` | Optional | The previous page. Only present if there is a previous page. |
| `themes` | [`OnboardingTheme[]`](../../doc/models/onboarding-theme.md) | Required | List of onboarding themes. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { OnboardingThemes } from 'adyenlib';

const onboardingThemes: OnboardingThemes = {
  themes: [
    {
      createdAt: '2016-03-13T12:52:32.123Z',
      id: 'id2',
      properties: {
        'key0': 'properties0'
      },
      description: 'description8',
      updatedAt: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  next: 'next2',
  previous: 'previous2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

