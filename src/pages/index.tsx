import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Col, Row } from "antd";
import { Link } from "gatsby";
import { FacebookProvider, Page } from "react-facebook";
import {
  GlobalOutlined,
  TeamOutlined,
  CommentOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import SEO from "../components/Seo";
import Layout from "../components/layouts/HomeLayout";
import Slideshow from "../components/Slideshow";
import Teaser from "../components/Teaser";

import {
  ClocheCover,
  HandHoldingSeedling,
  HeartPlant,
} from "@vectopus/atlas-icons-react";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Slideshow />

      <div className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get Involved
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Collaborate with us to build a better world for everyone
            </p>
          </div>
        </div>

        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 mx-auto max-w-7xl gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                <li className="flex flex-col col-span-1 text-center divide-y divide-gray-200 rounded-lg shadow group hover:bg-yellow-400 bg-brand">
                  <Link to="/education" className="flex flex-col flex-1 p-8">
                    <GlobalOutlined
                      className="mx-auto text-white text-7xl group-hover:text-black"
                      alt=""
                    />
                    <h3 className="mt-6 text-lg font-bold text-green-200 uppercase group-hover:text-black">
                      Save the planet
                    </h3>
                    <p className="text-green-100 text-md group-hover:text-black">
                      Promote healthy food produced by organic farming and
                      contribute to the ecological balance of the planet
                    </p>
                  </Link>
                </li>

                <li className="flex flex-col col-span-1 mx-auto text-center divide-y divide-gray-200 rounded-lg shadow group hover:bg-orange-400 bg-brand">
                  <Link to="/volunteer" className="flex flex-col flex-1 p-8">
                    <TeamOutlined
                      className="mx-auto text-white text-7xl group-hover:text-black"
                      alt=""
                    />
                    <h3 className="mt-6 text-lg font-bold text-green-200 uppercase group-hover:text-black">
                      Become a volunteer
                    </h3>
                    <p className="text-green-100 text-md group-hover:text-black">
                      Join the ecological movement by associating with KVM as
                      Intern, Supporter, Campaigner and Donor
                    </p>
                  </Link>
                </li>

                <li className="flex flex-col col-span-1 mx-auto text-center divide-y divide-gray-200 rounded-lg shadow group hover:bg-blue-400 bg-brand">
                  <Link to="/publications" className="flex flex-col flex-1 p-8">
                    <CommentOutlined
                      className="mx-auto text-white text-7xl group-hover:text-black"
                      alt=""
                    />
                    <h3 className="mt-6 text-lg font-bold text-green-200 uppercase group-hover:text-black">
                      Participate & Promote
                    </h3>
                    <p className="text-green-100 text-md group-hover:text-black">
                      Learn more about organic farming from our publications and
                      attend Kudrati Kisan Haats in your city
                    </p>
                  </Link>
                </li>

                <li className="flex flex-col col-span-1 mx-auto text-center divide-y divide-gray-200 rounded-lg shadow group hover:bg-pink-400 bg-brand">
                  <Link to="/donate" className="flex flex-col flex-1 p-8">
                    <SmileOutlined
                      className="mx-auto text-white text-7xl group-hover:text-black"
                      alt=""
                    />
                    <h3 className="mt-6 text-lg font-bold text-green-200 uppercase group-hover:text-black">
                      Donate Now!
                    </h3>
                    <p className="text-green-100 text-md group-hover:text-black">
                      Donate and contribute to a movement for ecological
                      rejuvenation of Punjab and its agricultural heritage
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See us in action
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              The Pioneers of the ‘Organic Movement' in Punjab
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 pb-12 mx-auto mt-10 bg-white sm:pb-16 max-w-7xl gap-y-12 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
          <div className="col-span-1 px-4 py-4 mx-auto sm:px-6 lg:px-8 md:py-0">
            <h2 className="text-lg font-brand">Upcoming Events</h2>

            <ul role="list">
              <li>
                <div className="relative pb-4">
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full ring-12 ring-white">
                        <ClocheCover size={26} className="w-8 h-8 text-white" />
                      </span>
                    </div>
                    <div className="flex justify-between flex-1 min-w-0 space-x-4">
                      <div>
                        <p className="font-medium text-md">
                          Millets' Lunch for MLAs of Haryana and Administrative
                          officials of Chandigarh
                        </p>
                        <p className="text-sm text-gray-500">
                          Haryana Vidhan Sabha, Chandigarh
                        </p>
                      </div>
                      <div className="text-sm text-right text-gray-500 whitespace-nowrap">
                        <div>Dec 27, 2022</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-4">
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full ring-8 ring-white">
                        <ClocheCover size={24} className="w-5 h-5 text-white" />
                      </span>
                    </div>
                    <div className="flex justify-between flex-1 min-w-0 space-x-4">
                      <div>
                        <p className="font-medium text-md">
                          Millets' Lunch for 50 Senior Journalists (accredited
                          by PIB, Government of India)
                        </p>
                        <p className="text-sm text-gray-500">New Delhi</p>
                      </div>
                      <div className="text-sm text-right text-gray-500 whitespace-nowrap">
                        <div>Dec 28, 2022</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-4">
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full ring-8 ring-white">
                        <HandHoldingSeedling
                          size={24}
                          className="w-5 h-5 text-white"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between flex-1 min-w-0 space-x-4">
                      <div>
                        <p className="font-medium text-md">
                          Inauguration of International Year of Millets 2023
                          Festival by KVM team
                        </p>
                        <p className="text-sm text-gray-500">Jaitu, Faridkot</p>
                      </div>
                      <div className="text-sm text-right text-gray-500 whitespace-nowrap">
                        <div>Jan 1, 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-4">
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="flex items-center justify-center w-8 h-8 bg-pink-500 rounded-full ring-8 ring-white">
                        <HeartPlant size={24} className="w-5 h-5 text-white" />
                      </span>
                    </div>
                    <div className="flex justify-between flex-1 min-w-0 space-x-4">
                      <div>
                        <p className="font-medium text-md">
                          Inauguration of Millets' Mithai and Meals for about
                          600 inmates
                        </p>
                        <p className="text-sm text-gray-500">
                          Burail Jail, Chandigarh
                        </p>
                      </div>
                      <div className="text-sm text-right text-gray-500 whitespace-nowrap">
                        <div>Jan 1, 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full ring-8 ring-white">
                        <ClocheCover size={24} className="w-5 h-5 text-white" />
                      </span>
                    </div>
                    <div className="flex justify-between flex-1 min-w-0 space-x-4">
                      <div>
                        <p className="font-medium text-md">
                          Millets' Lunch for Chandigarh Administration hosted by
                          Hon’ble Governor Sh. Banwari Lal Purohit
                        </p>
                        <p className="text-sm text-gray-500">Chandigarh</p>
                      </div>
                      <div className="text-sm text-right text-gray-500 whitespace-nowrap">
                        <div>Jan 2, 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-1 py-4 md:py-0">
            <div style={{ border: "0", padding: "10px" }}>
              <FacebookProvider appId="195658071778073">
                <Page
                  href="https://www.facebook.com/khetivirasatmissionjaitu"
                  tabs="timeline"
                  showFacepile={true}
                  smallHeader={false}
                  adaptContainerWidth={true}
                  width={460}
                  height={600}
                />
              </FacebookProvider>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Community
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              We are a close-knit group with common goal of improving the state
              of agriculture, health and environment in Punjab and India
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Organic Farmers
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600">
                      500+
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Women Farmers
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600">
                      100+
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      Villages Reached
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600">
                      100+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Bridging the gap between farmers, consumers, experts by providing
              a common platform to interact, guide and serve each other
            </p>
          </div>
        </div>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Row className="pb-12 mt-10 bg-white sm:pb-16" gutter={12}>
            <Col xs={24} md={12} className="py-4 lg:py-0">
              <Teaser />
            </Col>
            <Col xs={24} md={12} className="py-4 lg:py-0">
              <div className="max-w-full mx-auto video-responsive">
                <iframe
                  style={{
                    border: "none",
                    padding: "0px",
                    width: "100%",
                    height: "420px",
                  }}
                  width="700"
                  height="420"
                  src="https://www.youtube.com/embed/videoseries?list=PLKMOgZ4mfxOvPSj2bxCYxG752mfTvG1o-"
                  allow="autoplay; encrypted-media"
                  allowFullScreen={true}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Partners
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Engaging collaboration with dynamic partners who believe in our
              vision and empower us for action in saving farming ecosystem,
              health, soil and the planet
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-5">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <StaticImage
                      src="../images/collaboration/asha.png"
                      alt="Aasha Foundation"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <StaticImage
                      src="../images/collaboration/ongc.png"
                      alt="ONGC Foundation"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <StaticImage
                      src="../images/collaboration/reliance.png"
                      alt="Reliance Foundation"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <StaticImage
                      src="../images/collaboration/azim.png"
                      alt="Azim Premji Foundation"
                      placeholder="blurred"
                    />
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <StaticImage
                      src="../images/collaboration/csa.png"
                      alt="CSA Foundation"
                      placeholder="blurred"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
