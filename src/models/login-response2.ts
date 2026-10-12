import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { poiSystemData1Schema, type PoiSystemData1 } from "./poi-system-data1.js";
import { response11Schema, type Response11 } from "./response11.js";

/** Content of the Login Response message. */
export type LoginResponse2 = {
  /** Result of a message request processing. */
  response: Response11;
  /** Information related to the POI System. Returned if the response result is Success. */
  poiSystemData?: PoiSystemData1;
  /** If token is managed by the POI, the status of the token request. */
  tokenRequestStatus?: boolean;
};

export const loginResponse2Schema: Schema<LoginResponse2> = s.object<LoginResponse2>({
  response: response11Schema,
  poiSystemData: s.optional(s.lazy(() => poiSystemData1Schema)),
  tokenRequestStatus: s.optional(s.boolean()),
  _keysMap: {
    response: "Response",
    poiSystemData: "POISystemData",
    tokenRequestStatus: "TokenRequestStatus",
  },
});
