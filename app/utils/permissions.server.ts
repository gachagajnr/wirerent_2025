// model Role {
//     id String @id @default uuid()
//     name String @unique
//     permissions String[]
//   }

// type Permission =
//   | "read:users"
//   | "write:users"
//   | "delete:users"
//   | "read:invoices"
//   | "write:invoices"
//   | "delete:invoices"
//   | "read:products"
//   | "write:products"
//   | "delete:products"
// const permissions: Record<Role, Array<Permission>> = {
//   admin: ["read:users", "write:users", "delete:users"],
//   accounting: [
//     "read:users",
//     "read:invoices",
//     "write:invoices",
//     "delete:invoices",
//   ],
//   user: [
//     "read:users",
//     "read:invoices",
//     "read:products",
//     "write:products",
//     "delete:products",
//   ],
//   guest: ["read:products"],
// }
// export function hasPermissions(
//   role: Role,
//   permissions: Array<Permission>,
// ) {
//   return permissions.every((permission) =>
//     permissions[role].includes(permission),
//   )
// }