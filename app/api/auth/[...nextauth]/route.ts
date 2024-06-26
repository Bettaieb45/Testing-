import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/app/lib/mongodb';

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: `https://${process.env.AUTH0_DOMAIN!}`,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),

 
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
