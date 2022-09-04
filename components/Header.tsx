import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: "lightcoral",
      }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>

      <div>
        {router.locales?.map((lng) => {
          return (
            <Link key={lng} href={router.basePath} locale={lng}>
              <a
                style={{
                  textDecoration: lng === i18n.language ? "underline" : "none",
                  padding: 5,
                }}
              >
                {lng.toUpperCase()}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
