import { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader className="space-y-4">
            <Link href="/" className="flex-center">
              <Image
                src="/images/logo.svg"
                alt={`${APP_NAME} logo`}
                width={100}
                height={100}
              />
            </Link>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>{/* Sign In Form Goes Here */}</CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignInPage;
