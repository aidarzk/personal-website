import React, { useRef } from "react";
import { Layout } from "antd";
import {
  CustomHeader,
  PictureAndDescription,
  Education,
  Experience,
  Courses,
  Skills,
  LangsAndResearch,
  Connections,
} from "./components";
import * as styles from "./styles.module.less";

const MainPage = () => {
  const { Header, Content, Footer } = Layout;
  const connectRef = useRef(null);

  const handleClick = (myRef) => {
    console.log("handklekekkkkkk", myRef);
    if (myRef === "connect") {
      console.log(" connectRef?.current", connectRef?.current);
      connectRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <Header className={styles.myHeader}>
        <CustomHeader handleClick={handleClick} />
      </Header>
      <Content className={styles.content}>
        <div className={styles.container}>
          <PictureAndDescription />
          <Experience />
          <Education />
          <Skills />
          <Courses />
          <LangsAndResearch />
        </div>
      </Content>
      <Footer>
        <Connections connectRef={connectRef} />
      </Footer>
    </Layout>
  );
};

export default MainPage;
