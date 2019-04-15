// Code generated by Prisma (prisma@1.30.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateConversation {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Conversation {
  id: ID!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type ConversationConnection {
  pageInfo: PageInfo!
  edges: [ConversationEdge]!
  aggregate: AggregateConversation!
}

input ConversationCreateInput {
  members: UserCreateManyWithoutConversationsInput
  name: String!
  messages: MessageCreateManyWithoutConversationInput
}

input ConversationCreateManyWithoutMembersInput {
  create: [ConversationCreateWithoutMembersInput!]
  connect: [ConversationWhereUniqueInput!]
}

input ConversationCreateOneWithoutMessagesInput {
  create: ConversationCreateWithoutMessagesInput
  connect: ConversationWhereUniqueInput
}

input ConversationCreateWithoutMembersInput {
  name: String!
  messages: MessageCreateManyWithoutConversationInput
}

input ConversationCreateWithoutMessagesInput {
  members: UserCreateManyWithoutConversationsInput
  name: String!
}

type ConversationEdge {
  node: Conversation!
  cursor: String!
}

enum ConversationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type ConversationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

input ConversationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ConversationScalarWhereInput!]
  OR: [ConversationScalarWhereInput!]
  NOT: [ConversationScalarWhereInput!]
}

type ConversationSubscriptionPayload {
  mutation: MutationType!
  node: Conversation
  updatedFields: [String!]
  previousValues: ConversationPreviousValues
}

input ConversationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ConversationWhereInput
  AND: [ConversationSubscriptionWhereInput!]
  OR: [ConversationSubscriptionWhereInput!]
  NOT: [ConversationSubscriptionWhereInput!]
}

input ConversationUpdateInput {
  members: UserUpdateManyWithoutConversationsInput
  name: String
  messages: MessageUpdateManyWithoutConversationInput
}

input ConversationUpdateManyDataInput {
  name: String
}

input ConversationUpdateManyMutationInput {
  name: String
}

input ConversationUpdateManyWithoutMembersInput {
  create: [ConversationCreateWithoutMembersInput!]
  delete: [ConversationWhereUniqueInput!]
  connect: [ConversationWhereUniqueInput!]
  set: [ConversationWhereUniqueInput!]
  disconnect: [ConversationWhereUniqueInput!]
  update: [ConversationUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [ConversationUpsertWithWhereUniqueWithoutMembersInput!]
  deleteMany: [ConversationScalarWhereInput!]
  updateMany: [ConversationUpdateManyWithWhereNestedInput!]
}

input ConversationUpdateManyWithWhereNestedInput {
  where: ConversationScalarWhereInput!
  data: ConversationUpdateManyDataInput!
}

input ConversationUpdateOneWithoutMessagesInput {
  create: ConversationCreateWithoutMessagesInput
  update: ConversationUpdateWithoutMessagesDataInput
  upsert: ConversationUpsertWithoutMessagesInput
  delete: Boolean
  disconnect: Boolean
  connect: ConversationWhereUniqueInput
}

input ConversationUpdateWithoutMembersDataInput {
  name: String
  messages: MessageUpdateManyWithoutConversationInput
}

input ConversationUpdateWithoutMessagesDataInput {
  members: UserUpdateManyWithoutConversationsInput
  name: String
}

input ConversationUpdateWithWhereUniqueWithoutMembersInput {
  where: ConversationWhereUniqueInput!
  data: ConversationUpdateWithoutMembersDataInput!
}

input ConversationUpsertWithoutMessagesInput {
  update: ConversationUpdateWithoutMessagesDataInput!
  create: ConversationCreateWithoutMessagesInput!
}

input ConversationUpsertWithWhereUniqueWithoutMembersInput {
  where: ConversationWhereUniqueInput!
  update: ConversationUpdateWithoutMembersDataInput!
  create: ConversationCreateWithoutMembersInput!
}

input ConversationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [ConversationWhereInput!]
  OR: [ConversationWhereInput!]
  NOT: [ConversationWhereInput!]
}

input ConversationWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  sender: User!
  createdAt: DateTime!
  content: String!
  conversation: Conversation
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  sender: UserCreateOneInput!
  content: String!
  conversation: ConversationCreateOneWithoutMessagesInput
}

input MessageCreateManyWithoutConversationInput {
  create: [MessageCreateWithoutConversationInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutConversationInput {
  sender: UserCreateOneInput!
  content: String!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  createdAt: DateTime!
  content: String!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  sender: UserUpdateOneRequiredInput
  content: String
  conversation: ConversationUpdateOneWithoutMessagesInput
}

input MessageUpdateManyDataInput {
  content: String
}

input MessageUpdateManyMutationInput {
  content: String
}

input MessageUpdateManyWithoutConversationInput {
  create: [MessageCreateWithoutConversationInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutConversationInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutConversationInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutConversationDataInput {
  sender: UserUpdateOneRequiredInput
  content: String
}

input MessageUpdateWithWhereUniqueWithoutConversationInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutConversationDataInput!
}

input MessageUpsertWithWhereUniqueWithoutConversationInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutConversationDataInput!
  create: MessageCreateWithoutConversationInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sender: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  conversation: ConversationWhereInput
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createConversation(data: ConversationCreateInput!): Conversation!
  updateConversation(data: ConversationUpdateInput!, where: ConversationWhereUniqueInput!): Conversation
  updateManyConversations(data: ConversationUpdateManyMutationInput!, where: ConversationWhereInput): BatchPayload!
  upsertConversation(where: ConversationWhereUniqueInput!, create: ConversationCreateInput!, update: ConversationUpdateInput!): Conversation!
  deleteConversation(where: ConversationWhereUniqueInput!): Conversation
  deleteManyConversations(where: ConversationWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  conversation(where: ConversationWhereUniqueInput!): Conversation
  conversations(where: ConversationWhereInput, orderBy: ConversationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Conversation]!
  conversationsConnection(where: ConversationWhereInput, orderBy: ConversationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConversationConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  conversation(where: ConversationSubscriptionWhereInput): ConversationSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  createdAt: DateTime!
  conversations(where: ConversationWhereInput, orderBy: ConversationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Conversation!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  conversations: ConversationCreateManyWithoutMembersInput
}

input UserCreateManyWithoutConversationsInput {
  create: [UserCreateWithoutConversationsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutConversationsInput {
  name: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  createdAt: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  conversations: ConversationUpdateManyWithoutMembersInput
}

input UserUpdateInput {
  name: String
  email: String
  conversations: ConversationUpdateManyWithoutMembersInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateManyWithoutConversationsInput {
  create: [UserCreateWithoutConversationsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutConversationsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutConversationsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutConversationsDataInput {
  name: String
  email: String
}

input UserUpdateWithWhereUniqueWithoutConversationsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutConversationsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutConversationsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutConversationsDataInput!
  create: UserCreateWithoutConversationsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  conversations_every: ConversationWhereInput
  conversations_some: ConversationWhereInput
  conversations_none: ConversationWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`