import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "prisma-binding";

const resolvers = {
  Query: {
    user: (_, args, context, info) => {
      return context.prisma.query.user(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    },
    users: (_, args, context, info) => {
      const lowercaseSearchString = args.searchString.toLowerCase();
      return context.prisma.query.users(
        {
          where: {
            OR: [
              { name_lc_starts_with: lowercaseSearchString },
              { email_starts_with: lowercaseSearchString }
            ]
          }
        },
        info
      );
    }
  },
  Mutation: {
    createUser: (_, args, context, info) => {
      return context.prisma.mutation.createUser(
        {
          data: {
            name: args.name,
            name_lc: args.name.toLowerCase(),
            email: args.email
          }
        },
        info
      );
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint:
        process.env.NODE_ENV === "development"
          ? "http://localhost:4466"
          : "FILL IN LATER"
    })
  }),
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

server.start(() =>
  console.log("GraphQL server is running on http://localhost:4000")
);
