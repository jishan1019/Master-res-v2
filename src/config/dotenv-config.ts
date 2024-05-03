export const nodeEnv = process.env.NODE_ENV!;
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
export const storeEncryptKey = process.env.NEXT_PUBLIC_STORE_ENCRYPT_SECRET_KEY!;

if (!nodeEnv) {
          throw new Error("NODE_ENV is not defined");
} else if (!baseUrl) {
          throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
} else if (!storeEncryptKey) {
          throw new Error("NEXT_PUBLIC_STORE_ENCRYPT_SECRET_KEY is not defined");
}