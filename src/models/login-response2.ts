import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { poiSystemData1Schema, type PoiSystemData1 } from "./poi-system-data1.js";
import { response11Schema, type Response11 } from "./response11.js";

export type LoginResponse2 = {
  response: Response11;
  poiSystemData?: PoiSystemData1;
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
