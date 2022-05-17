# api

## GET /regions

### res

```json
{
    "regions": [
        {
            "name": "name",
            "code": 0
        }
    ]
}
```

## GET /postcodes/:region_code

### res

```json
{
    "postcodes": [
        {
            "name": "viborg",
            "code": 8800
        }
    ]
}
```

## GET /roads/:postcode

### res

```json
{
    "roads": [
        {
            "name": "Odshøjvej",
            "id": "guid"
        }
    ]
}
```

## GET /houses/:road_id

```json
{
    "houses": [
        {
            "number": 0,
            "id": "guid"
        }
    ]
}
```
