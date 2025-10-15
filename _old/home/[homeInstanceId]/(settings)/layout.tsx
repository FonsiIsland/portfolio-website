import { verifyAccessToHomeInstance } from "@/actions/home-instance";
import SettingsMenu from "@/components/general-components/settings-menu/settings-menu";
import { homeLinks } from "../../../components/pages/home/home-links";

const layout = async ({
  params,
  children,
}: {
  params: { homeInstanceId: string };
  children: React.ReactNode;
}) => {
  const { homeInstanceId } = await params;
  const homeInstance = await verifyAccessToHomeInstance(homeInstanceId);

  return (
    <SettingsMenu
      backLink="/home"
      label={homeInstance.data?.homeInstance?.name || "Loading ..."}
      prePath={`/home/${homeInstanceId}`}
      settingsLinks={homeLinks}
    >
      {children}
    </SettingsMenu>
  );
};
export default layout;
