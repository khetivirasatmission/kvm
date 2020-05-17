import { Button, Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import t0 from "../images/t0.jpg";

const { Paragraph, Text } = Typography;

interface IImageProps {
  name?: string;
  image: any;
}

interface ILinkedImageProps {
  name?: string;
  url?: string;
  image: any;
}

interface IStoryProps {
  key: string;
  name?: string;
  designation?: string;
  story?: string;
  region?: string;
  image: any;
  file?: string;
  expanded?: boolean;
  onClick?: any;
}

const storyStyle = {
  paddingTop: "4px",
};

const Image = ({ name, image }: IImageProps) => {
  return (
    <div className="custom-image">
      <img alt={name} width="100%" src={image} />
    </div>
  );
};

const LinkedImage = ({ url, name, image }: ILinkedImageProps) => {
  return (
    <a href={url} target="_blank">
      <Image name={name} image={image} />
    </a>
  );
};

export const StoryList = ({ list }: any) => {
  const [data, setData] = useState(list);

  const moveTop = (currentList: any, key: string) => {
    const temp = [...currentList];
    const index = temp.findIndex((item: any) => item.key === key);
    temp.push(...temp.splice(0, index));
    temp.map(obj => {
      obj.expanded = false;
      if (obj.key === key) {
        obj.expanded = true;
      }
    });

    setData(temp);
  };

  return (
    <Row gutter={18} type="flex">
      {data.map((item: IStoryProps) => (
        <Story
          key={item.key}
          name={item.name}
          designation={item.designation}
          image={item.image}
          story={item.story}
          expanded={item.expanded}
          onClick={() => moveTop(data, item.key)}
        />
      ))}
    </Row>
  );
};

const Story = ({
  name,
  designation,
  story,
  region,
  image,
  file,
  expanded,
  onClick,
}: IStoryProps) => {
  // const [expanded, setExpanded] = useState(true);

  // const toggle = () => setExpanded(p => !p);

  let im;
  let f;

  if (image) {
    im = image;
  } else {
    im = t0;
  }

  if (file) {
    f = <LinkedImage name={name} image={im} url={file} />;
  } else {
    f = <Image name={name} image={im} />;
  }

  return (
    <>
      <Col xs={24} md={12} lg={6}>
        <Card className="card-team" bordered={false} bodyStyle={{ padding: 0 }}>
          <div>{f}</div>
          <div className="custom-card">
            {name && <h3>{name}</h3>}
            {designation && <p>{designation}</p>}
            {region && <h4>{region}</h4>}

            <Button size="small" onClick={onClick}>
              Read more...
            </Button>
          </div>
        </Card>
      </Col>
      {expanded && (
        <Col xs={24} md={24} lg={18}>
          {story && (
            <div style={storyStyle}>
              <Paragraph>{story}</Paragraph>
            </div>
          )}
        </Col>
      )}
    </>
  );
};

Story.defaultProps = {
  expanded: false,
};

export default Story;
