import { About, Contact, Hero, Projects, } from "./views";

import { Menu } from "./components";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    {/*  <Blog />*/}
      <Menu />
    </>
  );
}

export default App;
