# Employee & Product Management API

A simple Node.js/Express API for managing employees and products with MongoDB.

## Features

- Add / View employees
- Add / View products
- View Combined Data
- MongoDB integration

## API Endpoints

### Employees

**Get all employees**
```
GET /employees
```

**Add new employee**
```
POST /employees
```
Request body:
```json
{
  "name": "string",
  "position": "string",
  "department": "string",
  "salary": number
}
```

### Products

**Get all products**
```
GET /products
```

**Add new product**
```
POST /products
```
Request body:
```json
{
  "name": "string",
  "price": number,
  "category": "string",
  "inStock": boolean
}
```

### Combined Data

**Get both employees and products**
```
GET /combined
```
