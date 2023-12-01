import Image from "next/image";
import { Poppins } from "next/font/google";
import SignInPage from "./sign-in";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-green-50 items-center justify-between p-24 ${poppins.className}`}
    >
      <SignInPage />
    </main>
  );
}
