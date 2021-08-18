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

const Education = () => {
  const educations = [
    {
      id: 1,
      title: "Bachelore’s In Information Technology ",
      jobTitle: "islamic azad university tehran north branch",
      date: "October 2014 To June 2018",
      details: [
        {
          title: "Graduated with the GPA of 17.59/20 ",
        },
        {
          title: "Thesis: data mining systems",
        },
        {
          title: "Thesis grade: 4/4 under supervision of Dr. Ahmad Fallah",
        },
      ],
    },
    {
      id: 2,
      title: "Diploma Of Mathematics And Physics",
      jobTitle: "Abou Ali Sina Highschool",
      date: "2011 To 2014",
      details: [
        {
          title: "Graduated with the GPA of 19.24/20",
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <Row>
        <Col span={6}>
          <Title className={styles.title} level={2}>
            Education
          </Title>
        </Col>
        <Col span={18}>
          <Collapse ghost>
            {educations.map((exp) => (
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

export default Education;
