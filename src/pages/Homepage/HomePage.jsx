import React from "react";
import styles from "./Homepage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CursorBlinker from "../../components/CursorBlinker/CursorBlinker";
import A4Animation from "../../components/A4Animation/A4Animation";
import ParticlesComponent from "../../components/ParticlesComponent/ParticlesComponent";
// import ParticlesComponent from "../../components/ParticlesBackground/ParticlesComponent";
// import { motion } from "framer-motion";
import cameraIcon from "../../assets/icons/cameras.png";
import scan from "../../assets/icons/scan.png";
import edgeComputing from "../../assets/icons/edgeComputing.png";
import multipleIcone from "../../assets/icons/multipleIcon.png";
import meetingIcon from "../../assets/icons/meeting.png";

const text = "Gradual Spacing";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const HomePage = () => {
  const mainText = "AI for Safer ";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    mainText.slice(0, latest)
  );

  return (
    <>
      <div className={styles.mainContent}>
        <Navbar />

        <div className={styles.homepage}>
          <div
            className={styles.background}
            style={{ filter: "brightness(70%)" }}
          ></div>
          <div className={styles.introText}>
            <span className={styles.mainText}>
              <h1>AI for Enhanced</h1>
              {/* <div className={styles.animContainer}> */}
              <A4Animation />
              <CursorBlinker />
              {/* </div> */}
            </span>
            <p className={styles.description}>
              Upgrade your CCTV with our AI solution for smarter, real-time
              surveillance. Enjoy features like breach detection, parking
              management, and vehicle monitoring—all in one easy-to-deploy
              device.
            </p>
          </div>
          <div className={styles.moreInfo}>
            <div className={styles.card}>
              <h3>Seamless Integration</h3>
              <p>
                Upgrade your CCTV effortlessly with our plug-and-play AI
                device—no rewiring or camera replacements needed.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Edge AI Power</h3>
              <p>
                Enjoy real-time processing for breach detection, number plate
                scanning, and more, all without cloud reliance.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Smart Surveillance</h3>
              <p>
                Manage parking, monitor vehicles, and secure zones with advanced
                AI features in one compact solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.information}>
          <div className={styles.particles}>
            <ParticlesComponent className={styles.particles} />
          </div>
          {/* <h3 className={styles.infoHeading}>What we Offer</h3> */}
          <div className={styles.features}>
            <div className={styles.information}>
              <h3 className={styles.infoHeading}>Features</h3>
              {/* <div class={styles.featuresContainer}>
                
              </div> */}
            </div>
          </div>
          <div className={styles.points}>
            <div className={styles.grid_container}>
              <div className={styles.grid_item}>
                <motion.div
                  className={styles.grid_item}
                  initial={{ x: "-20%", opacity: "0" }} // Starts off-screen to the left
                  whileInView={{ x: 0, opacity: 1 }} // When in view, slide to position 0
                  transition={{ type: "spring", damping: 17, duration: 0.5 }} // Smooth transition
                  viewport={{ once: true }} // The animation triggers once when the element is in view
                >
                  <h1>Effortless System Compatibility</h1>
                  <p className={styles.pointDescription}>
                    Our solution seamlessly integrates with your existing CCTV
                    infrastructure, eliminating the need for expensive hardware
                    replacements or system overhauls. By leveraging
                    plug-and-play technology, we ensure quick deployment with no
                    disruption to your operations.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className={styles.grid_item}
                initial={{ x: "20%", opacity: "0" }} // Starts off-screen to the left
                whileInView={{ x: 0, opacity: 1 }} // When in view, slide to position 0
                transition={{ type: "spring", damping: 17, duration: 0.5 }} // Smooth transition
                viewport={{ once: true }} // The animation triggers once when the element is in view
              >
                <div class={styles.featuresBox}>
                  <h2 className={styles.featureHeading}>Plug and Play</h2>
                  <img src={cameraIcon} className={styles.icon} />
                  <p>
                    Upgrade Your System Without Rebuilding It: AI That Fits Your
                    Existing Infrastructure.
                  </p>
                </div>
              </motion.div>

              <div className={styles.grid_item}>
                <motion.div
                  className={styles.grid_item}
                  initial={{ x: "-20%", opacity: "0" }} // Starts off-screen to the left
                  whileInView={{ x: 0, opacity: 1 }} // When in view, slide to position 0
                  transition={{ type: "spring", damping: 17, duration: 0.5 }} // Smooth transition
                  viewport={{ once: true }} // The animation triggers once when the element is in view
                >
                  <h1>Enhanced Privacy with Local Processing</h1>
                  <p className={styles.pointDescription}>
                    With all AI computations processed locally using edge
                    computing, your sensitive data never leaves your premises.
                    This approach not only protects your privacy but also
                    ensures faster, more secure operations without relying on
                    external cloud servers.
                  </p>
                </motion.div>
              </div>
              <motion.div
                className={styles.grid_item}
                initial={{ x: "20%", opacity: "0" }} // Starts off-screen to the left
                whileInView={{ x: 0, opacity: 1 }} // When in view, slide to position 0
                transition={{ type: "spring", damping: 17, duration: 0.5 }} // Smooth transition
                viewport={{ once: true }} // The animation triggers once when the element is in view
              >
                <div class={styles.featuresBox}>
                  <h2 className={styles.featureHeading}>
                    Edge Computing for Privacy
                  </h2>

                  <img src={edgeComputing} className={styles.icon} />
                  <p>
                    With all AI computations processed locally using edge
                    computing, your sensitive data never leaves your premises.
                  </p>
                </div>
              </motion.div>

              <div className={styles.grid_item}>
                <motion.div
                  className={styles.grid_item}
                  initial={{ x: "-20%", opacity: "0" }} // Starts off-screen to the left
                  whileInView={{ x: 0, opacity: 1 }} // When in view, slide to position 0
                  transition={{ type: "spring", damping: 17, duration: 0.5 }} // Smooth transition
                  viewport={{ once: true }} // The animation triggers once when the element is in view
                >
                  <h1>Instant Intelligence from Live Data</h1>
                  <p className={styles.pointDescription}>
                    Our AI transforms live video streams into actionable
                    insights, enabling instant responses to critical events.
                    From detecting safety violations to monitoring production
                    lines, our solution helps you make informed decisions in
                    real-time, improving efficiency and safety.
                  </p>
                </motion.div>
              </div>
              <motion.div
                className={styles.grid_item}
                initial={{ x: "20%", opacity: "0" }} // Starts off-screen to the left
                whileInView={{ x: 0, opacity: 1 }} // When in view, slide to position 0
                transition={{ type: "spring", damping: 17, duration: 0.5 }} // Smooth transition
                viewport={{ once: true }} // The animation triggers once when the element is in view
              >
                <div class={styles.featuresBox}>
                  <h2 className={styles.featureHeading}>Real-Time Insights</h2>

                  <img src={scan} className={styles.icon} />
                  <p>
                    Instant responses to critical events. Our system processes
                    streams in real-time
                  </p>
                </div>
              </motion.div>

              <div className={styles.grid_item}>
                <motion.div
                  className={styles.grid_item}
                  initial={{ x: "-20%", opacity: "0" }} // Starts off-screen to the left
                  whileInView={{ x: 0, opacity: 1 }} // When in view, slide to position 0
                  transition={{ type: "spring", damping: 17, duration: 0.5 }} // Smooth transition
                  viewport={{ once: true }} // The animation triggers once when the element is in view
                >
                  <h1>Wide-Ranging Use Cases</h1>
                  <p className={styles.pointDescription}>
                    Our AI is designed to address a wide range of challenges,
                    from monitoring workplace compliance and machinery
                    performance to drone-powered site inspections. Whether it’s
                    quality control, security, or operational analytics, our
                    system adapts to meet your specific needs.
                  </p>
                </motion.div>
              </div>
              <motion.div
                className={styles.grid_item}
                initial={{ x: "-20%", opacity: "0" }} // Starts off-screen to the left
                whileInView={{ x: 0, opacity: 1 }} // When in view, slide to position 0
                transition={{ type: "spring", damping: 17, duration: 0.5 }} // Smooth transition
                viewport={{ once: true }} // The animation triggers once when the element is in view
              >
                <div class={styles.featuresBox}>
                  <h2 className={styles.featureHeading}>
                    Versatile Applications
                  </h2>

                  <img src={multipleIcone} className={styles.icon} />
                  <p>
                    Our AI adapts to meet challenges like compliance,
                    monitoring, inspections, and analytics.
                  </p>
                </div>
              </motion.div>
              {/* <div></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.solutions}>
        <div className={styles.information}>
          <h3 className={styles.infoHeading}>AI for Your Business</h3>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.information}>
          <h2>Contact Us to Enhance Your Business with AI</h2>
          <div className={styles.contactCards}>
            <div className={styles.from}>
              <form className={styles.myForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Organization / Company Name
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    required
                  ></textarea>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="dropdown" className={styles.label}>
                    Which option best describes your company?
                  </label>
                  <select
                    id="dropdown"
                    name="dropdown"
                    className={styles.select}
                    required
                  >
                    <option value="">Select...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="additionalMessage" className={styles.label}>
                    Tell us more about your project needs
                  </label>
                  <textarea
                    id="additionalMessage"
                    name="additionalMessage"
                    className={styles.textarea}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.button}>
                  Submit
                </button>
              </form>
            </div>
            <div className={styles.rightCards}>
              <div className={styles.meetingCard}>
                <img className={styles.meetingIcon} src={meetingIcon} />
                <h2 className={styles.meetingTitle}>Book a Meeting</h2>
                <p className={styles.meetingText}>
                  Ready to explore the power of AI? Book a meeting to discuss
                  your project needs and find the right AI solutions.
                </p>
                <button className={styles.meetingButton}>Book a Meeting</button>
              </div>
              <div className={styles.contactCard}>
                <h2 className={styles.contactTitle}>Contact</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
