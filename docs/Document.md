# Document API Documentation and Testing

## /document route

Docuemnt is the parent route for BLOB Docuement translation and retrieval API.
**Due to Azure API limitation only text file is supported through the REST API**

### /upload

Given the filename as query parameter and language to be converted with body as BLOB. This endpoint uploads a text file to the azure blob storage and translates the document.

**Sample 1**

- Request
  - method - `POST`
  - URL - `http://localhost:3000/document/upload?fileName=testfile&to=de`
  - Headers - **Do not specify any. Postman will automatically add**
  - body - **Choose raw option and select text in postman. Do not use JSON**

```
Where are you going
```

- Response

```
{
    "message": "Files sucessfully sent for translation. Please allow sometime for the files to be translated and try the content retriever API for the translated content.",
    "files": [
        "today5-de.txt"
    ]
}
```

### /content

Returns the translated text from the BLOB. To test this API

1. Use the above API to upload and translate a BLOB
2. Use this API with filename given in the above API as query parameter to see the translated content of the BLOB.

**Sample 1**

- Request
  - method - `GET`
  - URL - `http://localhost:3000/document/content?fileName=today5-de`
fileName=testfile&to=de`
  - Headers - **Do not specify any. Postman will automatically add**

- Response - a translated text.

```
Wohin gehst du
```

### /formats

Gets all the supported formats by document translator API.

**Sample 1**

- Request
  - method - `GET`
  - URL - `http://localhost:3000/document/formats`
  - Headers - **Do not specify any. Postman will automatically add**

- Response - List of all the supported documents.
