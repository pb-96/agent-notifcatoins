import { RedisClientType } from "redis";



export const cursor_main_loop = async (REDIS_CLIENT: RedisClientType) => {
    const redisClient = await REDIS_CLIENT.connect();
    redisClient.on("error", (err) => console.error("Redis Client Error", err));
    if (!redisClient.isOpen) {
        console.error("Redis Client not connected");
        return;
    }

    while (true) {
        
    }
};

