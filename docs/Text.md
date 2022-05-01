# Text API Documentation and Testing

## /text route

Text is the parent route for text translation API and text detection API.

Reference to the Azure API [Text translation](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-translator?tabs=nodejs)

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
  - method - `POST`
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

### /dict-lookup

Returns alternate Translations the text. Few example postman request and response

**Sample 1**

- Request
  - method - `POST`
  - URL - `http://localhost:3000/text/translate?from=en&to=fr`
  - Headers - `Content-Type:application/json`
  - body - ```[{"text": "shark"}]```
- Response

```
[
  {
    "normalizedSource": "shark",
    "displaySource": "shark",
    "translations": [
      {
        "normalizedTarget": "requin",
        "displayTarget": "requin",
        "posTag": "NOUN",
        "confidence": 1,
        "prefixWord": "",
        "backTranslations": [
          {
            "normalizedText": "shark",
            "displayText": "shark",
            "numExamples": 15,
            "frequencyCount": 1447
          },
          {
            "normalizedText": "basking shark",
            "displayText": "basking shark",
            "numExamples": 0,
            "frequencyCount": 13
          }
        ]
      }
    ]
  }
]
```
