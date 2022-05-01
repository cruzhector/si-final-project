# Text API Documentation and Testing

## /text route

Text is the parent route for text translation API and text detection API.

### /translate

Translates the text. Few example postman request and response
**Sample 1**

- Request
  - method - `POST`
  - URL - `http://localhost:3000/text/translate?from=en&to=te`
  - Headers - `Content-Type:application/json`
  - body - ```[{"text": "Hello World!"}]```
- Response

```
[
    {
        "translations": [
            {
                "text": "హలో వరల్డ్!",
                "to": "te"
            }
        ]
    }
]
```

**Sample 2**

- Request
  - method - `POST`
  - URL - `http://localhost:3000/text/translate?from=en&to=te&to=fr`
  - Headers - `Content-Type:application/json`
  - body - ```[{"text": "Hello World!"}]```
- Response

```
[
    {
        "translations": [
            {
                "text": "హలో వరల్డ్!",
                "to": "te"
            },
            {
                "text": "Salut tout le monde!",
                "to": "fr"
            }
        ]
    }
]
```

### /detect

Detects the language. Few example postman request and response
**Sample 1**

- Request
  - method - `GET`
  - URL - `http://localhost:3000/text/detect`
  - Headers - `Content-Type:application/json`
  - body

```
[{
        "text": "Ich würde wirklich gern Ihr Auto um den Block fahren ein paar Mal."
}]
```

- Response

```
[
    {
        "language": "de",
        "score": 1,
        "isTranslationSupported": true,
        "isTransliterationSupported": false
    }
]
```
