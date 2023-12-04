import clientPromise from "@/lib/mongodb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

// nextauth.js website for google authentication
export default NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // Active connection to MongoDB
  adapter: MongoDBAdapter(clientPromise),
})
