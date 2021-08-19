import { Col, Row, Typography } from "antd";
import React from "react";

import * as styles from "./styles.module.less";
import { Collapse, Timeline, List } from "antd";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { Link } from "gatsby";

const { Panel } = Collapse;

const { Title, Text } = Typography;

const Connections = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={8}>
          <Title className={styles.title} level={2}>
            Cantact me!
          </Title>
        </Col>
        <Col span={16} className={styles.contacts}>
          <Text>+989212064091</Text>
          <a href="/">rezakhani96aida@gmail.com</a>
          <a href="linkedin.com/in/aida-rezakhani-developer">Linkedin</a>
        </Col>
      </Row>
    </div>
  );
};

export default Connections;
