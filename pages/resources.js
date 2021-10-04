import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Resources/Hero";
import Resource from "../components/Resources/Resource";

export default function Timeline() {
  return (
    <div>
      <Head>
        <title>Techbook</title>
        <meta name="description" content="Techbook" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <Hero />
        {/* PMO TEAM START */}
        <Resource
          isgray
          heading="PMO Team"
          desc="The Enterprice Project Management Office (EPMO) helps ensure the
            success of every project with respect to the quality, time and cost
            dimensions of the project. Within the IT Department EPMO is
            responsible for alignment of project and program with the
            Management's roadmap, establishing and ensuring appropriate
            enterprise governance, and management of functions to ensure
            strategy alignment and benefits realization. EPMO is also
            responsible for providing project Managers/ Business Analysts that
            perform requirenment assesment including support for data
            management, coordination of governance and reporting and
            andministrative activities to support the project or project team.
            EPMO provides continuous NIR/project status updates to management
            throughput the organization with weekly portfolio Review and Weekly
            Project Scorecards."
        >
          <>
            <div className="flex flex-col ">
              <div className=" ho text-[2.25rem] font-bold mt-6 mb-[-0.2rem]">
                SOP
              </div>
              <div className="flex ">
                <a href="/dummy.docx" className="flex flex-col items-center">
                  <img className="w-[2rem] mt-4" src="/home/Group 555.svg" />
                  <p className=" text-[10px] text-sm text-[#707070] mt-2">
                    EPMO policy v1.0 pdf
                  </p>
                </a>
              </div>
            </div>

            <div className=" ho text-[1.5rem] font-bold mt-8 ">
              Sample Template - Documents
            </div>
            <div className="flex flex-wrap gap-[0.5rem] mt-6">
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  01- RFC Template.docx
                </p>
              </a>
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="text-[#707070]  mt-2 text-[10px] max-w-[5rem] text-center">
                  02- Project Charter Template.docx
                </p>
              </a>
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  03- FSD Template.docx
                </p>
              </a>

              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  04- Metting Minutes Template.docx
                </p>
              </a>

              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 593.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  Weekly Project Status Template.docx
                </p>
              </a>

              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  05- Project Closure Report Template.docx
                </p>
              </a>
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  06- NIR Template.docx
                </p>
              </a>
            </div>
          </>
        </Resource>
        {/* PMO TEAM END */}

        {/* SQA TEAM START */}

        <Resource
          heading="SQA Team"
          desc="The Scope Of SQA is to monitors every phase of the software
        development process so as to ensure design quality, making sure that
        the software adheres to the standard set by the development company.
        Also, make sure that new products work before they are released to
        the public. Basically SQA, engineer is involved in tasks that
        include software design, control of source code, configuration
        management, program testing, integration of software, and release
        management process. He or She will typically break up the entire
        prcoess into goals such as verifications, activities, measurements."
        >
          <>
            <div className="flex flex-col">
              <div className=" ho sop">SOP</div>
              <div className="flex">
                <p className="tracking-wide text-sm mt-6 max-w-[56rem] text-[#707070] ">
                  This team describes an integrated system of management
                  activities involving planning, implementation, documentation,
                  assesment, and improvement to ensure the that a process, or
                  item, is of the type and qualify needed for the project.
                  quality assurance is one of the key ingredients of creating
                  good software. While our full QA process, which is described
                  below, is used when we develop high integrity software for an
                  Information Texhnology (IT) industry, we use a reasonable
                  subset for all our non-IT Projects.
                  <ul className="list-disc mt-2 ml-[1.2rem]">
                    <li className="pl-2">Requirenment Gathering </li>
                    <li className="pl-2">Planning </li>
                    <li className="pl-2">Design </li>
                    <li className="pl-2">Development </li>
                    <li className="pl-2">Testing </li>
                    <li className="pl-2">De[ployment </li>
                    <li className="pl-2">Mentenance </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className=" ho text-[1.5rem] font-bold mt-8 ">
              Sample Template - Documents
            </div>
            <div className="flex flex-wrap gap-[0.5rem] mt-6">
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  01- RFC Template.docx
                </p>
              </a>
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="text-[#707070]  mt-2 text-[10px] max-w-[5rem] text-center">
                  02- Project Charter Template.docx
                </p>
              </a>
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  03- FSD Template.docx
                </p>
              </a>

              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  04- Metting Minutes Template.docx
                </p>
              </a>

              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 593.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  Weekly Project Status Template.docx
                </p>
              </a>

              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  05- Project Closure Report Template.docx
                </p>
              </a>
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  06- NIR Template.docx
                </p>
              </a>
            </div>
          </>
        </Resource>

        {/* SQA TEAM END */}

        {/* WEB APP DEVELOPMENT START */}

        <Resource
          isgray
          heading="WEB/ APP Development"
          desc="The scope of the development team is to plan, analyze, program, and
        test throughout the cource of the project."
        >
          <>
            <div className="flex flex-col">
              <div className="ho sop">SOP</div>
              <div className="flex">
                <p className="tracking-wide text-sm mt-6 max-w-[56rem] text-[#707070] ">
                  The process is an integrated, flexible approach to product
                  development that involves all functional groups at all levels
                  within TCS. It provides direction for successfully managing
                  the development of products. The process consists of basic
                  elements: New Initiative Request, Product Development, and
                  Production Support.
                  <ol className="list-decimal	 mt-2 ml-[1.3rem] ">
                    <li className="pl-2">
                      {" "}
                      NIR Submitted (initiated by anyone){" "}
                    </li>
                    <li className="pl-2">
                      {" "}
                      If approved PM involves w/respective parties.{" "}
                    </li>
                    <li className="pl-2">
                      Finalize business goal/process flows.{" "}
                    </li>
                    <li className="pl-2">
                      Development team share timelines to PM{" "}
                    </li>
                    <li className="pl-2">
                      Resources engaged with development process{" "}
                    </li>
                    <li className="pl-2">
                      PM check project status on daily/weekly basis{" "}
                    </li>
                    <li className="pl-2">
                      Align meetings if required on any process modification{" "}
                    </li>
                    <li className="pl-2">
                      UAT/QA team aligned with development team.{" "}
                    </li>
                    <li className="pl-2">Pre-Production testing </li>
                    <li className="pl-2">
                      Knowledge transfer to Production support team
                    </li>
                    <li className="pl-2">
                      {" "}
                      Production Support team will monitor it on daily basis{" "}
                    </li>
                  </ol>
                  <h4 className="ho text-[1.5rem] font-bold mt-6 text-black">
                    If Issues are reported
                  </h4>
                  <ol className="list-decimal mt-2 ml-[1.3rem] ">
                    <li className="pl-2">
                      {" "}
                      Production support team will check UX or glitches/bugs and
                      forward to the development team if there is any critical
                      issues or get technical details if required.{" "}
                    </li>
                    <li className="pl-2">
                      {" "}
                      If there is any change request during issue fixes then PM
                      is involved and NIR is submitted.{" "}
                    </li>
                    <li className="pl-2">
                      {" "}
                      Development team will fix those issues on QA environment
                      and QA team test the new changes.
                    </li>
                    <li className="pl-2"> Pre-Production testing </li>
                    <li className="pl-2">
                      {" "}
                      Knowledge transfer to Production support team{" "}
                    </li>
                    <li className="pl-2">
                      {" "}
                      Production Support team will monitor it on daily basis.{" "}
                    </li>
                  </ol>
                </p>
              </div>
            </div>

            <div className=" ho text-[1.5rem] font-bold mt-8 ">
              Sample Template - Documents
            </div>
            <div className="flex gap-8 mt-6">
              <a
                href="/dummy.docx"
                className="flex flex-col items-center flex-wrap"
              >
                <img src="/home/Group 561.svg" className="w-[2rem]" />
                <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                  Technical Documentation
                </p>
              </a>
            </div>
          </>
        </Resource>

        {/* WEB APP DEVELOPMENT END */}

        {/* ORACLE START */}

        <Resource
          heading="Oracle Development Team"
          desc="The scope of the development team is to plan, analyze, program, and
        test throughout the cource of the project."
        >
          <>
            <div className="flex flex-col">
              <div className=" ho sop">SOP</div>
              <div className="flex">
                <p className="text-sm tracking-wide mt-6 max-w-[56rem] text-[#707070] ">
                  This process is an integrated flexible approach to product
                  development that involves all functional groups at all levels
                  within TCS. Tt provides direction for successfully managing
                  the development of products. The process consists of basic
                  elements: New initiative Request, Product Development, and
                  Production Support.
                </p>
              </div>
            </div>
          </>
        </Resource>
        {/* ORACLE END */}

        {/* DATABASE START */}

        <Resource
          isgray
          heading="Database Team"
          desc="Database team will be responsible for all database related
        activities i.e., installations, database management, database
        creation, database backup and recovery, performances, and
        optimization. Database team will closely work with relevant IT teams
        and support them in database related issues."
        >
          <div className="flex flex-col">
            <div className=" ho sop ">SOP</div>
            <div className="flex">
              <p className="text-sm tracking-wide mt-6 max-w-[56rem] text-[#707070] ">
                Database team will be working in cooperation with PMO and
                support teams, database team will not interact with business
                directly.
                <ul className="list-disc mt-2 ml-[1.2rem] ">
                  <li className="pl-2">
                    Database Installation, Configuration, Upgrades, Maintenance,
                    Optimization & backups.{" "}
                  </li>
                  <li className="pl-2">
                    {" "}
                    Database Restoration, Recovery & Export Imports.{" "}
                  </li>
                  <li className="pl-2">Database Compression & Partitioning.</li>
                  <li className="pl-2">
                    Database Patch Set Updates, Jobs Scheduling, DMLs executions
                    & Json Packages Installation.{" "}
                  </li>
                  <li className="pl-2">
                    Database Migrations & Heterogenous DB Links.{" "}
                  </li>
                  <li className="pl-2">
                    Data guards Configuration & Encryption Wallets installation{" "}
                  </li>
                  <li className="pl-2">Database Archiving & Purging</li>
                  <li className="pl-2">
                    Oracle Apex Installation & Configuration
                  </li>
                  <li className="pl-2">
                    Oracle Ord’s Installation & Configuration
                  </li>
                  <li className="pl-2">Oracle Support communication</li>
                  <li className="pl-2">CAM Servers Configuration</li>
                  <li className="pl-2">WebLogic Administration</li>
                  <li className="pl-2">SQL Server Administration</li>
                  <li className="pl-2">
                    Daily Support to staff all over Pakistan.
                  </li>
                  <li className="pl-2">
                    Weekly Billing and Monthly Billing Support.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Resource>

        {/* DATABASE END */}

        {/* MIS TEAM START */}
        <Resource
          heading="MIS Team"
          desc="BI team is responsible to design, develop and maintain Business
            Intelligence solutions. Team members design and develop SQL queries
            to extract business required data or subset of data and present it
            in a meaningful format. The team maintains existing solutions i.e.
            MIS (developed internally) and OBIEE in all aspects and respond and
            resolve relevant business users queries related to data/reports
            requirements. The team will be responsible for all data warehouse
            management, ETL process and development of Fact tables and
            Dimensions tables structure and further development of reporting
            layer upon the structure."
        >
          <div className="flex flex-col">
            <div className=" ho sop ">SOP</div>
            <div className="flex">
              <p className="text-sm tracking-wide mt-6 max-w-[56rem] text-[#707070] ">
                Team will follow standard NIR process for any new development
                around the ERP footprints. For any support related issues
                standard support process should be followed Propose
                functional/technical solutions required by the business..
                <ul className="list-disc mt-2 ml-[1.2rem]">
                  <li className="pl-2">
                    Suggest work-around in case solution is not available in
                    standard application.{" "}
                  </li>
                  <li className="pl-2">
                    {" "}
                    Enabling business for mapping new solutions into ERP.
                  </li>
                  <li className="pl-2">Database Compression & Partitioning.</li>
                  <li className="pl-2">
                    Requirements gathering, design and implementation new
                    requirements.
                  </li>
                  <li className="pl-2">
                    Enhancement of existing functionality by enabling value
                    added features.{" "}
                  </li>
                  <li className="pl-2">
                    Building integrations and enhancements with core business
                    applications and modules for smooth transition of financial
                    data & Smooth running of all oracle financials and SCM
                    modules.{" "}
                  </li>
                  <li className="pl-2">
                    Develop new reports upon existing ERP modules required by
                    business.
                  </li>
                  <li className="pl-2">
                    Troubleshoot and efficient resolution for the issues raised
                    by business users.
                  </li>
                  <li className="pl-2">
                    {" "}
                    Bug fixing, error handling & Maintenance.
                  </li>
                  <li className="pl-2">
                    System Administration & User Access Control.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className=" ho text-[1.5rem] font-bold mt-8 ">
            Sample Template - Documents
          </div>
          <div className="flex gap-8 mt-6">
            <a
              href="/dummy.docx"
              className="flex flex-col items-center flex-wrap"
            >
              <img src="/home/Group 561.svg" className="w-[2rem]" />
              <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                01- Texhinical Document.docx
              </p>
            </a>
            <a
              href="/dummy.docx"
              className="flex flex-col items-center flex-wrap"
            >
              <img src="/home/Group 593.svg" className="w-[2rem]" />
              <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                02- MIS and BI Team resource Sheet.docx
              </p>
            </a>
          </div>
        </Resource>
        {/* MIS TEAM END */}

        {/* Production Support START */}

        <Resource
          isgray
          heading="Production Support Team"
          desc="The scope of support team is first level of response in case of any
            malfunction, error, unavailability of business application, website,
            or database. The support team is responsible to answer any complaint
            raised by any business application users spread through entire TCS
            network. Support team will work in conjunction with development
            teams of respective tools and database team in case of any issue
            required modification, enhancement, or any kind of change or it
            requires specialized knowledge of a particular domain.Support team
            will be responsible for production assets health check monitoring
            and to make sure all assets(Servers, software, connectivity, links,
            websites, APIs) working smoothly and available to relevant TCS
            users."
        >
          <>
            <div className="flex flex-col">
              <div className=" ho sop ">SOP</div>
              <div className="flex">
                <p className="text-sm tracking-wide mt-6 max-w-[56rem] text-[#707070] ">
                  All support level issues will be handled through support
                  portal and its defined procedures. All enhancements or changes
                  will be taking care through PMO team and followed by NIR
                  procedure.
                  <ul className="list-disc mt-2 ml-[1.2rem]">
                    <li className="pl-2">
                      {" "}
                      Provide necessary support in the current working
                      applications such as mobile applications or other
                      system/applications errors with the help of development
                      team if needed (PAKISTAN and DUBAI){" "}
                    </li>
                    <li className="pl-2">
                      {" "}
                      Production monitoring (Servers performance, Data
                      transmission, websites monitoring, network links) .
                    </li>
                    <li className="pl-2">
                      Taking initiative to continuously improve production
                      support team processes..
                    </li>
                    <li className="pl-2">
                      Work hands on with infrastructure and integration teams
                      and developers to research, diagnose, troubleshoot,
                      andidentify solutions to resolve issues in our production
                      systems.
                    </li>
                    <li className="pl-2">
                      Provide support to external customer on COD, and ENVIO
                      related issue/API integrations with predeveloped
                      plugins(Shopify, WooCommerce and Magento){" "}
                    </li>
                    <li className="pl-2">
                      Deployment of application builds through NIR process.{" "}
                    </li>
                    <li className="pl-2">
                      Provide support to all over Pakistan OMS server
                      performance and other issues such as database sessions
                      locking.Sample Templates – Documents
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </>
        </Resource>
        {/* Production Support END */}

        {/* Network Start */}
        <Resource
          heading="Network & infra Structure Team"
          desc="The scope of the Network and Infra Team is:"
        >
          <div className="flex flex-col">
            <div className=" ho sop ">SOP</div>
            <div className="flex max-w-[56rem]">
              <ul className="text-sm list-disc mt-4 ml-[1.2rem] text-[#707070] ">
                <li className="pl-2">
                  Maintaining several specific core services that are used by
                  infrastructure and around the company.{" "}
                </li>
                <li className="pl-2">
                  Partnering with key users to support the design and
                  implementation of our next generation monitoring system..
                </li>
                <li className="pl-2">
                  Building a robust infrastructure management system, which
                  involves understanding stakeholder needs, presenting data, and
                  designing processes to support the needs of all teams at DO
                  who require the use of Hardware servers
                </li>
                <li className="pl-2">
                  Ensuring all hardware processes from selection, specification,
                  architecture, bootstrapping and software maintenanceare as
                  efficient and seamless as possible
                </li>
                <li className="pl-2">
                  Improving tooling and efficiencies for other team and
                  processes within Infrastructure{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className=" ho text-[1.5rem] font-bold mt-8 ">
            Sample Template - Documents
          </div>
          <a href="/dummy.docx" className="flex gap-8 mt-6">
            <div className="flex flex-col items-center flex-wrap">
              <img src="/home/Group 561.svg" className="w-[2rem]" />
              <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                01- Texhinical Document.docx
              </p>
            </div>
            <a
              href="/dummy.docx"
              className="flex flex-col items-center flex-wrap"
            >
              <img src="/home/Group 593.svg" className="w-[2rem]" />
              <p className="mt-2 text-[10px] max-w-[5rem] text-center text-[#707070] ">
                02- MIS and BI Team resource Sheet.docx
              </p>
            </a>
          </a>
        </Resource>
        {/* Network End */}

        {/* EBS Team Start */}
        <Resource
          isgray
          heading="EBS Team"
          desc="EBS ERP(OF) team will be responsible for implementation any
            enhancement, new business process automation and mapping financials
            information into ERP modules. Team will support all existing modules
            functionality and provide all levels of technical assistance to
            business users. ERP will coordinate with database team for any bug
            fixing solution implementation or enhancement recommended by vendor.
            Team will ensure new integrations, enhancements, interfaces, reports
            are designed are built around application standards."
        >
          <>
            <div className="flex flex-col">
              <div className=" ho sop ">SOP</div>
              <div className="flex">
                <p className="text-sm tracking-wide mt-6 max-w-[56rem] text-[#707070] ">
                  Team will follow standard NIR process for any new development
                  around the ERP footprints. For any support related issues
                  standard support process should be followed:
                  <ul className="list-disc mt-2 ml-[1.2rem] ">
                    <li className="pl-2">
                      {" "}
                      Propose functional/technical solutions required by the
                      business.{" "}
                    </li>
                    <li className="pl-2">Gap Analysis</li>
                    <li className="pl-2">
                      Suggest work-around in case solution is not available in
                      standard application
                    </li>
                    <li className="pl-2">
                      Enabling business for mapping new solutions into ERP
                    </li>
                    <li className="pl-2">
                      Requirements gathering, design and implementation new
                      requirements.
                    </li>
                    <li className="pl-2">
                      Enhancement of existing functionality by enabling value
                      added features.
                    </li>
                    <li className="pl-2">
                      Building integrations and enhancements with core business
                      applications and modules for smoothtransition of financial
                      data
                    </li>
                    <li className="pl-2">
                      {" "}
                      Smooth running of all oracle financials and SCM modules.
                    </li>
                    <li className="pl-2">
                      Develop new reports upon existing ERP modules required by
                      business.
                    </li>
                    <li className="pl-2">
                      Troubleshoot and efficient resolution for the issues
                      raised by business users
                    </li>
                    <li className="pl-2">Bug fixing, error handling.</li>
                    <li className="pl-2">User Access Control</li>
                  </ul>
                </p>
              </div>
            </div>
          </>
        </Resource>
        {/* EBS Team End */}

        {/* Help desk start */}
        <Resource
          heading="Help Desk Support"
          desc="Database team will be responsible for all database related
            activities i.e., installations, database management, database
            creation, database backup and recovery, performances, and
            optimization. Database team will closely with relevant IT teams and
            support them in database related issues. The scope of IT service
            desk is to provide technical support, hardware and software
            installation and troubleshooting for all kind of devices business
            users are currently using. Service Desk team will be managing all
            their activities/incident management through Service Desk portal.
            Service Desk team will also be responsible for procurement new
            hardware and devices.Team will also manage 3rd party support."
        >
          <div className="flex flex-col">
            <div className=" ho sop ">SOP</div>
            <div className="flex">
              <p className="text-sm tracking-wide mt-6 max-w-[56rem] text-[#707070] ">
                All support issues will be handled through ServiceDesk (ticket
                management), portal and its defined procedures. Asset management
                will be handled through Asset Portal and Oracle Financial
                Software under the Admin and Finance laid down procurement
                policies..
                <ul className="list-disc mt-2 ml-[1.2rem]">
                  <li className="pl-2">
                    Identify, redirect problems, and escalate urgent situations
                    to the appropriate resources{" "}
                  </li>
                  <li className="pl-2">
                    {" "}
                    Analysis and investigation all tickets, with a structured
                    approach to problem solving.{" "}
                  </li>
                  <li className="pl-2">
                    Create monthly reports and dashboard on help desk metrics -
                    IT Service Levels and staff performance.
                  </li>
                  <li className="pl-2">
                    Track and route problems/requests and document resolutions.{" "}
                  </li>
                  <li className="pl-2">
                    Follow up on outstanding requests and ensure timely
                    resolution.{" "}
                  </li>
                  <li className="pl-2">
                    Requesting feedback and/or monitoring calls and other
                    methods of correspondence to improve training methods.{" "}
                  </li>
                  <li className="pl-2">
                    Run reports to determine malfunctions that continue to
                    occur.
                  </li>
                  <li className="pl-2">Provide remote support using tools.</li>
                  <li className="pl-2">
                    Provide technical assistance and support for incoming
                    queries and issues related to desktop computers, Laptop,
                    software, and Server - Hardware and standard software
                    support (90% infrastructure is refurbished)
                  </li>
                  <li className="pl-2">
                    Support to users end deployment and changes.
                  </li>
                  <li className="pl-2">
                    Support audio and video equipment in conference rooms
                  </li>
                  <li className="pl-2">
                    Keep records of repairs and fixes for future reference.
                  </li>
                  <li className="pl-2">
                    Vendor management for the parts and services
                  </li>
                  <li className="pl-2">
                    Resolve technical problems with Local Area Networks (LAN),
                    1st level Wide Area Networks (WAN), and other systems.
                  </li>
                  <li className="pl-2">
                    Resolving problems with networks cablings.
                  </li>
                  <li className="pl-2">
                    Ensure proper packing of equipment indented to dispatch.
                  </li>
                  <li className="pl-2">
                    Dispatch equipment to outstations after repairing.
                  </li>
                  <li className="pl-2">
                    Performing remote troubleshooting through diagnostic
                    techniques and pertinent questions of users and DP
                  </li>
                  <li className="pl-2">
                    Application deployment through SOTI Server
                  </li>
                  <li className="pl-2">SOTI Server Administration</li>
                  <li className="pl-2">
                    Make sure devices work environment are controlled and
                    restricted through SOTI Server policies and rules.
                  </li>
                  <li className="pl-2">
                    Checking health of SOTI Server database (purging database
                    monthly).
                  </li>
                  <li className="pl-2">
                    NIFT Certificate management (revoke and installation).
                  </li>
                  <li className="pl-2">1st level HHD hardware support </li>
                  <li className="pl-2">Record keeping of devices area wise.</li>
                  <li className="pl-2">
                    Maintain backup batteries and screen protectors for
                    immediate support.{" "}
                  </li>
                  <li className="pl-2">
                    Periodic security updates for Android OS & applications
                  </li>
                  <li className="pl-2">Documentation of insurance coverage</li>
                  <li className="pl-2">
                    Run reports to determine malfunctions that continue to
                    occur.
                  </li>
                  <li className="pl-2">
                    Manage and monitor IT assets to ensure accurate inventory
                    records.
                  </li>
                  <li className="pl-2">
                    IT Asset receiving from suppliers as per PO.
                  </li>
                  <li className="pl-2">
                    Liaison with local DP staff to make sure IT assets
                    issuance/movement record is updated on the Asset portal.
                  </li>
                  <li className="pl-2">
                    Assist with procurement process in areas of requisition
                    tracking, receiving, shipping and installation.
                  </li>
                  <li className="pl-2">ePRF processing</li>
                  <li className="pl-2">
                    Vendor management with a liaison of Admin procurement team,
                    secure equipment after resigning or closingbusiness
                    unit/project.
                  </li>
                  <li className="pl-2">
                    Liaison with FS team to IT Asset insurance and claims
                  </li>
                  <li className="pl-2">
                    Provide asset purchasing record and vendor repairing
                    estimate to Insurance company.
                  </li>
                  <li className="pl-2">
                    {" "}
                    Coordinate with insurance company surveyor for claims.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Resource>
        {/* Help desk end */}
      </Layout>
    </div>
  );
}
