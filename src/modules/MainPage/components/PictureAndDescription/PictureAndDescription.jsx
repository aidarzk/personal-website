import React from "react";
import { Row, Col } from "antd";

import * as styles from "./styles.module.less";
import me from "../../../../images/me.jpeg";

import { Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = "im a frontend developer";

const CustomHeader = () => {
  return (
    <Row className={styles.container}>
      <Col span={12}>
        <img className={styles.image} alt="me" src={me} />
      </Col>
      <Col span={12} className={styles.description}>
        <Typography>
          <Title strong>hi, i'm aida</Title>
          <Paragraph>
            <blockquote>{blockContent}</blockquote>
            <blockContent>
              I’ve gone through a number of phases in my career, and each of
              them has informed my current work ethos and philosophy. I have
              excelled in a number of project management roles in diverse
              industries, and believe that my number one asset is my ability to
              adapt to any challenge that is thrown my way
            </blockContent>
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export default CustomHeader;
