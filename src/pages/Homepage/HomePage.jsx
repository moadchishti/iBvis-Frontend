import React from "react";
import styles from "./Homepage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect, useRef } from "react";
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
import whatsappIcon from "../../assets/icons/whatsapp.png";

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

  const myRef = useRef(null);
  const featuresRef = useRef(null);

  // const executeScroll = () => myRef.current.scrollIntoView('smooth')
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const jumpToFeaturesFunc = () => {
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.mainContent}>
        <Navbar jump={executeScroll} jumpToFeatures={jumpToFeaturesFunc} />

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
              Upgrade your CCTV with our AI solution for smarter, automated
              surveillance, production-line quality check, work-zone safety
              monitoring, and in/out control of both vehicles and people.. Enjoy
              features like breach detection, parking management, and vehicle
              monitoring—all in one easy-to-deploy device.
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
              <h3>AI for Security, Compliance & Analytics</h3>
              <p>
                Versatile AI for Quality Control, Security, Compliance, and
                Analytics—Tailored to Your Needs.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Edge AI Power</h3>
              <p>
                No Cloud Needed—All Your Data Remains Securely Stored On-Site
                for Complete Control and Privacy.
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
          <div className={styles.features} ref={featuresRef}>
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
                    performance to site inspections. Whether it’s quality
                    control, security, or operational analytics, our system
                    adapts to meet your specific needs.
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

      {/* <div className={styles.solutions}>
        <div className={styles.information}>
          <h3 className={styles.infoHeading}>AI for Your Business</h3>
        </div>
      </div> */}

      <section ref={myRef} id="target-section">
        <div className={styles.contact}>
          <div className={styles.information}>
            <h2>Contact Us to Enhance Your Business with AI</h2>
            <div className={styles.contactCards}>
              {/* <div className={styles.from}>
                <form className={styles.myForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Name *
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
                      Email *
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
                    <label htmlFor="phone" className={styles.label}>
                      Phone no. *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={styles.input}
                      required
                      placeholder="e.g., +1234567890"
                      pattern="^\+?[0-9\s\-]{7,15}$"
                      title="Enter a valid phone number (e.g., +1234567890)"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="organization" className={styles.label}>
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Check all the services you need *
                    </label>
                    <div className={styles.checkboxGroup}>
                      <div className={styles.checkBoxItem}>
                        <input
                          type="checkbox"
                          id="option1"
                          name="options"
                          value="option1"
                          className={styles.checkbox}
                          required
                        />
                        <label
                          htmlFor="option1"
                          className={styles.checkboxLabel}
                        >
                          Option 1
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="option2"
                          name="options"
                          value="option2"
                          className={styles.checkbox}
                          required
                        />
                        <label
                          htmlFor="option2"
                          className={styles.checkboxLabel}
                        >
                          Option 2
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="option3"
                          name="options"
                          value="option3"
                          className={styles.checkbox}
                          required
                        />
                        <label
                          htmlFor="option3"
                          className={styles.checkboxLabel}
                        >
                          Option 3
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="additionalMessage" className={styles.label}>
                      Other Services or Custom Needs
                    </label>
                    <textarea
                      id="additionalMessage"
                      name="additionalMessage"
                      className={styles.textarea}
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.button}>
                    Get Started
                  </button>
                </form>
              </div> */}
              <div className={styles.rightCards}>
                <div className={styles.meetingCard}>
                  <img className={styles.meetingIcon} src={meetingIcon} />
                  <h2 className={styles.meetingTitle}>Book a Meeting</h2>
                  <p className={styles.meetingText}>
                    Ready to explore the power of AI? Book a meeting to discuss
                    your project needs and find the right AI solutions.
                  </p>
                  <a
                    href="https://forms.gle/qPs2fPCYmM4JHjSo8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.meetingButton}>
                      Book a Meeting
                    </button>
                  </a>
                </div>
                <div className={styles.contactCard}>
                  <img className={styles.whatsappIcon} src={whatsappIcon} />
                  <h2 className={styles.contactTitle}>Connect on Whatsapp</h2>
                  <p>
                    Have a quick question or need immediate assistance? Reach
                    out on WhatsApp for a fast and direct response.
                  </p>

                  <button
                    className={styles.meetingButton}
                    onClick={() =>
                      window.open("https://wa.me/+923284411661", "_blank")
                    }
                  >
                    Message Us Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
