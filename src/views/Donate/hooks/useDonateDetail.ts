import { useSearchParams } from "react-router-dom";

export default function useDonateDetail() {
  const [params] = useSearchParams();
  const id = params.get('id');
  return {};
}