import { createClient } from "redis";

const REDIS_CLIENT = createClient({
    url: "redis://localhost:6379"
});
