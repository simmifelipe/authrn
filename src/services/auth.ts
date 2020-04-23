interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "23fi2j3f23fk23f23kd823dj23dji23d823jd38j2",
        user: {
          name: "Felipe",
          email: "felipe.simmi@gmail.com",
        },
      });
    }, 2000);
  });
}
