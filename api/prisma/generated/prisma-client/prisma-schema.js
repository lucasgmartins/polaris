module.exports = {
        typeDefs: /* GraphQL */ `type AggregateDeploy {
  count: Int!
}

type AggregateProject {
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
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
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

type Project {
  id: ID!
  name: String!
  repo_id: Int!
  repo_url: String!
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  name: String!
  repo_id: Int!
  repo_url: String!
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  repo_id_ASC
  repo_id_DESC
  repo_url_ASC
  repo_url_DESC
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

type ProjectPreviousValues {
  id: ID!
  name: String!
  repo_id: Int!
  repo_url: String!
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  repo_id: Int
  repo_url: String
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

input ProjectUpdateManyMutationInput {
  name: String
  repo_id: Int
  repo_url: String
  healthcheck_threshold_seconds: Int
  healthcheck_url: String
  retry_deploy_limit: Int
}

input ProjectWhereInput {
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
  repo_id: Int
  repo_id_not: Int
  repo_id_in: [Int!]
  repo_id_not_in: [Int!]
  repo_id_lt: Int
  repo_id_lte: Int
  repo_id_gt: Int
  repo_id_gte: Int
  repo_url: String
  repo_url_not: String
  repo_url_in: [String!]
  repo_url_not_in: [String!]
  repo_url_lt: String
  repo_url_lte: String
  repo_url_gt: String
  repo_url_gte: String
  repo_url_contains: String
  repo_url_not_contains: String
  repo_url_starts_with: String
  repo_url_not_starts_with: String
  repo_url_ends_with: String
  repo_url_not_ends_with: String
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
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  deploy(where: DeployWhereUniqueInput!): Deploy
  deploys(where: DeployWhereInput, orderBy: DeployOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deploy]!
  deploysConnection(where: DeployWhereInput, orderBy: DeployOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeployConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  deploy(where: DeploySubscriptionWhereInput): DeploySubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
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
    