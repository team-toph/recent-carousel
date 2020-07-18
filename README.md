# Recent-Carousel Service

#### Create/Post: /api/products/
- Creates entry in database at json object's id and contents based on attached JSON body.
- Returns the created entry.

#### Read/Get: /api/products/?id=:id
- Returns database entry with matching id.

#### Update/Put: /api/products/?id=:id
- Changes or adds to database entry with matching id based on contents of request JSON body.
- Returns the database entry with updated information.

#### Delete: /api/products/?id=:id
- Deletes the database entry with the given id.
