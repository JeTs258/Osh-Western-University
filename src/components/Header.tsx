import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { type Locale } from "@/i18n/config";
import Link from "next/link";

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("navigation");

  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-6">
          <Link
            href={`/${locale}`}
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Next.js
          </Link>
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {t("about")}
          </Link>
          <Link
            href={`/${locale}/services`}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {t("services")}
          </Link>
        </nav>

        <LanguageSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
