**yesterday**
    - we talked about using mongoose with express
**today**
    - we will talk about mongoose schema

# Schema Basics

- Schemas define the structure of documents in a MongoDB collection.
- Each field in a schema can have a specific type.

- Example:
  ```javascript
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean
  });
  ```

## Types

- **Types**:
    - Define the type of data for a field using `{ type: <field type> }`.
    - Example:
      ```javascript
      const productSchema = new mongoose.Schema({
        name: { type: String },
        price: { type: Number },
        inStock: { type: Boolean }
      });
      ```

- **Array of Types**: 
    - Define an array of a specific type using `{ type: [<field type>] }`.
    - Example:
      ```javascript
      const userSchema = new mongoose.Schema({
        roles: { type: [String] }
      });
      ```

## Required

- **Definition**: 
    - Ensures a field must have a value before saving the document.
    - Example:
        ```javascript
        const productSchema = new mongoose.Schema({
          name: { type: String, required: true },
          price: { type: Number, required: true }
        });
        ```

## Defaults

- **Definition**: 
  - Provides a default value for a field if no value is supplied.
  - Example:
    ```javascript
    const productSchema = new mongoose.Schema({
      name: { type: String, required: true },
      price: { type: Number, required: true  },
      inStock: { type: Boolean, default: true }
    });
    ```

## Unique

- **Definition**: 
    - Ensures that the value of a field must be unique across the collection.
    - Example:
        ```javascript
        const userSchema = new mongoose.Schema({
          email: { type: String, unique: true }
        });
        ```

## Timings

- **Definition**: 
  - Automatically manage `createdAt` and `updatedAt` properties for a schema.
  - Example:
    ```javascript
    const productSchema = new mongoose.Schema({
      name: { type: String, required: true },
      price: { type: Number, required: true }
    }, { timestamps: true });
    ```

## Examine Schema Types

- **Documentation**: 
  - Mongoose schema types provide various options for defining the structure and constraints of fields.
  - [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html)

# Subdocuments

- Subdocuments are documents embedded within other documents. 
- They allow for complex data structures and nested schemas.

- **Use Case**: 
  - Useful for modeling relationships where one document contains many related documents.

## Nested Schemas

- **Defining Nested Schemas**:
  - Example:
    ```javascript
    const addressSchema = new mongoose.Schema({
      street: String,
      city: String,
      zip: String
    });

    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      address: addressSchema
    });
    ```

## Removing IDs from Subdocuments

- **Removing `_id` from Subdocuments**:
  - By default, Mongoose adds an `_id` field to subdocuments. This can be disabled.
  - Example:
      ```javascript
      const addressSchema = new mongoose.Schema({
        street: String,
        city: String,
        zip: String
      }, { _id: false });

      const userSchema = new mongoose.Schema({
        name: String,
        address: addressSchema
      });

## Wrap-up

- **Schemas in Mongoose**:
  - Define the structure and constraints of documents.
  - Use types, required fields, unique constraints, default values, and timestamps.

- **Subdocuments**:
  - Enable nested data structures within documents.
  - Use nested schemas for complex relationships.
  - Remove `_id` fields from subdocuments when necessary.