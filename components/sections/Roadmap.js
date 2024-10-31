import { useRef, useEffect } from "react";

export default function Roadmap() {

  const title = "Roadmap";
  const subtle = "A Look at the Path Ahead";
  const year = "2025";

  const roadmapPrevious = [
    {
      title: "2020",
      description: [
        {
          text: "Koinos Announced",
          icon: "fa-solid fa-bullhorn",
          description: "Prior to the launch of the ERC-20 mining process which created the initial supply of KOIN, Koinos was announced publicly a month in advance on several popular platforms including bitcointalk.org, Medium, X, and SteemIt.",
        },
        {
          text: "Proof-of-Work Initial Supply Distribution",
          icon: "fa-solid fa-parachute-box",
          description: "To bootstrap our ecosystem and unique consensus algorithm, the initial supply of KOIN was mined publicly on the Ethereum blockchain.",
        },
      ],
      status: "done",
    },
    {
      title: "2021",
      description: [
        {
          text: "Testnet",
          icon: "fa-solid fa-landmark",
          description: "A simplified test network was launched to both prove out architecture of the Koinos Blockchain Framework and improve system stability during development.",
        },
        {
          text: "Koinos Command Line Interface (CLI)",
          icon: "fa-solid fa-code",
          description: "An advanced command-line wallet was developed in order to facilitate blockchain interactions prior to the development of user facing tools.",
        },
        {
          text: "Proof-of-Burn Development",
          icon: "fa-solid fa-fire",
          description: "The implementation for Proof-of-Burn began and was later deployed on our test network without the need for a hardfork. This was a major milestone and Proof-of-Concept.",
        },
        {
          text: "Protobuf Integration",
          icon: "fa-solid fa-code",
          description: "Using industry standard tooling is important for developer adoption. Protocol buffers was chosen due to its support in a wide variety of languages and market dominance.",
        },
      ],
      status: "done",
    },
    {
      title: "2022",
      description: [
        {
          text: "Decentralized Governance Development",
          icon: "fa-solid fa-scale-balanced",
          description: "We believe in the benefits of decentralized, at the same time, we understand that the blockchain must evolve with the ecosystem. A decentralized governance solution was developed to faciliate upgrades to the protocol without a centralized authority.",
        },
        {
          text: "Mana System Development",
          icon: "fa-solid fa-wand-magic-sparkles",
          description: "In order to deliver a user experience designed for everyday people -- we needed to eliminate transaction fees. The revolutionary mana system handles blockchain resources unlike any other blockchain.",
        },
        {
          text: "Mainnet Go-Live (November 5th)",
          icon: "fa-solid fa-landmark",
          description: "After all necessary features were developed and tested, the Koinos main network was launched live on YouTube on November 5th.",
        },
      ],
      status: "done",
    },
    {
      title: "2023",
      description: [
        {
          text: "Microservice Improvements",
          icon: "fa-solid fa-box",
          description: "During the first year of the Koinos main network, each microservice was worked on in order to improve stability and performance.",
        },
        {
          text: "First In-band Upgrade",
          icon: "fa-solid fa-circle-up",
          description: "Bugs happen. A regression was identified in one of the core tokens, VHP. Thankfully, the bug was not exploited and we had the opportunity to utilize our in-band upgrade and governance system to patch the issue without stopping the chain.",
        },
      ],
      status: "done",
    },
    {
      title: "2024",
      description: [
        {
          text: "REST API",
          icon: "fa-solid fa-server",
          description: "The 3rd party microservice, REST API, was adopted into the core package of microservices with minor modifications. It offered a much better developer experience than our existing JSON-RPC microservice.",
        },
        {
          text: "KOIN & VHP KCS-4 Upgrade",
          icon: "fa-solid fa-circle-up",
          description: "Our original vision of smart wallets for everyone did not come to fruition. A baseline of security was demanded by the community. That led to the development of the KCS-4 standard and the upgrade of core tokens.",
        },
        {
          text: "Mempool v1.5",
          icon: "fa-solid fa-box",
          description: "Developers need to increment nonces when sending subsequent transactions. This is an unnecessary burden on the developer. The mempool will be improved to assist developers and move that burden onto the Koinos cluster.",
        },
      ],
      status: "todo",
    }
  ];

  const roadmap = [
    {
      title: "Q1",
      description: [
        {
          text: "Public Snapshots",
          icon: "fa-solid fa-file",
          description: "We have had some developers at different times upload Koinos snapshots for general use. However, we have never had a dedicated service for this. It will benefit the entire community if official snapshots are generated and shared.",
        },
        {
          text: "REST API v1.1",
          icon: "fa-solid fa-server",
          description: "The Koinos REST API has been a great addition to our infrastructure. Enhancements need to be made so it has feature parity with JSON-RPC and more to better meet developer needs."
        },
      ],
      status: "todo",
    },
    {
      title: "Q2",
      description: [
        {
          text: "Authority System v2",
          icon: "fa-solid fa-wallet",
          description: "The idea behind letting contracts define their own authorization logic is a fantastic feature of Koinos, but this feature remains underutilized because the design is complicated and difficult to explain to developers. The entire system will be simplified so it easier to use for developers."
        },
      ],
      status: "todo",
    },
    {
      title: "Q3",
      description: [
        {
          text: "Client Libraries",
          icon: "fa-solid fa-code",
          description: "Some of the most requested library languages, from developers and partners, are Python and Golang. With the updated REST API, we want to create client libraries for these languages and many more to reach developers where they are currently at."
        },
        {
          text: "C SDK",
          icon: "fa-solid fa-code",
          description: "Koinos currently has two SDKs for building smart contracts, C++ and Assembly Script (AS). We will create a C SDK which will not only give developers yet another powerful option for writing smart contracts, it will also lay the foundation for adding even more languages in the future and creating an even better C++ SDK."
        },
      ],
      status: "todo",
    },
    {
      title: "Q4",
      description: [
        {
          text: "VSCode Extension",
          icon: "fa-solid fa-code",
          description: "An important tool that Koinos is missing is a full integrated development environment (IDE). This extension will provide a first party experience, streamlining and simplifying the development, testing, and deployment of Koinos smart contracts making it even easier to build on Koinos."
        },
      ],
      status: "todo",
    },
  ];

  const beyondRoadmap = [
    {
      title: "",
      description: [
        {
          text: "C++ SDK",
          icon: "fa-solid fa-code",
          description: "After the C SDK, we want to recreate a new and improved C++ SDK. This is the simplest language to do this with, but will ensure we have designed the C SDK well enough to be used as a core for future SDKs.",
        },
      ],
      status: "todo",
    },
    {
      title: "",
      description: [
        {
          text: "Rust SDK",
          icon: "fa-solid fa-code",
          description: "Rust also supports calling C functions and is an increasingly popular language, especially within the crypto space. By adding Rust support, we can extend our reach to even more developers and demonstrate the flexibility of the Koinos VM."
        },
      ],
      status: "todo",
    },
    {
      title: "",
      description: [
        {
          text: "WASM VM Optimizations",
          icon: "fa-solid fa-code",
          description: "We will analyze the current state of WASM VMs and test different VMs for performance and compatibility with Koinos. As a result of improved performance, we will be able to increase resource budgets, which will decrease mana costs for all transactions."
        },
      ],
      status: "todo",
    },
    {
      title: "",
      description: [
        {
          text: "Data Store Microservice",
          icon: "fa-solid fa-server",
          description: "The data store microservice will be a replacement microservice for the block store, transaction store, and account history. Running a Koinos node will require considerably less disk space than it currently does.",
        },
      ],
      status: "todo",
    },
    {
      title: "",
      description: [
        {
          text: "Redundant Microservices",
          icon: "fa-solid fa-server",
          description: "Improve scaling and redundancy for microservices within the Koinos cluster. By adding support for scaling individual microservices, nodes in enterprise environments become more performant and redundant."
        },
      ],
      status: "todo",
    },
    {
      title: "",
      description: [
        {
          text: "Optimistic Execution of Transactions",
          icon: "fa-solid fa-code",
          description: "Allowing unrelated transactions to execute in parallel will drastically improve throughput of the Koinos blockchain. The work needed to implement this optimization will allow the framework to interact with transactions in more ways that help create building blocks that will enable drastic improvements in the future."
        },
      ],
      status: "todo",
    },
    {
      title: "",
      description: [
        {
          text: "Dynamic Sharding",
          icon: "fa-solid fa-code",
          description: "Dynamic sharding allows the blockchain to split into smaller pieces based on usage. Block producers then become responsible for a subset of the whole blockchain while ensuring sufficient overlap to guarantee consistency and decentralization."
        },
      ],
      status: "todo",
    },
  ];

  return (
    <>
      <section id="roadmap" className="pt-100 pb-100 ct-04 content-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title mb-70">
                {/* Title */}
                <h2 className="s-50 w-700">{title}</h2>
                {/* Text */}
                <p className="s-21 color--grey">{subtle}</p>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT (ROW) */}
          <div className="row d-flex">
            {/* TEXT BLOCK */}
            <div className="col-md-12 order-last order-md-2">
              <div className="txt-block left-column wow">
                {roadmapPrevious.map((item, index) => (
                  <div data-aos='fade-up'>
                    <div key={index} className="cbox-2 process-step">
                      <div className="cbox-2-txt me-4">
                        {index % 2 > 0 && (
                          <>
                            <h5 className="text-end">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="text-end d-flex align-items-center justify-content-end gap-3">
                                  <div>{obj.text}</div>
                                  <div className="d-flex justify-content-center d-none d-md-flex" style={{ width: '42px', minWidth: '42px' }}><i className={`m-2 ${obj.icon}`}></i> </div>
                                </div>
                                <div className="text-end roadmap-desc ms-auto w-75 d-flex justify-content-center d-none d-md-flex s-15 mb-3">{obj.description}</div>
                              </div>

                            ))}
                          </>
                        )}
                      </div>
                      {/* Icon */}
                      <div className="ico-wrap">
                        {item.status === "done" && (
                          <img className="cbox-2-ico" src="images/sections/logo-filled.png" />
                        )}
                        {item.status !== "done" && (
                          <img className="cbox-2-ico" src="images/sections/logo-hollow.png" />
                        )}
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        {index % 2 == 0 && (
                          <>
                            <h5 className="">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                  <div className="d-flex justify-content-center d-none d-md-flex" style={{ width: '42px', minWidth: '42px' }}><i className={`m-2 ${obj.icon}`}></i></div>
                                  <div>{obj.text}</div>
                                </div>
                                <div className="roadmap-desc w-75 d-flex justify-content-center d-none d-md-flex s-15 mb-3">{obj.description}</div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="section-title my-5">
                      {/* Title */}
                      <h2 className="s-50 w-700">{year}</h2>
                    </div>
                  </div>
                </div>

                {roadmap.map((item, index) => (
                  <div data-aos='fade-up'>
                    <div key={index} className="cbox-2 process-step">
                      <div className="cbox-2-txt me-4">
                        {index % 2 == 0 && (
                          <>
                            <h5 className="text-end s-22 w-700">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="text-end d-flex align-items-center justify-content-end gap-3">
                                  <div>{obj.text}</div>
                                  <div className="d-flex justify-content-center d-none d-md-flex" style={{ width: '42px', minWidth: '42px' }}><i className={`m-2 ${obj.icon}`}></i> </div>
                                </div>
                                <div className="text-end roadmap-desc w-75 ms-auto d-flex justify-content-center d-none d-md-flex mb-3">{obj.description}</div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                      {/* Icon */}
                      <div className="ico-wrap">
                        {item.status === "done" && (
                          <img className="cbox-2-ico" src="images/sections/logo-filled.png" />
                        )}
                        {item.status !== "done" && (
                          <img className="cbox-2-ico" src="images/sections/logo-hollow.png" />
                        )}
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        {index % 2 != 0 && (
                          <>
                            <h5 className="s-22 w-700">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                  <div className="d-flex justify-content-center d-none d-md-flex" style={{ width: '42px', minWidth: '42px' }}><i className={`m-2 ${obj.icon}`}></i></div>
                                  <div>{obj.text}</div>
                                </div>
                                <div className="roadmap-desc w-75 d-flex justify-content-center d-none d-md-flex s-15 mb-3">{obj.description}</div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="section-title my-5">
                      {/* Title */}
                      <h2 className="s-50 w-700">Beyond 🚀</h2>
                    </div>
                  </div>
                </div>

                {beyondRoadmap.map((item, index) => (
                  <div data-aos='fade-up'>
                    <div key={index} className="cbox-2 process-step">
                      <div className="cbox-2-txt me-4">
                        {index % 2 == 0 && (
                          <>
                            <h5 className="text-end s-22 w-700">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="text-end d-flex align-items-center justify-content-end gap-3">
                                  <div>{obj.text}</div>
                                  <div className="d-flex justify-content-center d-none d-md-flex" style={{ width: '42px', minWidth: '42px' }}><i className={`m-2 ${obj.icon}`}></i> </div>
                                </div>
                                <div className="text-end roadmap-desc w-75 ms-auto d-flex justify-content-center d-none d-md-flex mb-3">{obj.description}</div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                      {/* Icon */}
                      <div className="ico-wrap">
                        {item.status === "done" && (
                          <img className="cbox-2-ico" src="images/sections/logo-filled.png" />
                        )}
                        {item.status !== "done" && (
                          <img className="cbox-2-ico" src="images/sections/logo-hollow.png" />
                        )}
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        {index % 2 != 0 && (
                          <>
                            <h5 className="s-22 w-700">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                  <div className="d-flex justify-content-center d-none d-md-flex" style={{ width: '42px', minWidth: '42px' }}><i className={`m-2 ${obj.icon}`}></i></div>
                                  <div>{obj.text}</div>
                                </div>
                                <div className="roadmap-desc w-75 d-flex justify-content-center d-none d-md-flex s-15 mb-3">{obj.description}</div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>{" "}
          {/* END SECTION CONTENT (ROW) */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
