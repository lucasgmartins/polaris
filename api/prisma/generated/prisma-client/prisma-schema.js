module.exports = {
        typeDefs: /* GraphQL */ `type AggregateDeploy {
  count: Int!
}

type AggregateRepository {
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
  createRepository(data: RepositoryCreateInput!): Repository!
  updateRepository(data: RepositoryUpdateInput!, where: RepositoryWhereUniqueInput!): Repository
  updateManyRepositories(data: RepositoryUpdateManyMutationInput!, where: RepositoryWhereInput): BatchPayload!
  upsertRepository(where: RepositoryWhereUniqueInput!, create: RepositoryCreateInput!, update: RepositoryUpdateInput!): Repository!
  deleteRepository(where: RepositoryWhereUniqueInput!): Repository
  deleteManyRepositories(where: RepositoryWhereInput): BatchPayload!
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
  repository(where: RepositoryWhereUniqueInput!): Repository
  repositories(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repository]!
  repositoriesConnection(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RepositoryConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Repository {
  id: ID!
  github_id: Int!
  github_name: String!
  github_url: String!
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

type RepositoryConnection {
  pageInfo: PageInfo!
  edges: [RepositoryEdge]!
  aggregate: AggregateRepository!
}

input RepositoryCreateInput {
  github_id: Int!
  github_name: String!
  github_url: String!
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

type RepositoryEdge {
  node: Repository!
  cursor: String!
}

enum RepositoryOrderByInput {
  id_ASC
  id_DESC
  github_id_ASC
  github_id_DESC
  github_name_ASC
  github_name_DESC
  github_url_ASC
  github_url_DESC
  healthcheck_threshold_seconds_ASC
  healthcheck_threshold_seconds_DESC
  healthcheck_url_ASC
  healthcheck_url_DESC
  retry_deploy_limit_ASC
  retry_deploy_limit_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RepositoryPreviousValues {
  id: ID!
  github_id: Int!
  github_name: String!
  github_url: String!
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

type RepositorySubscriptionPayload {
  mutation: MutationType!
  node: Repository
  updatedFields: [String!]
  previousValues: RepositoryPreviousValues
}

input RepositorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RepositoryWhereInput
  AND: [RepositorySubscriptionWhereInput!]
  OR: [RepositorySubscriptionWhereInput!]
  NOT: [RepositorySubscriptionWhereInput!]
}

input RepositoryUpdateInput {
  github_id: Int
  github_name: String
  github_url: String
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

input RepositoryUpdateManyMutationInput {
  github_id: Int
  github_name: String
  github_url: String
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

input RepositoryWhereInput {
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
  github_id: Int
  github_id_not: Int
  github_id_in: [Int!]
  github_id_not_in: [Int!]
  github_id_lt: Int
  github_id_lte: Int
  github_id_gt: Int
  github_id_gte: Int
  github_name: String
  github_name_not: String
  github_name_in: [String!]
  github_name_not_in: [String!]
  github_name_lt: String
  github_name_lte: String
  github_name_gt: String
  github_name_gte: String
  github_name_contains: String
  github_name_not_contains: String
  github_name_starts_with: String
  github_name_not_starts_with: String
  github_name_ends_with: String
  github_name_not_ends_with: String
  github_url: String
  github_url_not: String
  github_url_in: [String!]
  github_url_not_in: [String!]
  github_url_lt: String
  github_url_lte: String
  github_url_gt: String
  github_url_gte: String
  github_url_contains: String
  github_url_not_contains: String
  github_url_starts_with: String
  github_url_not_starts_with: String
  github_url_ends_with: String
  github_url_not_ends_with: String
  healthcheck_threshold_seconds: Int
  healthcheck_threshold_seconds_not: Int
  healthcheck_threshold_seconds_in: [Int!]
  healthcheck_threshold_seconds_not_in: [Int!]
  healthcheck_threshold_seconds_lt: Int
  healthcheck_threshold_seconds_lte: Int
  healthcheck_threshold_seconds_gt: Int
  healthcheck_threshold_seconds_gte: Int
  healthcheck_url: String
  healthcheck_url_not: String
  healthcheck_url_in: [String!]
  healthcheck_url_not_in: [String!]
  healthcheck_url_lt: String
  healthcheck_url_lte: String
  healthcheck_url_gt: String
  healthcheck_url_gte: String
  healthcheck_url_contains: String
  healthcheck_url_not_contains: String
  healthcheck_url_starts_with: String
  healthcheck_url_not_starts_with: String
  healthcheck_url_ends_with: String
  healthcheck_url_not_ends_with: String
  retry_deploy_limit: Int
  retry_deploy_limit_not: Int
  retry_deploy_limit_in: [Int!]
  retry_deploy_limit_not_in: [Int!]
  retry_deploy_limit_lt: Int
  retry_deploy_limit_lte: Int
  retry_deploy_limit_gt: Int
  retry_deploy_limit_gte: Int
  AND: [RepositoryWhereInput!]
  OR: [RepositoryWhereInput!]
  NOT: [RepositoryWhereInput!]
}

input RepositoryWhereUniqueInput {
  id: ID
}

type Subscription {
  deploy(where: DeploySubscriptionWhereInput): DeploySubscriptionPayload
  repository(where: RepositorySubscriptionWhereInput): RepositorySubscriptionPayload
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
    