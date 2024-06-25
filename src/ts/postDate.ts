import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function postSideDate(props: any) {
  const publishedDateFormated = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return { publishedDateFormated, publishedDateRelativeToNow }
}
