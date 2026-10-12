<!-- Generated file — do not edit; regenerated with the SDK. -->

# PciComplianceQuestionnairePage — operations

Accessor: `client.pciComplianceQuestionnairePage` · Source: `src/resources/pci-compliance-questionnaire-page.ts` · 1 operation · Request and error types: namespace `PciComplianceQuestionnairePage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `adyen`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### postGetPciQuestionnaireUrl

- **Server**: `default19` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `postGetPciQuestionnaireUrl(request: PciComplianceQuestionnairePage.PostGetPciQuestionnaireUrlRequest, options?: RequestOptions): ApiPromise<GetPciUrlResponse, PciComplianceQuestionnairePage.PostGetPciQuestionnaireUrlError>`
- **Wire**: `POST /getPciQuestionnaireUrl`
- **Auth**: any of `basicAuth`, `apiKeyAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GetPciUrlResponse`
- **Error**: `AdyenError` with `kind: "api"`, an instance of `PciComplianceQuestionnairePage.PostGetPciQuestionnaireUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"serviceError1"` [400] `ServiceError1` · `"serviceError12"` [401] `ServiceError1` · `"serviceError13"` [403] `ServiceError1` · `"serviceError14"` [422] `ServiceError1` · `"serviceError15"` [500] `ServiceError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PciComplianceQuestionnairePage.PostGetPciQuestionnaireUrlRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `GetPciUrlRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPciUrlRequest` | `getPciUrlRequestSchema` | `src/models/get-pci-url-request.ts` |
| `GetPciUrlResponse` | `getPciUrlResponseSchema` | `src/models/get-pci-url-response.ts` |
| `ServiceError1` | `serviceError1Schema` | `src/models/service-error1.ts` |

