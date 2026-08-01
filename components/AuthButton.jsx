"use client";

import { useState } from "react";
import { signOut } from "@/app/actions";
import AuthModal from "./AuthModal";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";

export default function AuthButton({ user }) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (user) {
    return (
      <form action={signOut}>
        <Button variant="default" size="lg" type="submit" className="bg-orange-500 hover:bg-orange-600 gap-2">
          <LogOut className=" w-5 h-5" />
          Sign Out
        </Button>
      </form>
    );
  }

  return (
    <>
      <Button
  onClick={() => setShowAuthModal(true)}
  variant="default"
  size="lg"
  className="bg-orange-500 hover:bg-orange-600 gap-2 text-base "
>
  <LogIn className="w-5 h-5" />
  Sign In
</Button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}