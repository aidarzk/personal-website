import { Col, Row, Typography } from "antd";
import React from "react";

import * as styles from "./styles.module.less";
import { Collapse, Timeline, List } from "antd";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Title, Text } = Typography;

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Torfeh Negar",
      jobTitle: "Front End Developer",
      date: "September 2019 to Present",
      details: [
        {
          title:
            "I started as a junior Front-End developer but soon I improved myself as one of the best Front-End developers in the team.",
        },
        {
          title:
            "Torfeh Negar is one of the biggest software companies in Iran with different online products like financial and accounting services and etc. I as a frontend developer has participated in two different projects in the company and also I had these responsibilities:",
          descriptions: [
            "Attending scrum meetings",
            "Developing and building the sites using: Next JS, React, React hook, Redux, HTML, CSS, JavaScript and Adding dynamic functionality and responsive pages",
            "Creating new features",
            "Performing bug fixes",
            "Collaborating with designers to maintain an efficient design",
            "Collaborating with Back-End developers to build a dynamic application",
            "Writing tests using jest, enzyme and react-testing-library",
            "I got promoted as the Front-End Leader since January 2021. And I am responsible for managing two Front-End teams, assigning the tasks to the most suitable person, code review and approving or rejecting tasks. Mentoring other developers on how to code and performing interviews",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Asiatech",
      jobTitle: "Call Center Expert",
      date: "December 2018 To Auguest 2019",
      details: [
        {
          title:
            "I was responsible for guiding customers with internet issues and solve the problem",
        },
        {
          title:
            "I scored 100 and became the best expert of the month among 80 employees for four consecutive months",
        },
      ],
    },
    {
      id: 3,
      title: "Sarv Rayaneh",
      jobTitle: "Internship",
      date: "July 2018 To October 2019",
      details: [
        {
          title:
            "I was responsible for upgrading windows and performed as a help desk technician.",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Row>
        <Col span={6}>
          <Title className={styles.title} level={2}>
            Experience
          </Title>
        </Col>
        <Col span={18}>
          <Collapse ghost>
            {experiences.map((exp) => (
              <Panel
                className={styles.panel}
                header={
                  <div>
                    <Title className={styles.text} level={3}>
                      {exp.title}
                    </Title>
                    <Title className={styles.text} level={5}>
                      {exp.jobTitle}/{exp.date}
                    </Title>
                  </div>
                }
                key={exp.id}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={exp.details}
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
                        title={
                          <Text className={styles.detailItem}>
                            {item.title}
                          </Text>
                        }
                        description={
                          item.descriptions && (
                            <List
                              itemLayout="horizontal"
                              dataSource={item.descriptions}
                              renderItem={(description) => (
                                <List.Item>
                                  <List.Item.Meta
                                    className={styles.descItem}
                                    avatar={
                                      <CheckCircleTwoTone
                                        // className={styles.icon}
                                        twoToneColor="#d8c3a5"
                                      />
                                    }
                                    description={description}
                                  />
                                </List.Item>
                              )}
                            />
                          )
                        }
                      />
                    </List.Item>
                  )}
                />
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
