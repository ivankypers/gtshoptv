import {Header} from './components'
import { Main, Info, Balance, Partners, Reports, Form } from './sections';

export default function Home() {
  return (
      <div>
          <Header />
          <Main />
          <Info />
          <Balance />
          <Partners />
          <Reports />
          <Form />
      </div>
  );
}
