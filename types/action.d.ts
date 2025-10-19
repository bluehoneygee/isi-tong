interface SignInWithOAuthParams {
  provider: "google" | "twitter";
  providerAccountId: string;
  user: {
    email: string;
    name: string;
    image: string;
    username: string;
  };
}
