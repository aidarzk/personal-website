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

const { Title, Text } = Typography;

const Courses = () => {
  const courseses = [
    {
      id: 1,
      title: "Diploma Of React ",
      jobTitle: "University Of Tehran (utech academy)",
      date: "June 2019 To September 2019 ",
      details: [
        {
          title: "Graduated with the score of 100/100",
        },
        {
          title: "+100 hours project-based training and workshops",
        },
        {
          title: "Building a messenger using react, redux and Axios",
        },
        {
          title:
            "Designing and building a mobile Application using react native for Android and IOS",
        },
      ],
    },
    {
      id: 2,
      title: "CCNP Route",
      jobTitle: "Kendo Academy",
      // date: "2011 To 2014",
      details: [
        {
          title: "Graduated as the best student in the class",
        },
      ],
    },
    {
      id: 3,
      title: "CCNP Switch",
      jobTitle: "Kendo Academy",
      // date: "2011 To 2014",
      // details: [
      //   {
      //     title: "Graduated as the best student in the class",
      //   },
      // ],
    },
    {
      id: 4,
      title: "CCNP ROUTE",
      jobTitle: "Kendo Academy",
      // date: "2011 To 2014",
      details: [
        {
          title: "Ranked within top three students in the class",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Row>
        <Col span={8}>
          <Title className={styles.title} level={2}>
            Courses
          </Title>
        </Col>
        <Col span={16}>
          <Collapse ghost>
            {courseses.map((exp) => (
              <Panel
                className={styles.panel}
                header={
                  <div>
                    <Title className={styles.text} level={3}>
                      {exp.title}
                    </Title>
                    <Title className={styles.text} level={5}>
                      {exp.jobTitle}
                      {exp.date ? "/" + exp.date : ""}
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

export default Courses;
