/** Types generated for queries found in "src/lib/queries/telemetry.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type DateOrString = Date | string;

export type DateOrStringArray = (DateOrString)[];

export type NumberOrString = number | string;

export type numberArray = (number)[];

export type stringArray = (string)[];

/** 'InsertTelemetryBatch' parameters type */
export interface IInsertTelemetryBatchParams {
  accelerations?: numberArray | null | void;
  batteries?: numberArray | null | void;
  deviceIds?: stringArray | null | void;
  heartRates?: numberArray | null | void;
  latitudes?: numberArray | null | void;
  longitudes?: numberArray | null | void;
  receivedAts?: DateOrStringArray | null | void;
  recordedAts?: DateOrStringArray | null | void;
}

/** 'InsertTelemetryBatch' return type */
export type IInsertTelemetryBatchResult = void;

/** 'InsertTelemetryBatch' query type */
export interface IInsertTelemetryBatchQuery {
  params: IInsertTelemetryBatchParams;
  result: IInsertTelemetryBatchResult;
}

const insertTelemetryBatchIR: any = {"usedParamSet":{"deviceIds":true,"recordedAts":true,"receivedAts":true,"latitudes":true,"longitudes":true,"heartRates":true,"accelerations":true,"batteries":true},"params":[{"name":"deviceIds","required":false,"transform":{"type":"scalar"},"locs":[{"a":142,"b":151}]},{"name":"recordedAts","required":false,"transform":{"type":"scalar"},"locs":[{"a":164,"b":175}]},{"name":"receivedAts","required":false,"transform":{"type":"scalar"},"locs":[{"a":195,"b":206}]},{"name":"latitudes","required":false,"transform":{"type":"scalar"},"locs":[{"a":226,"b":235}]},{"name":"longitudes","required":false,"transform":{"type":"scalar"},"locs":[{"a":250,"b":260}]},{"name":"heartRates","required":false,"transform":{"type":"scalar"},"locs":[{"a":275,"b":285}]},{"name":"accelerations","required":false,"transform":{"type":"scalar"},"locs":[{"a":298,"b":311}]},{"name":"batteries","required":false,"transform":{"type":"scalar"},"locs":[{"a":326,"b":335}]}],"statement":"INSERT INTO telemetry\n  (device_id, recorded_at, received_at, latitude, longitude, heart_rate, acceleration, battery)\nSELECT * FROM UNNEST(\n  :deviceIds::text[],\n  :recordedAts::timestamptz[],\n  :receivedAts::timestamptz[],\n  :latitudes::float8[],\n  :longitudes::float8[],\n  :heartRates::int2[],\n  :accelerations::float4[],\n  :batteries::int2[]\n)\nON CONFLICT (device_id, recorded_at) DO NOTHING"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO telemetry
 *   (device_id, recorded_at, received_at, latitude, longitude, heart_rate, acceleration, battery)
 * SELECT * FROM UNNEST(
 *   :deviceIds::text[],
 *   :recordedAts::timestamptz[],
 *   :receivedAts::timestamptz[],
 *   :latitudes::float8[],
 *   :longitudes::float8[],
 *   :heartRates::int2[],
 *   :accelerations::float4[],
 *   :batteries::int2[]
 * )
 * ON CONFLICT (device_id, recorded_at) DO NOTHING
 * ```
 */
export const insertTelemetryBatch = new PreparedQuery<IInsertTelemetryBatchParams,IInsertTelemetryBatchResult>(insertTelemetryBatchIR);


/** 'FindRecent' parameters type */
export interface IFindRecentParams {
  deviceId?: string | null | void;
  limit?: NumberOrString | null | void;
}

/** 'FindRecent' return type */
export interface IFindRecentResult {
  acceleration: number | null;
  battery: number | null;
  device_id: string;
  heart_rate: number | null;
  latitude: number | null;
  longitude: number | null;
  received_at: Date;
  recorded_at: Date;
}

/** 'FindRecent' query type */
export interface IFindRecentQuery {
  params: IFindRecentParams;
  result: IFindRecentResult;
}

const findRecentIR: any = {"usedParamSet":{"deviceId":true,"limit":true},"params":[{"name":"deviceId","required":false,"transform":{"type":"scalar"},"locs":[{"a":148,"b":156}]},{"name":"limit","required":false,"transform":{"type":"scalar"},"locs":[{"a":190,"b":195}]}],"statement":"SELECT\n  device_id,\n  recorded_at,\n  received_at,\n  latitude,\n  longitude,\n  heart_rate,\n  acceleration,\n  battery\nFROM telemetry\nWHERE device_id = :deviceId\nORDER BY recorded_at DESC\nLIMIT :limit"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   device_id,
 *   recorded_at,
 *   received_at,
 *   latitude,
 *   longitude,
 *   heart_rate,
 *   acceleration,
 *   battery
 * FROM telemetry
 * WHERE device_id = :deviceId
 * ORDER BY recorded_at DESC
 * LIMIT :limit
 * ```
 */
export const findRecent = new PreparedQuery<IFindRecentParams,IFindRecentResult>(findRecentIR);


/** 'FindHourlyBaseline' parameters type */
export interface IFindHourlyBaselineParams {
  deviceId?: string | null | void;
  hours?: number | null | void;
}

/** 'FindHourlyBaseline' return type */
export interface IFindHourlyBaselineResult {
  avg_acceleration: number | null;
  avg_heart_rate: number | null;
  bucket: Date | null;
  device_id: string | null;
  max_heart_rate: number | null;
  sample_count: number | null;
}

/** 'FindHourlyBaseline' query type */
export interface IFindHourlyBaselineQuery {
  params: IFindHourlyBaselineParams;
  result: IFindHourlyBaselineResult;
}

const findHourlyBaselineIR: any = {"usedParamSet":{"deviceId":true,"hours":true},"params":[{"name":"deviceId","required":false,"transform":{"type":"scalar"},"locs":[{"a":199,"b":207}]},{"name":"hours","required":false,"transform":{"type":"scalar"},"locs":[{"a":234,"b":239}]}],"statement":"SELECT\n  device_id,\n  bucket,\n  avg_heart_rate::float  AS avg_heart_rate,\n  max_heart_rate,\n  avg_acceleration::float AS avg_acceleration,\n  sample_count::int\nFROM telemetry_hourly\nWHERE device_id = :deviceId\n  AND bucket >= NOW() - (:hours::int * INTERVAL '1 hour')\nORDER BY bucket DESC"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 *   device_id,
 *   bucket,
 *   avg_heart_rate::float  AS avg_heart_rate,
 *   max_heart_rate,
 *   avg_acceleration::float AS avg_acceleration,
 *   sample_count::int
 * FROM telemetry_hourly
 * WHERE device_id = :deviceId
 *   AND bucket >= NOW() - (:hours::int * INTERVAL '1 hour')
 * ORDER BY bucket DESC
 * ```
 */
export const findHourlyBaseline = new PreparedQuery<IFindHourlyBaselineParams,IFindHourlyBaselineResult>(findHourlyBaselineIR);


