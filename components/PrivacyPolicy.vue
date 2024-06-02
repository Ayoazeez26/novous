<script lang='ts' setup>
let activeSection = ref('')

function isActive(section: string) {
  return activeSection.value === section
}

function scrollTo(section: string) {
  activeSection.value = section
  const element = document.getElementById(section)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="container md:py-44 py-32 mx-auto md:px-0 px-5 max-w-[1240px]">
    <div class="md:flex relative">
      <div class="sidebar md:block hidden md:w-[25%] fixed h-72 overflow-hidden overflow-y-scroll">
        <ul class="space-y-6">
          <li class="privacy-nav" :class="{ active: isActive('introduction') }" @click="scrollTo('introduction')">
            <span class="privacy-num">1</span>
            <a href="#">Introduction</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('scope') }" @click="scrollTo('scope')">
            <span class="privacy-num">2</span>
            <a href="#">Scope</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('data-protection-principles') }"
            @click="scrollTo('data-protection-principles')">
            <span class="privacy-num">3</span>
            <a href="#">Data Protection Principles</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('data-collection-and-processing') }"
            @click="scrollTo('data-collection-and-processing')">
            <span class="privacy-num">4</span>
            <a href="#">Data Collection and Processing</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('data-security') }" @click="scrollTo('data-security')">
            <span class="privacy-num">5</span>
            <a href="#">Data Security</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('data-subject-rights') }"
            @click="scrollTo('data-subject-rights')">
            <span class="privacy-num">6</span>
            <a href="#">Data Subject Rights</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('data-breach-management') }"
            @click="scrollTo('data-breach-management')">
            <span class="privacy-num">7</span>
            <a href="#">Data Breach Management</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('data-protection-officer') }"
            @click="scrollTo('data-protection-officer')">
            <span class="privacy-num">8</span>
            <a href="#">Data Protection Officer</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('compliance-monitoring-and-review') }"
            @click="scrollTo('compliance-monitoring-and-review')">
            <span class="privacy-num">9</span>
            <a href="#">Compliance Monitoring and Review</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('training-and-awareness') }"
            @click="scrollTo('training-and-awareness')">
            <span class="privacy-num">10</span>
            <a href="#">Training and Awareness</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('policy-adoption-and-communication') }"
            @click="scrollTo('policy-adoption-and-communication')">
            <span class="privacy-num">11</span>
            <a href="#">Policy Adoption and Communication</a>
          </li>
          <li class="privacy-nav" :class="{ active: isActive('contact-information') }"
            @click="scrollTo('contact-information')">
            <span class="privacy-num">12</span>
            <a href="#">Contact Information</a>
          </li>
        </ul>
      </div>
      <div class="content md:w-[70%] md:ml-[30%] md:space-y-12 space-y-10">
        <div class="space-y-3">
          <h2 class="md:text-[30px] text-2xl font-bold">Policy on Data Protection</h2>
          <p>Last updated: December 2023</p>
        </div>
        <section class="md:space-y-12 space-y-8" id="introduction">
          <h2 class="font-bold md:text-3xl text-2xl">1. Introduction</h2>
          <p>NOVUS Microfinance Bank is a Microfinance bank licensed by the Central Bank of Nigeria to provide banking
            services to a wide range of customers which includes individuals, small businesses, cooperative and trade
            associations, companies, and non-governmental institutions (NGOs). Our services are provided at our
            branches, rural agents and through electronic channels. Novus Microfinance Bank (Novus MFB) is committed to
            ensuring the privacy, confidentiality, and security of personal data collected and processed in the course
            of its operations. This Data Protection Policy outlines the principles and procedures that Novus MFB follows
            to protect personal data in compliance with applicable data protection laws and regulations, including the
            Nigerian Data Protection Regulation (NDPR).</p>
        </section>
        <section class="md:space-y-12 space-y-8" id="scope">
          <h2 class="font-bold md:text-3xl text-2xl">2. Scope</h2>
          <p>This policy applies to all personal data collected, processed, stored, or transmitted by Novus MFB in the
            course of its operations. It applies to all employees, contractors, and third parties who handle personal
            data on behalf of Novus MFB, including but not limited to:</p>
          <div class="space-y-5">
            <h3 class="font-semibold md:text-xl text-xl">2.1 Employees</h3>
            <p>All permanent, temporary, and contract employees of Novus MFB who have access to personal data as part of
              their job responsibilities.</p>
            <h3 class="font-semibold md:text-xl text-xl">2.2 Contractors</h3>
            <p>Any external individuals or organisations engaged by Novus MFB to provide services involving the
              processing of personal data.</p>
            <h3 class="font-semibold md:text-xl text-xl">2.3 Third Parties</h3>
            <p>Any external entities, including partners, vendors, and service providers, who receive personal data from
              Novus MFB or process personal data on behalf of Novus MFB.</p>
            <h3 class="font-semibold md:text-xl text-xl">2.4 Individuals & Entities</h3>
            <p>All individuals and entities covered by this policy are required to comply with its provisions and
              applicable data protection laws and regulations</p>
          </div>
        </section>
        <section class="md:space-y-12 space-y-8" id="data-protection-principles">
          <h2 class="font-bold md:text-3xl text-2xl">3. Data Protection Principles</h2>
          <p>Novus MFB adheres to the following data protection principles:</p>
          <div class="space-y-5">
            <h3 class="font-semibold md:text-xl text-xl">3.1 Lawfulness, Fairness, and Transparency</h3>
            <p>Personal data is collected and processed lawfully, fairly, and transparently, with respect for the rights
              of data subjects. We are committed to ensuring that all personal data is collected and processed in
              accordance with applicable laws, regulations, and best practices.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.1.1 Lawfulness</h4>
            <p>We ensure that all processing of personal data is based on a valid legal basis as defined by relevant
              data protection laws. This includes obtaining explicit consent from data subjects where required,
              fulfilling contractual obligations, complying with legal obligations, protecting vital interests,
              performing tasks in the public interest, and pursuing legitimate interests, while considering the impact
              on individuals' rights and freedoms.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.1.2 Fairness</h4>
            <p>We treat all individuals fairly and ensure that personal data is processed in a manner that is not
              discriminatory, arbitrary, or unjust. We do not unlawfully discriminate against any individual based on
              characteristics such as race, ethnicity, religion, gender, sexual orientation, disability, or age. Our
              data processing practices are transparent, consistent, and aimed at achieving fair outcomes for data
              subjects.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.1.3 Transparency</h4>
            <p>We believe in being open and transparent about our data processing activities. We provide clear and
              accessible information to data subjects about how their personal data is collected, used, stored, and
              shared. This includes maintaining comprehensive privacy notices, informing individuals of their rights
              regarding their personal data, and being responsive to inquiries and requests for information. We also
              regularly review and update our privacy policies and practices to ensure ongoing transparency and
              compliance with evolving data protection requirements.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.1.4 Purpose Limitation</h3>
            <p>Personal data is collected for specified, explicit, and legitimate purposes and not further processed in
              a manner incompatible with those purposes. We recognise the importance of collecting and processing
              personal data for specific and legitimate purposes. We adhere to the principle of purpose limitation to
              ensure that personal data is used only for the purposes for which it was collected, and we do not further
              process it in a manner that is incompatible with those original purposes.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.1.5 Specified and Explicit Purposes</h3>
            <p>We clearly define and communicate the purposes for which personal data is collected at the time of its
              collection. These purposes are specific, well-defined, and explicitly stated to ensure that data subjects
              understand why their information is being collected and how it will be used. We do not use personal data
              for purposes that are not clearly defined and justified.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.1.6 Legitimate Purposes</h3>
            <p>Personal data is collected and processed only for legitimate purposes that are lawful and in accordance
              with applicable data protection laws and regulations. We ensure that there is a lawful basis for each
              processing activity, such as consent, contract performance, legal obligation, vital interests, public
              task, or legitimate interests pursued by the organization or a third party.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.1.7 Compatibility of Processing</h3>
            <p>We ensure that any further processing of personal data is compatible with the original purposes for which
              it was collected. If we intend to use personal data for a new purpose that is not compatible with the
              original purposes, we will seek additional consent from the data subject or ensure that there is another
              lawful basis for the processing.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.1.8 Review and Justification</h3>
            <p>We regularly review our data processing activities to ensure that personal data is being used only for
              the specified and legitimate purposes. Any proposed changes to the purposes of processing are carefully
              evaluated and justified to ensure compliance with the principle of purpose limitation.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.2 Data Minimization</h3>
            <p>Novus MFB collects and processes only the personal data that is adequate, relevant, and limited to what
              is necessary for the purposes for which it is processed. We understand the importance of minimizing the
              collection and processing of personal data to reduce risks and protect the privacy rights of individuals.
              We adhere to the principle of data minimization to ensure that we only collect and process personal data
              that is adequate, relevant, and limited to what is necessary for the purposes for which it is processed.
              By adhering to the principle of data minimization, Novus MFB ensures that personal data is collected and
              processed in a responsible and privacy-friendly manner. We prioritize the protection of individuals'
              privacy rights by limiting the collection and processing of personal data to what is strictly necessary
              for achieving our business objectives, thereby minimizing the risks associated with data handling and
              enhancing trust and confidence in our organization. Our Data Minimization policy provides;</p>
            <h4 class="font-semibold md:text-xl text-xl">3.2.1 Adequacy</h4>
            <p>We collect and process personal data that is sufficient to achieve the specified purposes and objectives
              of our data processing activities. We ensure that the data collected is appropriate and suitable for
              fulfilling the intended purposes, without collecting unnecessary or excessive information.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.2.2 Relevance</h4>
            <p>We only collect and process personal data that is relevant to the specified purposes for which it is
              processed. We ensure that the data collected is directly related to and necessary for achieving the stated
              objectives, and we do not collect irrelevant or unrelated information that is not needed for the intended
              purposes.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.2.3 Necessity</h4>
            <p>We limit the collection and processing of personal data to what is necessary for achieving the specified
              purposes. We carefully assess the data requirements for each processing activity and collect only the
              minimum amount of data required to fulfill those purposes. We avoid collecting or retaining data that is
              not essential for achieving the intended objectives.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.2.4 Regular Review</h4>
            <p>We regularly review our data processing activities to identify any unnecessary or redundant data being
              collected or processed. Any data that is determined to be unnecessary or no longer relevant for the
              specified purposes is promptly deleted or anonymized to minimize the risk of unauthorized access or
              misuse.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.3 Accuracy</h3>
            <p>Novus MFB takes reasonable steps to ensure that personal data is accurate, complete, and up-to-date.
              Novus MFB is committed to ensuring the accuracy, completeness, and currency of the personal data we
              collect and process. We recognize the importance of maintaining accurate data to fulfill our legal
              obligations, provide quality services to our customers, and protect the rights of data subjects.
              Therefore, we adhere to the following principles and practices to uphold data accuracy:</p>
            <h4 class="font-semibold md:text-xl text-xl">3.3.1 Data Verification</h4>
            <p>We implement procedures to verify the accuracy of personal data at the point of collection. This may
              include requesting individuals to confirm or update their information during the data collection process.
            </p>
            <h4 class="font-semibold md:text-xl text-xl">3.3.2 Regular Updates</h4>
            <p>We conduct regular reviews and updates of personal data to ensure its accuracy and completeness. This
              involves verifying the information provided by data subjects and making necessary corrections or updates
              as required.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.3.3 Data Integrity Checks</h4>
            <p>We employ technical measures and data validation processes to ensure the integrity of the data stored in
              our systems. This helps to identify and correct any inaccuracies or inconsistencies in the data.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.3.4 Responsibility Assignment</h4>
            <p>We designate specific personnel or teams responsible for overseeing data accuracy and integrity within
              our organization. These individuals are tasked with monitoring data quality, addressing any discrepancies,
              and implementing corrective measures as needed. These include the different stages of reviewers in the
              processing chain.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.3.5 Data Subject Rights</h3>
            <p>We provide data subjects with mechanisms to review, verify, and update their personal data held by Novus
              MFB. Data subjects have the right to request access to their information, rectify inaccuracies, and
              request deletion or restriction of processing where applicable.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.3.6 Employee Training</h4>
            <p>We provide training and awareness programs to our employees to emphasize the importance of data accuracy
              and educate them on best practices for data handling. This ensures that staff members understand their
              roles and responsibilities in maintaining data accuracy.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.3.7 Documentations</h4>
            <p>We maintain records of data accuracy checks, updates, and corrections to demonstrate compliance with data
              protection regulations and internal policies. This documentation helps to track the history of data
              modifications and ensures transparency in our data management processes.</p>

            <h3 class="font-semibold md:text-xl text-xl">3.4 Storage Limitation</h3>
            <p> Personal data is kept in a form that permits identification of data subjects for no longer than is
              necessary for the purposes for which it is processed. Novus MFB recognizes the importance of storing
              personal data only for as long as necessary to fulfill the purposes for which it was collected. Adhering
              to these storage limitation practices, Novus MFB aims to minimize the risks associated with prolonged data
              retention, protect the privacy rights of data subjects, and ensure compliance with legal and regulatory
              requirements regarding data storage and retention. To ensure compliance with data protection principles
              and regulations, including the Nigerian Data Protection Regulation (NDPR), we adhere to the following
              practices regarding storage limitation:</p>
            <h4 class="font-semibold md:text-xl text-xl">3.4.1 Purpose-Based Retention</h4>
            <p>Personal data is retained only for the duration necessary to achieve the specific purposes for which it
              was collected. We establish clear retention periods aligned with the purposes of data processing
              activities and regularly review and update these periods as necessary.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.4.2 Legal and Regulatory Requirements</h4>
            <p>We maintain awareness of legal and regulatory requirements governing the retention of personal data and
              ensure our retention practices align with these obligations. Where specific retention periods are mandated
              by law or regulatory authorities, we adhere to such requirements.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.4.3 Data Lifecycle Management</h4>
            <p>We implement structured data lifecycle management processes to govern the storage and retention of
              personal data throughout its lifecycle. This includes defining procedures for data retention, archival,
              and secure disposal or deletion at the end of the retention period.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.4.4 Review and Purge</h4>
            <p>We conduct periodic reviews of stored personal data to assess its ongoing relevance and necessity. Data
              that is no longer required for the purposes for which it was collected is promptly identified and securely
              anonymized in accordance with established procedures.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.4.5 Secure Storage</h4>
            <p>Personal data is stored in secure environments, including encrypted databases, protected servers, and
              access-controlled systems, to prevent unauthorized access, tampering, or loss. We employ industry-standard
              security measures to safeguard data during storage.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.4.6 Data Minimization</h4>
            <p>We apply data minimization principles to limit the volume of personal data stored to what is strictly
              necessary for the intended purposes. Unnecessary or redundant data is avoided to reduce storage
              requirements and mitigate the risk of data breaches or unauthorized access.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.4.7 Documentation and Accountability</h4>
            <p> We maintain records of data retention policies, including retention periods, justification for
              retention, and procedures for secure disposal or deletion. This documentation ensures accountability and
              transparency in our data storage practices.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.5 Integrity and Confidentiality</h3>
            <p> Personal data is processed in a manner that ensures appropriate security, including protection against
              unauthorized or unlawful processing and against accidental loss, destruction, or damage. The paramount
              importance of maintaining the integrity and confidentiality of personal data entrusted to us is highly
              recognized. In adhering to these integrity and confidentiality practices, Novus MFB ensures that personal
              data is processed in a secure and responsible manner, protecting the privacy rights of data subjects and
              maintaining trust and confidence in our organization's data handling practices. To uphold these principles
              and ensure the security of data processing activities, we adhere to the following practices:</p>
            <h4 class="font-semibold md:text-xl text-xl">3.5.1 Data Security Measures</h4>
            <p>We implement robust technical and organizational measures to safeguard personal data against unauthorized
              or unlawful processing, as well as accidental loss, destruction, or damage. These measures include
              encryption, access controls, firewalls, intrusion detection systems, and regular security assessments.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.5.2 Access Controls</h4>
            <p>Access to personal data is restricted to authorized personnel who require access to perform their job
              duties. Access permissions are assigned based on the principle of least privilege, ensuring that
              individuals only have access to the data necessary for their specific roles.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.5.3 Confidentiality Agreements</h4>
            <p>Employees, contractors, and third parties with access to personal data are required to sign
              confidentiality agreements, committing them to maintain the confidentiality and security of the data they
              handle. These agreements outline obligations regarding data protection and the consequences of breaching
              confidentiality.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.5.4 Data Encryption</h4>
            <p>Personal data is encrypted both in transit and at rest to prevent unauthorized interception or access.
              Encryption protocols are implemented to secure data transmissions over networks and to protect data stored
              in databases or on physical storage devices.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.5.5 Data Integrity Checks</h4>
            <p>We employ measures to verify the integrity of personal data, ensuring that it remains accurate, complete,
              and unaltered throughout its lifecycle. Data integrity checks may include checksums, hash functions, and
              validation procedures to detect and prevent unauthorized modifications or tampering.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.5.6 Incidence Response Plan</h4>
            <p>We maintain a comprehensive incident response plan to effectively manage and mitigate security incidents,
              including data breaches or unauthorized access. The plan outlines procedures for detecting, reporting,
              investigating, and responding to security incidents in a timely and coordinated manner.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.5.7 Training and Awareness</h4>
            <p>We provide regular training and awareness programs to educate employees about their responsibilities for
              data security and confidentiality. Training covers topics such as data handling best practices, security
              protocols, and procedures for reporting security incidents or breaches.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.5.8 Monitoring and Auditing</h4>
            <p>We conduct regular monitoring and auditing of data processing activities to detect and address potential
              security vulnerabilities or compliance gaps. Audit logs are maintained to track access to personal data
              and identify any unauthorized or suspicious activities.</p>
            <h3 class="font-semibold md:text-xl text-xl">3.6 Accountability</h3>
            <p>Accountability: Novus MFB is accountable for complying with data protection laws and regulations and
              demonstrates compliance through appropriate measures. The importance of accountability in ensuring the
              lawful and ethical processing of personal data is top priority to us. In demonstrating accountability in
              our data processing activities, Novus MFB reaffirms its commitment to protecting the privacy and rights of
              data subjects, maintaining compliance with data protection laws and regulations, and fostering trust and
              confidence in our organization's data handling practices. We are committed to upholding the principles of
              accountability in all our data processing activities, and we demonstrate our commitment through the
              following measures:</p>
            <h4 class="font-semibold md:text-xl text-xl">3.6.1 Data Protection Officer (DPO)</h4>
            <p>e have appointed a Data Protection Officer responsible for overseeing compliance with data protection
              laws and regulations, including the Nigerian Data Protection Regulation (NDPR). The DPO serves as the
              point of contact for data subjects and regulatory authorities and ensures that data protection policies
              and procedures are implemented effectively throughout the organization.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.6.2 Data Protection Policies and Procedures</h4>
            <p>We have established comprehensive data protection policies and procedures that govern the collection,
              processing, storage, and sharing of personal data. These policies and procedures are regularly reviewed
              and updated to reflect changes in data protection laws and emerging best practices.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.6.3 Data Protection Impact Assessments (DPIAs)</h4>
            <p>We conduct Data Protection Impact Assessments (DPIAs) for high-risk data processing activities to assess
              and mitigate potential risks to the rights and freedoms of data subjects. DPIAs help us identify and
              address privacy risks before implementing new projects or initiatives involving the processing of personal
              data.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.6.4 Record-Keeping</h4>
            <p>We maintain detailed records of our data processing activities, including the purposes of processing,
              categories of data subjects and personal data processed, data sharing arrangements, and security measures
              implemented. These records demonstrate our accountability and facilitate transparency with regulatory
              authorities and data subjects.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.6.5 Training and Awareness Program</h4>
            <p>We provide regular training and awareness programs to employees, contractors, and third parties involved
              in data processing activities. Training covers data protection laws and regulations, organizational
              policies and procedures, and best practices for safeguarding personal data. By ensuring that personnel are
              well-informed about their data protection responsibilities, we promote a culture of accountability
              throughout the organization.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.6.6 Compliance Monitoring and Auditing</h4>
            <p>We conduct regular compliance monitoring and auditing to assess adherence to data protection policies and
              procedures. Internal audits evaluate the effectiveness of controls, identify areas for improvement, and
              ensure ongoing compliance with legal and regulatory requirements. Any identified issues or deficiencies
              are promptly addressed and remediated.</p>
            <h4 class="font-semibold md:text-xl text-xl">3.6.7 Regular Engagement and Cooperation</h4>
            <p>We maintain open and transparent communication with regulatory authorities and cooperate fully with
              investigations or inquiries related to data protection matters. We proactively engage with regulatory
              authorities to seek guidance on compliance obligations and address any concerns or queries they may have.
            </p>
            <h4 class="font-semibold md:text-xl text-xl">3.6.8 Continuous Improvement</h4>
            <p>We are committed to continuous improvement in our data protection practices and regularly review and
              update our policies, procedures, and controls to enhance effectiveness and address emerging risks and
              challenges. Feedback from data subjects, regulators, and other stakeholders is welcomed and used to inform
              our improvement efforts.</p>
          </div>
        </section>
        <section class="md:space-y-12 space-y-8" id="data-collection-and-processing">
          <h2 class="font-bold md:text-3xl text-2xl">4. Data Collection and Processing</h2>
          <div class="space-y-5">
            <h3 class="font-semibold md:text-xl text-xl">4.1 Continuous Improvement</h3>
            <p>NOVUS HR is committed to ensuring that personal data is collected and processed lawfully, fairly, and
              transparently. We make sure that our data collection and processing practices are consistent with the
              applicable laws, regulations, and industry standards. We are transparent about our purpose for collecting
              personal data and provide individuals with clear and accessible information about our processing
              activities.
            </p>
            <h3 class="font-semibold md:text-xl text-xl">4.2 Continuous Improvement</h3>
            <p>We are committed to the importance of safeguarding the privacy and rights of individuals whose personal
              data we collect and process. This policy outlines our approach to data collection and processing,
              including the principles and practices that guide our activities. These are highlighted as;</p>
            <h3 class="font-semibold md:text-xl text-xl">4.2.1 Law, Fairness and Transparency</h3>
            <p>e ensure that our data collection and processing activities are conducted in accordance with applicable
              laws, regulations, and industry standards. We are transparent about the purposes for which we collect
              personal data and provide individuals with clear and accessible information about our data processing
              practices.</p>
            <h3 class="font-semibold md:text-xl text-xl">4.2.2 Purpose Limitation</h3>
            <p>We collect personal data for specified, explicit, and legitimate purposes and do not process it in a
              manner that is incompatible with those purposes. We obtain consent from individuals before collecting
              their personal data, except where lawful bases for processing apply as provided for in data protection
              laws.</p>
            <h3 class="font-semibold md:text-xl text-xl">4.2.3 Data Minimisation</h3>
            <p> We collect and process only the personal data that is necessary for the purposes for which it is being
              processed. We avoid collecting excessive or irrelevant data and ensure that the data we collect is
              adequate, relevant, and limited to what is necessary for the intended purposes.</p>
            <h3 class="font-semibold md:text-xl text-xl">4.2.4 Accuracy </h3>
            <p>We take reasonable steps to ensure that the personal data we collect and process is accurate, complete,
              and up-to-date. We have procedures in place to rectify inaccuracies and respond to requests from
              individuals to update or correct their personal data. These are in form of reconfirmation of customer data
              at each time the come to transact business with us.</p>
            <h3 class="font-semibold md:text-xl text-xl">4.2.5 Storage Limitation</h3>
            <p>We retain personal data for no longer than is necessary for the purposes for which it was collected and
              processed. We have established retention periods and data disposal procedures to ensure that personal data
              is securely deleted or anonymized when it is no longer needed.</p>
            <h3 class="font-semibold md:text-xl text-xl">4.2.6 Integrity and Confidentiality</h3>
            <p>We implement appropriate technical and organizational measures to protect personal data against
              unauthorized or unlawful processing and against accidental loss, destruction, or damage. We maintain the
              confidentiality and security of personal data through encryption, access controls, and other security
              safeguards.</p>
          </div>
        </section>
        <section class="md:space-y-12 space-y-8" id="data-security">
          <h2 class="font-bold md:text-3xl text-2xl">5. Data Security</h2>
          <p>Novus MFB implements appropriate technical and organizational measures to ensure the security of personal
            data, including protection against unauthorized or unlawful processing and against accidental loss,
            destruction, or damage. Measures include encryption, access controls, regular data backups, and employee
            training on data protection best practices. By implementing these security measures, Novus MFB demonstrates
            its commitment to protecting the confidentiality, integrity, and security of personal data entrusted to us
            by our customers, employees, and other stakeholders. We continuously monitor and enhance our security
            practices to adapt to evolving threats and mitigate risks effectively.</p>
          <div class="space-y-5">
            <h3 class="font-semibold md:text-xl text-xl">5.1</h3>
            <p>We prioritize the security of personal data to safeguard against unauthorized or unlawful processing, as
              well as accidental loss, destruction, or damage. We implement a range of technical and organizational
              measures to ensure the confidentiality, integrity, and availability of personal data entrusted to us. Our
              security measures include:</p>
            <h3 class="font-semibold md:text-xl text-xl">5.1.1 Encryption</h3>
            <p>We use encryption technologies to secure personal data both in transit and at rest. This helps protect
              data from unauthorized access or interception by encrypting it into a format that can only be decrypted
              with the appropriate encryption key.</p>
            <h3 class="font-semibold md:text-xl text-xl">5.1.2 Access Controls</h3>
            <p>We enforce strict access controls to limit access to personal data only to authorized individuals who
              require access to perform their job responsibilities. Access permissions are granted based on the
              principle of least privilege, ensuring that individuals have access only to the data necessary for their
              role.</p>
            <h3 class="font-semibold md:text-xl text-xl">5.1.3 Regular Backups</h3>
            <p>We conduct regular backups of personal data to ensure its availability and integrity in the event of data
              loss or corruption. Backup procedures include storing data copies in secure offsite locations to mitigate
              the risk of data loss due to disasters or system failures.</p>
            <h3 class="font-semibold md:text-xl text-xl">5.1.4 Employee Training</h3>
            <p>We provide comprehensive training to all employees on data protection best practices, security protocols,
              and their responsibilities regarding the handling of personal data. Employees are educated on the
              importance of data security and confidentiality and are required to adhere to established security
              policies and procedures.</p>
            <h3 class="font-semibold md:text-xl text-xl">5.1.5 Instant Response Plan</h3>
            <p>We have an incident response plan in place to promptly address and mitigate any security incidents or
              breaches that may occur. The plan outlines procedures for reporting security incidents, conducting
              investigations, containing breaches, and notifying affected parties, including regulatory authorities and
              data subjects, as required by applicable laws and regulations.</p>
            <h3 class="font-semibold md:text-xl text-xl">5.1.6 Regular Security Audits and Assessments</h3>
            <p>We regularly conduct security audits and assessments to evaluate the effectiveness of our security
              measures and identify any vulnerabilities or areas for improvement. These assessments may include
              penetration testing, vulnerability scanning, and security reviews of systems and processes.</p>
            <h3 class="font-semibold md:text-xl text-xl">5.1.7 Compliance with Regulatory Standards</h3>
            <p>We ensure compliance with relevant data protection laws, regulations, and industry standards governing
              the security of personal data. This includes adhering to requirements such as the Nigerian Data Protection
              Regulation (NDPR) and other applicable data protection frameworks.</p>
          </div>
        </section>
        <section class="md:space-y-12 space-y-8" id="data-subject-rights">
          <h2 class="font-bold md:text-3xl text-2xl">6. Data Subject Rights</h2>
          <p>Novus MFB respects the rights of data subjects, including the right to access, rectify, erase, restrict
            processing, and object to the processing of their personal data. Data subjects may exercise their rights by
            contacting Novus MFB's Data Protection Officer (DPO). We recognize and respect the rights of data subjects
            regarding their personal data. We are committed to upholding these rights and providing data subjects with
            the necessary mechanisms to exercise control over their personal information. Our approach to respecting
            data subject rights includes the following key principles: </p>
          <div class="space-y-5">
            <h3 class="font-semibold md:text-xl text-xl">6.1. Right to Access</h3>
            <p>Data subjects have the right to obtain confirmation from Novus MFB as to whether their personal data is
              being processed and, if so, to access that data and information about how it is being used. </p>
            <h3 class="font-semibold md:text-xl text-xl">6.2 Right to Rectification</h3>
            <p>Data subjects have the right to request the correction of inaccuracies or incompleteness in their
              personal data held by Novus MFB.</p>
            <h3 class="font-semibold md:text-xl text-xl">6.3 Right to Restrict Processing</h3>
            <p>Data subjects have the right to request the restriction of processing of their personal data in certain
              situations, such as when the accuracy of the data is contested or when processing is unlawful
            </p>
            <h3 class="font-semibold md:text-xl text-xl">6.4. Right to Object to Processing</h3>
            <p>Data subjects have the right to object to the processing of their personal data in certain circumstances,
              including processing for direct marketing purposes or where the processing is based on legitimate
              interests.</p>
          </div>
        </section>
        <section class="md:space-y-12 space-y-8" id="data-breach-management">
          <h2 class="font-bold md:text-3xl text-2xl">7. Data Breach Management</h2>
          <p>Novus MFB has procedures in place to detect, investigate, and respond to data breaches in accordance with
            applicable laws and regulations. In the event of a data breach involving personal data, affected data
            subjects and relevant authorities will be notified as required by law. We take data breaches seriously and
            have established comprehensive procedures to effectively manage and respond to any incidents that may
            compromise the security of personal data. Our approach to data breach management is guided by the following
            principles:</p>
          <h3 class="font-semibold md:text-xl text-xl">7.1 Detection and Assessment</h3>
          <p>We employ robust monitoring systems and security measures to promptly detect any unauthorized access,
            disclosure, or alteration of personal data. Upon detection, our dedicated incident response team conducts a
            thorough assessment to determine the nature and scope of the breach.</p>
          <h3 class="font-semibold md:text-xl text-xl">7.2 Containment and Mitigation</h3>
          <p>Immediate action is taken to contain the breach and prevent further unauthorized access or exposure of
            personal data. This may include disabling compromised accounts, isolating affected systems, or in some cases
            could be shutting down of the system and implementing additional security measures to mitigate the impact of
            the breach.</p>
          <h3 class="font-semibold md:text-xl text-xl">7.3 Notification</h3>
          <p>In compliance with applicable data protection laws and regulations, we notify affected individuals and
            relevant authorities of the data breach in a timely manner. Our notifications provide clear and transparent
            information about the breach, its potential impact on individuals, and the steps they can take to protect
            themselves.</p>
          <h3 class="font-semibold md:text-xl text-xl">7.4 Response and Recovery</h3>
          <p>We work diligently to address the root cause of the breach and implement remediation measures to prevent
            similar incidents in the future. This may involve conducting forensic investigations, enhancing security
            controls, and providing support to affected individuals.</p>
          <h3 class="font-semibold md:text-xl text-xl">7.5 Communication and Transparency</h3>
          <p>Throughout the breach response process, we maintain open and transparent communication with affected
            individuals, regulatory authorities, and other stakeholders. We provide regular updates on the status of the
            breach investigation and remediation efforts to ensure transparency and build trust.</p>
          <h3 class="font-semibold md:text-xl text-xl">7.6 Learning and Improvement</h3>
          <p>Following a data breach, we conduct a thorough post-incident review to identify lessons learned and areas
            for improvement in our data security practices. This includes revising policies and procedures, enhancing
            employee training programs, and implementing additional safeguards to strengthen our overall security
            posture.</p>
        </section>
        <section class="md:space-y-12 space-y-8" id="data-protection-officer">
          <h2 class="font-bold md:text-3xl text-2xl">8. Data Protection Officer</h2>
          <p>Novus MFB has appointed a Data Protection Officer (DPO) responsible for overseeing compliance with this
            policy and applicable data protection laws and regulations. The DPO serves as the point of contact for data
            subjects and supervisory authorities on data protection matters.</p>
        </section>
        <section class="md:space-y-12 space-y-8" id="compliance-monitoring-and-review">
          <h2 class="font-bold md:text-3xl text-2xl">9. Compliance Monitoring and Review</h2>
          <p>Novus MFB shall regularly monitor compliance with this Data Protection Policy and review its effectiveness
            to ensure ongoing compliance with applicable data protection laws and regulations. Updates and revisions to
            the policy will be made as necessary.</p>
        </section>
        <section class="md:space-y-12 space-y-8" id="training-and-awareness">
          <h2 class="font-bold md:text-3xl text-2xl">10. Training and Awareness</h2>
          <p>Novus MFB provides training and awareness programs to employees, contractors, and third parties involved in
            the processing of personal data to ensure understanding of their responsibilities and obligations under this
            policy and relevant data protection laws and regulations.</p>
        </section>
        <section class="md:space-y-12 space-y-8" id="policy-adoption-and-communication">
          <h2 class="font-bold md:text-3xl text-2xl">11. Policy Adoption and Communication</h2>
          <p>This Data Protection Policy is adopted by Novus MFB's management and communicated to all employees,
            contractors, and relevant stakeholders. It is publicly available on Novus MFB's website and accessible to
            data subjects upon request.</p>
        </section>
        <section class="md:space-y-12 space-y-8" id="contact-information">
          <h2 class="font-bold md:text-3xl text-2xl">12 .Contact Information</h2>
          <p>For inquiries or concerns regarding the processing of personal data by Novus MFB, data subjects may contact
            the Data Protection Officer (DPO) at Innocent.ejembi@novusmfb.com.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}

.sidebar::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
}

.sidebar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122, 153, 217)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148)));
}
</style>
