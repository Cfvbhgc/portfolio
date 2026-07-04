import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCommonPageProps } from "@/application/get-common-page-props";
import ErrorPageView, {
  ErrorPageViewRawProps,
} from "@/pages-view/ErrorPageView";
import { CommonPageProps } from "@/shared/model/types";
import { AppLocale } from "@/shared/сonfig/const";

const NotFoundPage = ({
  errorNumber,
  title,
  btnText,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ErrorPageView errorNumber={errorNumber} title={title} btnText={btnText} />
  );
};

export default NotFoundPage;

type PageProps = CommonPageProps & ErrorPageViewRawProps;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const locale = process.env.NEXT_PUBLIC_LOCALE || "ru";
  const commonPageProps = await getCommonPageProps(locale as AppLocale);

  const isEn = locale === "en";

  return {
    props: {
      ...commonPageProps,
      meta: {
        ...commonPageProps.meta,
        title: isEn ? "Page not found" : "Страница не найдена",
      },
      title: isEn ? "Page not found" : "Страница не найдена",
      breadcrumbs: [],
      bodyClass: "error-page",

      errorNumber: 404,
      btnText: isEn ? "Home" : "На главную",
    } satisfies PageProps,
  };
};
