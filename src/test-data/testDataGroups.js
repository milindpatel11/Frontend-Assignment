const testDataGroups = [
        {
            "id": "eea3635d-8158-4d62-8639-82fa267d8ae9",
            "name": "All devices",
            "created_on": "2021-02-14T17:59:58.405422Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "path": "All devices",
            "children_count": 3
        },
        {
            "id": "b4142b90-6c9b-4299-98f4-288f74b23e2a",
            "name": "TestA",
            "created_on": "2021-02-16T04:06:47.023499Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/eea3635d-8158-4d62-8639-82fa267d8ae9/",
            "path": "All devices/TestA",
            "children_count": 2
        },
        {
            "id": "b0c1e885-49e2-412e-b50a-522752639864",
            "name": "TestB",
            "created_on": "2021-02-16T04:49:14.213884Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/eea3635d-8158-4d62-8639-82fa267d8ae9/",

            "path": "All devices/TestB",
            "children_count": 2
        },
        {
            "id": "2f15a87d-ff4a-4206-8b4b-5ac04c1f4235",
            "name": "TestC",
            "created_on": "2021-02-16T04:49:21.499121Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/eea3635d-8158-4d62-8639-82fa267d8ae9/",

            "path": "All devices/TestC",
            "children_count": 2
        },
        {
            "id": "ef95ef2a-dbee-4f64-9aea-41bb7149fe1a",
            "name": "TestA-a",
            "created_on": "2021-02-16T04:49:29.092177Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/b4142b90-6c9b-4299-98f4-288f74b23e2a/",
            "path": "All devices/TestA/TestA-a",
            "children_count": 1
        },
        {
            "id": "12ddf6fc-9900-4ea0-971b-5750f21395b2",
            "name": "TestA-b",
            "created_on": "2021-02-16T04:49:38.073657Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/b4142b90-6c9b-4299-98f4-288f74b23e2a/",
            "path": "All devices/TestA/TestA-b",
            "children_count": 0
        },
        {
            "id": "a1abe484-c7db-47b7-aac3-a48cbb05b2a0",
            "name": "TestB-a",
            "created_on": "2021-02-16T04:49:53.086779Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/b0c1e885-49e2-412e-b50a-522752639864/",
            "path": "All devices/TestB/TestB-a",
            "children_count": 0
        },
        {
            "id": "d344bb48-1c42-40c9-944d-f722942b25f2",
            "name": "TestB-b",
            "created_on": "2021-02-16T04:49:59.541350Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/b0c1e885-49e2-412e-b50a-522752639864/",
            "path": "All devices/TestB/TestB-b",
            "children_count": 0
        },
        {
            "id": "a1ee24fd-4b6e-4245-9581-14535486506c",
            "name": "TestC-a",
            "created_on": "2021-02-16T04:50:11.021927Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/2f15a87d-ff4a-4206-8b4b-5ac04c1f4235/",
            "path": "All devices/TestC/TestC-a",
            "children_count": 0
        },
        {
            "id": "58e02209-a469-43ee-973b-16539b6f341d",
            "name": "TestC-b",
            "created_on": "2021-02-16T04:50:18.072840Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/2f15a87d-ff4a-4206-8b4b-5ac04c1f4235/",
            "path": "All devices/TestC/TestC-b",
            "children_count": 0
        },
        {
            "id": "372c18e8-9c73-4179-b368-c3ccdbb54081",
            "name": "TestA-a-1",
            "created_on": "2021-02-18T05:22:19.161718Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/ef95ef2a-dbee-4f64-9aea-41bb7149fe1a/",
            "path": "All devices/TestA/TestA-a/TestA-a-1",
            "children_count": 2
        },
        {
            "id": "009f2056-a3ed-4360-a110-7dbd1cc11fd7",
            "name": "TestA-a-1-first",
            "created_on": "2021-02-18T06:51:19.582056Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/372c18e8-9c73-4179-b368-c3ccdbb54081/",
            "path": "All devices/TestA/TestA-a/TestA-a-1/TestA-a-1-first",
            "children_count": 0
        },
        {
            "id": "be155b71-9728-4cad-aa69-cc26f531efa9",
            "name": "TestA-a-1-second",
            "created_on": "2021-02-18T07:15:40.346615Z",
            "enterprise": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/",
            "parent": "https://rfszw-api.esper.cloud/api/enterprise/7e5a48c8-39fc-4ee9-be9a-f0f9c98e4516/devicegroup/372c18e8-9c73-4179-b368-c3ccdbb54081/",
            "path": "All devices/TestA/TestA-a/TestA-a-1/TestA-a-1-second",
            "children_count": 0
        }
    ]

export default testDataGroups;
