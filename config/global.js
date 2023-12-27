import dotenv from 'dotenv'

dotenv.config();
export default {
    TOKEN_SECRET: process.env.TOKEN_SECRET || "9JsvJqfMmVFvSmcNB1A8KdU44RS+aSymhfLtgj7pJIIE79t4G6tS1cOyFFAuasVY5tFuQbKotBlbe7Gk5bJ7U73tiix/qqFzKKAWDgwjXCtgIgWQKBsz6i+6MRJ8td95wD0u8ljq19FqOXGYOXl6EVOM4sbwKdNybwTSrUhmDDse9dymb65z3Iah0Wtq+7RUywreB5PJFm83aS1XhC30Tg1qL0u4Dms9xVnS1iqlP2oCjfI09myM2XqVcRIFqiJeand8wCM8CEo9vBEaz6gRGo+di/6553GH9WytszcU45APp24d/Cfv2uhbOEtRHq+pcAkMuo3Bj3YzRPej3xMv4g==",
    URL: process.env.URL || "http://localhost:4200",
    PORT: process.env.PORT || "8080",
    SERVER_MONGO: process.env.SERVER_MONGO || "mongo",
    MONGODB_CNN: process.env.MONGODB_CNN || "mongo_cnn",
    PORT_MONGO: process.env.PORT_MONGO || "27017",
    DATABASE_NAME_MONGO: process.env.DATABASE_NAME_MONGO || "eb-core",
    USER_MONGO: process.env.USER_MONGO || "admin_cicsum",
    PASSWORD_MONGO: process.env.PASSWORD_MONGO || "4NcEdYAzclnAKHgi",
    PRODUCTION: process.env.PRODUCTION || false,
    PREFIX: process.env.PREFIX || "/v1",
}
