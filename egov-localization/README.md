
# Localisation Service

This service provides localisation capacity to the UPYOG application.

### DB UML Diagram



### Service Dependencies



### Swagger API Contract

https://editor.swagger.io/?url=https://raw.githubusercontent.com/upyog/UPYOG/master/core-services/docs/localisation-contract.yml#!/



## Service Details

Localisation uses Redis cache to retrieve the data faster and Postgres to store the values permanently. Multiple retrieved value will be cached in the redis.

### API Details

Localisation can be created with values of key, module and tenantid to which the value belongs to. The keys are unique accross the modules within a tenantid.

Localisation can be search using combination of code , module, tenantid and locale where tenantid and locale are mandatory search criteria. 


### Kafka Consumers

### Kafka Producers
