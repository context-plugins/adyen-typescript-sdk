<!-- Generated file — do not edit; regenerated with the SDK. -->

# HostedOnboardingPage — operations

Accessor: `client.hostedOnboardingPage` · Source: `src/resources/hosted-onboarding-page.ts` · 1 operation · Request and error types: namespace `HostedOnboardingPage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### postGetOnboardingUrl

- **Server**: `default19` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetOnboardingUrl(request: HostedOnboardingPage.PostGetOnboardingUrlRequest, options?: RequestOptions): ApiPromise<GetOnboardingUrlResponse, HostedOnboardingPage.PostGetOnboardingUrlError>`
- **Wire**: `POST /getOnboardingUrl`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GetOnboardingUrlResponse`
- **Error**: `HostedOnboardingPage.PostGetOnboardingUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `HostedOnboardingPage.PostGetOnboardingUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetOnboardingUrlRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetOnboardingUrlRequest` | `getOnboardingUrlRequestSchema` | `src/models/get-onboarding-url-request.ts` |
| `GetOnboardingUrlResponse` | `getOnboardingUrlResponseSchema` | `src/models/get-onboarding-url-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

