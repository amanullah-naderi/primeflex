// wa_ss24_primeflex/backend/database/init-mongo.js
db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [
            {
                role: "readWrite",
                db: "primeflex"
            }
        ]
    }
);

db = db.getSiblingDB('primeflex');

db.Account.insertOne({username: "admin", password: "admin", role: "readWrite", email: "admin@example.com"});
db.Account.insertOne({username: "uer", password: "user", role: "read", email: "user@example.com"});
db.Account.insertOne({username: "guest", password: "guest", role: "read", email: "guest@example.com"});
db.Film.insertOne({title: "Bad Boy", director: "Christopher Nolan", genre: "Comedy | Action", releaseYear: 2010});
db.Film.insertOne({title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", genre: "Science Fiction", releaseYear: 1999});
db.Film.insertOne({title: "Tarrot", director: "Christopher Nolan", genre: "Horror", releaseYear: 2014});
db.Rating.insertOne({movieId: 1, rating: 4.5, userId: "admin"});
db.Rating.insertOne({movieId: 2, rating: 8, userId: "user"});
db.Rating.insertOne({movieId: 3, rating: 2, userId: "user"});
db.Serie.insertOne({title: "Breaking Bad", genre: "Crime | Drama", seasons: 5});
db.Serie.insertOne({title: "Wanted", genre: "Horror | Comdey", seasons: 2});
db.Serie.insertOne({title: "Evil", genre: "Crime | Horror", seasons: 3});
db.Trend.insertOne({title: "Top 10 Trending Movie", movieId: 1, trendingScore: 9.8});
db.Trend.insertOne({title: "Top 10 Trending Movie", movieId: 2, trendingScore: 9.4});
db.Trend.insertOne({title: "Top 10 Trending Movie", movieId: 3, trendingScore: 9.1});
db.UserRating.insertOne({userId: "user", movieId: 1, rating: 4.5});
db.UserRating.insertOne({userId: "user", movieId: 2, rating: 7.5});
db.UserRating.insertOne({userId: "admin", movieId: 3, rating: 9.5});