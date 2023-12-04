/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.22.595 on 2023-12-04 12:34:37.

export namespace Digit {

    interface ReindexRequest {
        jobId: string;
        startTime: number;
        totalRecords: number;
        RequestInfo: RequestInfo;
        index: string;
        type: string;
        reindexTopic: string;
        tenantId: string;
        batchSize: number;
    }

    interface LegacyIndexRequest {
        jobId: string;
        startTime: number;
        totalRecords: number;
        RequestInfo: RequestInfo;
        apiDetails: APIDetails;
        legacyIndexTopic: string;
        tenantId: string;
    }

    interface ReindexResponse {
        responseInfo: ResponseInfo;
        url: string;
        totalRecordsToBeIndexed: number;
        estimatedTime: string;
        message: string;
        jobId: string;
    }

    interface LegacyIndexResponse {
        responseInfo: ResponseInfo;
        url: string;
        message: string;
        jobId: string;
    }

    interface APIDetails {
        uri: string;
        request: any;
        tenantIdForOpenSearch: string;
        customQueryParam: string;
        paginationDetails: PaginationDetails;
        responseJsonPath: string;
    }

    interface PaginationDetails {
        offsetKey: string;
        sizeKey: string;
        maxPageSize: number;
        startingOffset: number;
        maxRecords: number;
    }

}
