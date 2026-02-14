import { useEffect } from "react";

const BASE_TITLE = "3-6 Consulting";

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} — Security Consulting`;
  }, [title]);
}
