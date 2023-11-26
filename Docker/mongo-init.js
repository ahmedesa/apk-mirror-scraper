db.createUser(
    {
        user: 'admin',
        pwd: 'root',
        roles: [
            {
                role: "readWrite",
                db: "mydatabase"
            }
        ]
    }
);

db.createCollection("test");