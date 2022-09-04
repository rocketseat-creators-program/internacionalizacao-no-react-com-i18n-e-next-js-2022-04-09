import type { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { Header } from "../components/Header";
import { loadTranslation } from "../util/translations";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await loadTranslation(locale!, ["contact"])),
    },
  };
};

const Contact: NextPage = () => {
  const { t } = useTranslation("contact");

  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>{t("title")}</h1>
    </div>
  );
};

export default Contact;