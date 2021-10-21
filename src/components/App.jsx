import React from "react";

import Layout from "components/UI/Layout";
import Sidebar from "components/sidebar/Sidebar";
import AppRouter from "components/AppRouter";

function App() {
  return (
    <Layout>
      <Sidebar />
      <AppRouter />
    </Layout>
  );
}

export default App;
