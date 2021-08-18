import { Col, Row, Typography } from "antd";
import React from "react";

import * as styles from "./styles.module.less";

const Experience = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={4}>
          <Typography>Experience</Typography>
        </Col>
        <Col span={20}>sls;s;dl</Col>
      </Row>
    </div>
  );
};

export default Experience;
