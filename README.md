# Instagram Versions Scrapper

The Instagram Versions Scrapper is a Node.js application designed to fetch and store information about the latest versions of the Instagram app from APK Mirror. This documentation provides information on setting up the application, using REST API endpoints.

## Technology Stack
- **Backend**: NodeJs, ExpressJS
- **Database**: MongoDb
- **Other Tools**: Docker , docker-compose

## Prerequisites
- Docker compose

## Setup Instructions
1. run `make setup` The server will be accessible at http://localhost:3000.


## Usage and Examples

### Fetch All Versions
   **Endpoint** GET /api/versions

   **Description** Get basic information about all Instagram versions.

**Example Response**:
```json
{
  "data": [
    {
      "_id": "656326e368a026d331675c6e",
      "versionId": "310.0.0.0.242",
      "releaseDate": "2023-11-22T09:46:00.000Z",
      "variantsCount": 7,
      "variants": [
        {
          "variantId": "370911813",
          "architecture": "arm64-v8a",
          "minVersion": "9.0",
          "screenDPI": "360-480dpi",
          "_id": "656326e368a026d331675c6f"
        },
        {
          "variantId": "370911814",
          "architecture": "armeabi-v7a",
          "minVersion": "7.0",
          "screenDPI": "560-640dpi",
          "_id": "656326e368a026d331675c71"
        },
        {
          "variantId": "370911815",
          "architecture": "arm64-v8a",
          "minVersion": "9.0",
          "screenDPI": "360-480dpi",
          "_id": "656326e368a026d331675c72"
        }
      ],
      "__v": 0
    }
  ]
}
```
### Fetch Version Details
   **Endpoint** GET /api/versions/:versionID

   **Description** Get detailed information about a specific Instagram version.
### Update Version
   **Endpoint** PUT /api/versions/:versionID

   **Description** Update information for a specific Instagram version.
### Delete Version
   **Endpoint** DELETE /api/versions/:versionID

   **Description** Delete a specific Instagram version.

### Manually Fetch Instagram Versions
You can manually fetch the latest Instagram versions from APK Mirror by running the following command:

```
make fetch-instagram-versions
```
This command will fetch and store the Instagram versions in the MongoDB database, excluding beta and alpha versions. Use this command to update the Instagram versions data manually.
