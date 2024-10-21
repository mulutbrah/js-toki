// extends
enum ROLE {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

interface IUser {
  name: string;
  age: number;
}

interface IAdmin extends IUser {
  role: ROLE;
}

const admin: IAdmin = {
  name: "Peter",
  age: 27,
  role: ROLE.ADMIN,
};

// omit <- exclude certain properties
type TCreateUser = Omit<IUser, "age">; // exclude age

// pick <- cherrypick from certain properties
type TNameUser = Pick<IUser, "name">; // include name

function createUserWithoutAge(user: TCreateUser): TCreateUser {
  return { name: user.name };
}

function createUserWithOnlyName(user: TNameUser): TNameUser {
  return { name: user.name };
}
