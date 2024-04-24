import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import {
  Heading,
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { aboutTexts, experiences, educations, about } from "@/utils/about";
import { useRouter } from "next/router";
import useWindowSize from "../hooks/useWindowSize";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const BREAKPOINT = 945;

export default function About() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { width } = useWindowSize();
  const [aboutText, setAboutText] = useState("");

  const [parent] = useAutoAnimate();
  const [parentExperience] = useAutoAnimate();
  const [parentEducation] = useAutoAnimate();

  const [showHeader, setShowHeader] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showExperiences, setShowExperiences] = useState(false);
  const [showEducations, setShowEducations] = useState(false);

  useEffect(() => {
    const text = aboutTexts[router.locale];
    setAboutText(text);
    console.log("text", text);
  }, [router.locale]);

  useEffect(() => {
    setTimeout(() => setShowHeader(true), [300]);
    setTimeout(() => setShowText(true), [1000]);
    setTimeout(() => setShowExperiences(true), [300]);
    setTimeout(() => setShowEducations(true), [300]);
  }, []);

  return (
    <Layout>
      <Flex alignItems="center">
        <Box w="30%" p={4}>
          <Image
            borderRadius={6}
            src="/images/me.png"
            alt="Emirhan DOĞRU"
            boxShadow="lg"
            placeholder="blur"
            blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==`}
          />
        </Box>
        <Box w="70%" p={4} ref={parent}>
          {showHeader && (
            <Heading as="h2" size="lg" mb={3}>
              Emirhan DOĞRU
            </Heading>
          )}
          {showText && <Text>{aboutText}</Text>}
        </Box>
      </Flex>

      <Divider my={6} mt={8} />

      <Flex flexWrap="wrap">
        <Box w={width <= BREAKPOINT ? "100%" : "50%"} p={4}>
          <Center>
            <Heading as="h3" size="lg">
              {t("my_experiences")}
            </Heading>
          </Center>

          <Center>
            <Divider my={5} w="50%" />
          </Center>
          <Box ref={parentExperience} minH={500}>
            {showExperiences &&
              about.map((data) => (
                <Box key={data.id}>
                  <Flex alignItems="center" flexWrap="wrap">
                    <Heading as="h5" size="md" mr={2} padding={2} w="100%">
                      {data[router.locale].title}
                    </Heading>
                  </Flex>
                  {/* <Text as="p" padding={2}>
                    {experience.location} | {experience.years}
                  </Text>
                  <Text fontSize="sm" color="green.200" as="i" padding={2}>
                    ● {experience.company}
                  </Text>
                  <Divider my={4} /> */}
                  <Flex padding={2}>
                    <Text as="p">{data[router.locale].description}</Text>

                  </Flex>
                  <Flex padding={2} alignItems="center">
                    <ul style={{ padding: 0, }}>
                  {  data[router.locale].subcontent.map((subdata) => (
                      <li key={subdata.id} style={{ marginLeft: "20px" , marginBottom : 10 }}>
                        <Heading as="h6" size="xs">
                          {subdata.subtitle}
                        </Heading>
                        <Text as="p" flex="1">{subdata.subdescription}</Text>
                      </li>
                    ))}
                    </ul>
                  </Flex>
                  <Flex padding={2}>
                    <Text as="p">{data[router.locale].footerDescription}</Text>

                  </Flex>
                </Box>
              ))}

          </Box>
        </Box>

        <Spacer />

        <Box w={width <= BREAKPOINT ? "100%" : "50%"} p={4}>
          <Center>
            <Heading as="h3" size="lg">
              {t("my_trainings")}
            </Heading>
          </Center>
          <Center>
            <Divider my={5} w="50%" />
          </Center>

          <Box ref={parentEducation}>
            {showEducations &&
              educations.map((education) => (
                <Box key={education.id}>
                  <Heading as="h5" size="md" padding={2}>
                    {education.title[router.locale]}
                  </Heading>

                  <Flex padding={2}>
                    <Text as="p">{education.location}</Text>
                    <Text mx={2}> | </Text>
                    <Text color="green.200">{education.years}</Text>
                  </Flex>

                  <Divider my={4} />
                </Box>
              ))}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
