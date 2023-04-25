export type initUserInfoInput = {
  sub: string;
  name: string;
  email: string;
  username: string;
};

export type CognitoUser = {
  attributes: {
    name: string;
    email: string;
    sub: string;
  };
  username: string;
};

export type currentUser = {
  sub: string;
  name: string;
  email: string;
  username: string;
}