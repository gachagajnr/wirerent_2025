"use client";

import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./footer.module.css";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
    ],
  },

  {
    title: "Community",
    links: [
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
     ],
  },
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {/* <MantineLogo size={30} /> */}
          Wirerent
          <Text size="xs" c="dimmed" className={classes.description}>
            Reliable & convenient home solutions.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 roundhs.com All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaTwitterSquare size={18} stroke="1" />
          </ActionIcon>

          <ActionIcon size="lg" color="gray" variant="subtle">
            <FaInstagram size={18} stroke="1" />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
