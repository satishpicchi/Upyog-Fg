/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.22.595 on 2023-11-30 15:17:20.

export namespace Digit {

    interface Mapping {
        version: string;
        name: string;
        fromTopic: string;
        description: string;
        isTransaction: boolean;
        isBatch: boolean;
        queryMaps: QueryMap[];
    }

    interface QueryMap {
        query: string;
        jsonMaps: JsonMap[];
        basePath: string;
    }

    interface JsonMap {
        jsonPath: string;
        type: TypeEnum;
        dbType: TypeEnum;
        parentPath: string;
        format: string;
    }

    type TypeEnum = "ARRAY" | "STRING" | "INT" | "DOUBLE" | "FLOAT" | "DATE" | "LONG" | "BIGDECIMAL" | "BOOLEAN" | "CURRENTDATE" | "JSON" | "JSONB";

}
