import { useLoaderData } from "react-router";

export default function SignInPage() {
  const { quotes } = useLoaderData();
  return (
    <div>
      {quotes.map( quote => (
        <p>{quote.quote} from {quote.author}</p>
      ))}
    </div>
  )
}