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

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Programming Skills",
      details: [
        "React",
        " Next JS",
        "React Hook",
        " JavaScript",
        " HTML",
        " CSS",
        " Redux",
        " React-router",
        " material-UI",
        " Typescript",
        " react-leaflet",
        " React-native",
        " Node JS",
        " Expo",
        " JSX",
        " ES6",
        "Flex",
        "Sass",
        "SCSS",
        "React-kendo-grid",
        "Axios",
        "Fetch",
        "Jest",
        "Enzyme",
        "React-testing-library",
        "TFS",
        "GIT",
        "Agile",
        "Gatsby",
        "GraphQL",
        "Docker",
        "Antd",
      ],
    },
    {
      id: 2,
      title: "Applications",
      details: [
        "VS Code",
        " postman",
        " visual studio",
        " Adobe XD",
        " Microsoft Office Word",
        " Excel",
        " PowerPoint",
      ],
    },
    {
      id: 3,
      title: "Others",
      details: [
        "Team player",
        "Fast learner",
        "Management and leadership skills",
        "Punctual",
        "Critical thinking",
        "Risk management",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Title className={styles.title} level={2}>
        Skills
      </Title>
      <Row>
        {skills.map((skill) => (
          <Col className={styles.column} span={8}>
            <Card
              title={skill.title}
              key={skill.id}
              // extra={<a href="#">More</a>}
              className={styles.card}
            >
              {skill.details.map((item) => (
                <Text>{item}, </Text>
              ))}
              {/* <List
                itemLayout="horizontal"
                dataSource={skill.details}
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
              /> */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
