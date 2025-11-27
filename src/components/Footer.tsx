import { useTranslations } from "next-intl";
import { type Locale } from "@/i18n/config";
import Link from "next/link";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t("copyright")}
          </div>

          <nav className="flex gap-4">
            <Link
              href={`/${locale}/privacy`}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {t("termsOfService")}
            </Link>
          </nav>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {t("followUs")}
        </div>
      </div>
    </footer>
  );
}
