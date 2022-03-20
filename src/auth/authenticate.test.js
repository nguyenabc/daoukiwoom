import { authenticate, getUser } from "./authenticate";

test("Should not get user", async () => {
  const user = getUser({ userName: "username", passWord: "password" });
  expect(user).toEqual(undefined);
});

test("Should not authenticate", () => {
  const isAuth = authenticate({
    userName: "username",
    passWord: "password",
  });

  expect(isAuth).toEqual(false);
});
