# Parcel Practices

## How To Usage

```batch
npm install
npm run dev
```

## Scripts

```json
"scripts": {
  "dev": "parcel ./src/index.html",
  "prebuild": "npx rimraf build && rmdir public /s /q",
  "build": "parcel build ./src/index.html --dist-dir ./public "
},
```

## Dependencies

```json
"dependencies": {
  "@popperjs/core": "^2.11.2",
  "bootstrap": "^5.1.3",
  "franc": "^6.0.0",
  "iso-639-3": "^3.0.1",
  "parcel": "^2.2.1"
},
```
