import { Card } from "antd";
import React from "react";
import t0 from "../images/t0.jpg";

interface IImageProps {
  name?: string;
  image: any;
}

interface ILinkedImageProps {
  name?: string;
  url?: string;
  image: any;
}

interface IProfileProps {
  name?: string;
  designation?: string;
  region?: string;
  image: any;
  file?: string;
}

const Image = ({ name, image }: IImageProps) => {
  return (
    <div className="custom-image">
      <img alt={name} width="100%" src={image} />
    </div>
  );
};

const LinkedImage = ({ url, name, image }: ILinkedImageProps) => {
  return (
    <a href={url}>
      <Image name={name} image={image} />
    </a>
  );
};

export default ({ name, designation, region, image, file }: IProfileProps) => {
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
    <Card className="card-team" bordered={false} bodyStyle={{ padding: 0 }}>
      <div>{f}</div>
      <div className="custom-card">
        {name && <h3>{name}</h3>}
        {designation && <p>{designation}</p>}
        {region && <h4>{region}</h4>}
      </div>
    </Card>
  );
};
