import UserProfilePage from "../components/pages/profile/user-profile";
import { Input } from "@/components/ui/input";
import ModifiedSeparator from "@/components/utils/modified-separator";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  return redirect(`/profile/informations`);
};
export default ProfilePage;
