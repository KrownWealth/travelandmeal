import { Client, Account, } from 'appwrite';

const client = new Client();

if(!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID){
  throw new error("Must inlcude Appwrite project id")
}

client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

export const account = new Account(client); 
export { Client };
export { ID } from 'appwrite';
