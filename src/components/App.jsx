import React from "react";

import Layout from "components/UI/Layout";
import AppRouter from "components/AppRouter";
import Sidebar from "views/sidebar/Sidebar";
import ContentHeaderContainer from "containers/ContentHeaderContainer";
import ButtonToTop from "components/UI/ButtonToTop";

function App() {
  return (
    <Layout>
      <Sidebar />
      <div>
        <ContentHeaderContainer />
        <AppRouter />
      </div>
      <ButtonToTop />
    </Layout>
  );
}

export default App;
