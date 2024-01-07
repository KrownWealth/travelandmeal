import { Client, Account, Databases} from 'appwrite';

const client = new Client();

if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || !process.env.NEXT_PUBLIC_APPWRITE_DATABASES_ID) {
  throw new Error("Must include Appwrite project ID and collection ID in the .env file");
}

client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
//.setKey(process.env.NEXT_PUBLIC_APPWRITE_API_SECRETS_KEY) 
;

export const account = new Account(client); 
export const databases = new Databases(client);
export { Client };
export { ID } from 'appwrite';

