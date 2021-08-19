import { Col, Row, Typography, Card } from "antd";
import React from "react";

import * as styles from "./styles.module.less";
import { Collapse, Timeline, List } from "antd";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const { Panel } = Collapse;

const { Title, Text } = Typography;

const LangsAndResearch = () => {
  const languages = ["English", "Farsi", "Turkish"];
  const researchInterests = [
    "programming languages",
    "software engineering",
    "information technology",
    "computer science",
    "artificial intelligence",
    "software development models",
    "software development life cycle",
  ];

  return (
    <div className={styles.container}>
      <Title className={styles.title} level={2}>
        Languages And Research Interest
      </Title>
      <Row>
        <Col className={styles.column} span={12}>
          <Card
            className={styles.card}
            title="Languages"
            // extra={<a href="#">More</a>}
            // style={{ width: 300 }}
          >
            <List
              itemLayout="horizontal"
              dataSource={languages}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    className={styles.listItem}
                    avatar={
                      <CheckCircleTwoTone
                        className={styles.icon}
                        twoToneColor="#e98074"
                      />
                    }
                    title={<Text className={styles.detailItem}>{item}</Text>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col className={styles.column} span={12}>
          <Card
            title="Research Interests"
            // extra={<a href="#">More</a>}
            className={styles.card}
          >
            <List
              itemLayout="horizontal"
              dataSource={researchInterests}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    className={styles.listItem}
                    avatar={
                      <CheckCircleTwoTone
                        className={styles.icon}
                        twoToneColor="#e98074"
                      />
                    }
                    title={<Text className={styles.detailItem}>{item}</Text>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LangsAndResearch;
