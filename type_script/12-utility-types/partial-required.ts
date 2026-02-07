export {};

// Base model (DB / entity)
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type CreateUser = Required<User>;

type UpdateUser = Partial<User>;

const newUser: CreateUser = {
  id: 1,
  name: "Manoj",
  email: "manoj@mail.com",
  password: "secret",
};

console.log(newUser)
const updateUser: UpdateUser = {
  name: "Updated Name",
};

console.log(updateUser)