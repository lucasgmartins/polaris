module.exports = {
        typeDefs: /* GraphQL */ `type AggregateDeploy {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Deploy {
  id: ID!
  name: String!
}

type DeployConnection {
  pageInfo: PageInfo!
  edges: [DeployEdge]!
  aggregate: AggregateDeploy!
}

input DeployCreateInput {
  name: String!
}

type DeployEdge {
  node: Deploy!
  cursor: String!
}

enum DeployOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DeployPreviousValues {
  id: ID!
  name: String!
}

type DeploySubscriptionPayload {
  mutation: MutationType!
  node: Deploy
  updatedFields: [String!]
  previousValues: DeployPreviousValues
}

input DeploySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DeployWhereInput
  AND: [DeploySubscriptionWhereInput!]
  OR: [DeploySubscriptionWhereInput!]
  NOT: [DeploySubscriptionWhereInput!]
}

input DeployUpdateInput {
  name: String
}

input DeployUpdateManyMutationInput {
  name: String
}

input DeployWhereInput {
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
  AND: [DeployWhereInput!]
  OR: [DeployWhereInput!]
  NOT: [DeployWhereInput!]
}

input DeployWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDeploy(data: DeployCreateInput!): Deploy!
  updateDeploy(data: DeployUpdateInput!, where: DeployWhereUniqueInput!): Deploy
  updateManyDeploys(data: DeployUpdateManyMutationInput!, where: DeployWhereInput): BatchPayload!
  upsertDeploy(where: DeployWhereUniqueInput!, create: DeployCreateInput!, update: DeployUpdateInput!): Deploy!
  deleteDeploy(where: DeployWhereUniqueInput!): Deploy
  deleteManyDeploys(where: DeployWhereInput): BatchPayload!
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
  deploy(where: DeployWhereUniqueInput!): Deploy
  deploys(where: DeployWhereInput, orderBy: DeployOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deploy]!
  deploysConnection(where: DeployWhereInput, orderBy: DeployOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeployConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  deploy(where: DeploySubscriptionWhereInput): DeploySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  name: String!
  username: String!
  photo: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  name: String!
  username: String!
  photo: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  username_ASC
  username_DESC
  photo_ASC
  photo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String!
  username: String!
  photo: String
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

input UserUpdateInput {
  email: String
  name: String
  username: String
  photo: String
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  username: String
  photo: String
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
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  photo: String
  photo_not: String
  photo_in: [String!]
  photo_not_in: [String!]
  photo_lt: String
  photo_lte: String
  photo_gt: String
  photo_gte: String
  photo_contains: String
  photo_not_contains: String
  photo_starts_with: String
  photo_not_starts_with: String
  photo_ends_with: String
  photo_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    