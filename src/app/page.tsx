import Header from './components/Header'
import { Main, Info, Balance, Partners, Reports } from './sections';

export default function Home() {
  return (
      <div>
          <Header />
          <Main />
          <Info />
          <Balance />
          <Partners />
          <Reports />
      </div>
  );
}
