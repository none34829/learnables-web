"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About Learnables" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">The Learnables Tablet</span> is a revolutionary learning tool designed to transform the way children engage with educational content. Combining cutting-edge technology with interactive features, the educational tablet offers a dynamic and immersive learning experience for{" "}
        <span className="font-extrabold text-white">
          {" "}
          young learners.{" "}
        </span>{" "}
        With its sleek design and user-friendly interface, it provides access to a wide range of educational materials, including interactive lessons, games, and learning apps tailored to various subjects and age groups. Equipped with parental controls, the tablet offers peace of mind to parents, allowing them to monitor and manage their child's educational journey. Whether used in classrooms or at home, {" "}
        <span className="font-extrabold text-white"> the educational tablet </span>empowers children to explore, learn, and discover in a fun and engaging way,{" "}
        <span className="font-extrabold text-white">fostering</span> a lifelong love for learning.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
