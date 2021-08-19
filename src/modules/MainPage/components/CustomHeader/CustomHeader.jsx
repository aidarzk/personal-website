import React from "react";

import { PageHeader, Button, Descriptions, Typography } from "antd";

import * as styles from "./HeaderStyle.module.less";

const { Text } = Typography;

const CustomHeader = (props) => {
  const { handleClick } = props;
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={true}
        // onBack={() => window.history.back()}
        title={<Text className={styles.aida}>Aida Rezakhani</Text>}
        // subTitle="This is a subtitle"
        extra={[
          // <Button type="text" className={styles.mybutton} key="3">
          //   bio
          // </Button>,
          <Button onClick={() => handleClick("connect")} type="text" key="2">
            connect
          </Button>,
          // <Button type="text" key="1">
          //   blog
          // </Button>,
        ]}
      >
        {/* <Descriptions size="small" column={3}>
        <Descriptions.Item>Aida Rezakhani</Descriptions.Item>
      </Descriptions> */}
      </PageHeader>
    </div>
  );
  // .site-page-header-ghost-wrapper {
  //   padding: 24px;
  //   background-color: #f5f5f5;
  // }
};

export default CustomHeader;
