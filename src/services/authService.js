export async function login({ email, password }) {
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (email === "admin@example.com" && password === "password123") {
    return {
      token: "mock-jwt-token",
      user: {
        email,
        name: "Admin User",
      },
    };
  }

  throw new Error("Invalid email or password");
}
