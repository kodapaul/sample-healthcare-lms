export default [
  {
    slug: 'hand-hygiene-infection-prevention',
    title: 'Hand Hygiene & Infection Prevention',
    category: 'Infection Control',
    level: 'Beginner',
    durationMinutes: 20,
    summary: 'This course covers the foundational principles of hand hygiene and infection prevention in clinical settings, including the WHO 5 Moments framework and correct handwashing technique to reduce healthcare-associated infections.',
    objectives: [
      'By the end of this course, learners will be able to identify the WHO 5 Moments for Hand Hygiene in clinical practice.',
      'By the end of this course, learners will be able to demonstrate correct handwashing and alcohol-based hand rub technique.',
      'By the end of this course, learners will be able to explain the chain of infection and where hand hygiene breaks transmission.',
      'By the end of this course, learners will be able to select the appropriate hand hygiene method based on clinical context.'
    ],
    lessons: [
      {
        id: 'chain-of-infection',
        title: 'The Chain of Infection',
        durationMinutes: 5,
        body: `Healthcare-associated infections (HAIs) are a significant source of patient harm worldwide. They occur when a pathogen is transmitted from a source to a susceptible host through a specific route. Understanding this chain of infection is the first step toward breaking it.\n\nThe chain consists of six links: an infectious agent, a reservoir, a portal of exit, a mode of transmission, a portal of entry, and a susceptible host. Interrupting any one of these links prevents infection from occurring. Hand hygiene is the single most effective intervention for interrupting the transmission link.\n\nContact transmission — both direct and indirect — is the most common route for pathogens in healthcare settings. Hands act as vectors when they touch contaminated surfaces or patients and then touch another patient or a clean surface without proper decontamination. Consistent hand hygiene practice disrupts this pathway before an HAI can develop.`,
        keyPoints: [
          'HAIs result from a chain of six interconnected transmission links.',
          'Breaking any single link in the chain prevents infection.',
          'Hand hygiene primarily interrupts the mode of transmission.',
          'Contact transmission is the most prevalent route in healthcare settings.'
        ]
      },
      {
        id: 'who-5-moments',
        title: 'WHO 5 Moments for Hand Hygiene',
        durationMinutes: 5,
        body: `The World Health Organization introduced the 5 Moments for Hand Hygiene framework to standardize when healthcare workers must perform hand hygiene. These moments are defined around the patient zone — the space immediately surrounding the patient, including their bed, bedside table, and any equipment in direct contact with them.\n\nThe five moments are: before touching a patient, before a clean or aseptic procedure, after body fluid exposure risk, after touching a patient, and after touching patient surroundings. Each moment represents a critical junction where the hands can either carry pathogens toward the patient or away from the environment.\n\nAdherence to all five moments is required for full protection. Focusing only on the moments most visible to observers — such as before patient contact — while neglecting others creates gaps that allow transmission to persist. Facilities typically use direct observation audits to monitor compliance across all five moments.`,
        keyPoints: [
          'The WHO framework defines five specific moments requiring hand hygiene.',
          'Moments apply within the patient zone, not only at direct patient contact.',
          'All five moments must be observed to prevent bidirectional transmission.',
          'Direct observation audits are the standard method for measuring compliance.'
        ]
      },
      {
        id: 'technique-soap-vs-abhr',
        title: 'Handwashing vs. Alcohol-Based Hand Rub',
        durationMinutes: 5,
        body: `Two methods of hand decontamination are used in clinical practice: handwashing with soap and water, and the application of an alcohol-based hand rub (ABHR). Each has specific indications, and selecting the correct method matters for effectiveness.\n\nAlcohol-based hand rub is the preferred method for most routine clinical moments because it is faster, less damaging to skin with repeated use, and more effective against a broad range of pathogens when hands are not visibly soiled. The WHO-recommended technique involves applying a sufficient volume to the palm and rubbing all surfaces of both hands — including fingertips, thumbs, and the dorsal surface — for 20 to 30 seconds until dry.\n\nHandwashing with soap and water is required when hands are visibly dirty or contaminated with blood or body fluids, after caring for a patient with confirmed or suspected Clostridioides difficile infection, and after using the toilet. The mechanical action of lathering and rinsing under running water physically removes spores and organic material that alcohol does not reliably inactivate. Effective handwashing should take 40 to 60 seconds from wetting to drying.`,
        keyPoints: [
          'ABHR is preferred for most clinical moments unless hands are visibly soiled.',
          'Soap and water are required after C. difficile exposure due to spore formation.',
          'ABHR technique should cover all hand surfaces for 20 to 30 seconds.',
          'Handwashing requires 40 to 60 seconds from start to dry.'
        ]
      },
      {
        id: 'gloves-and-ppe',
        title: 'Gloves, PPE, and Hand Hygiene',
        durationMinutes: 5,
        body: `A common misconception is that wearing gloves eliminates the need for hand hygiene. In practice, gloves are a supplemental barrier, not a substitute. Gloves can develop micro-tears during use and may become contaminated during removal. Hand hygiene must be performed both before donning and immediately after removing gloves.\n\nPersonal protective equipment (PPE) including gloves, gowns, masks, and eye protection is selected based on the anticipated exposure. Standard precautions apply to all patient interactions regardless of known infection status. Transmission-based precautions — contact, droplet, or airborne — add additional PPE requirements based on the route of a confirmed or suspected pathogen.\n\nDoffing PPE in the correct sequence is essential. Removing gloves first, followed by gown, then eye protection, and finally mask reduces the risk of self-contamination. Hand hygiene performed after each PPE item is removed reinforces the protective sequence and is considered part of the doffing procedure.`,
        keyPoints: [
          'Gloves do not replace hand hygiene — perform it before donning and after removal.',
          'Standard precautions apply to every patient, regardless of infection status.',
          'PPE selection is based on the anticipated route of exposure.',
          'Hand hygiene between doffing steps reduces self-contamination risk.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'According to the WHO 5 Moments framework, when must hand hygiene be performed in relation to a clean or aseptic procedure?',
        choices: [
          'After the procedure is completed',
          'Before the procedure begins',
          'Only if gloves will not be worn during the procedure',
          'Before and after the procedure'
        ],
        answerIndex: 1
      },
      {
        id: 'q2',
        prompt: 'Which of the following situations requires handwashing with soap and water rather than alcohol-based hand rub?',
        choices: [
          'Before inserting a peripheral IV catheter',
          'After routine vital sign assessment',
          'After caring for a patient with Clostridioides difficile infection',
          'Between assessments in the same patient cohort'
        ],
        answerIndex: 2
      },
      {
        id: 'q3',
        prompt: 'How long should an alcohol-based hand rub application last to be considered effective?',
        choices: [
          '5 to 10 seconds',
          '10 to 15 seconds',
          '20 to 30 seconds',
          '40 to 60 seconds'
        ],
        answerIndex: 2
      },
      {
        id: 'q4',
        prompt: 'A nurse removes exam gloves after a patient assessment. What is the correct next step?',
        choices: [
          'Apply fresh gloves before any further patient contact',
          'Perform hand hygiene immediately after glove removal',
          'Proceed to the next patient if the gloves appeared intact',
          'Perform hand hygiene only if the gloves were visibly contaminated'
        ],
        answerIndex: 1
      },
      {
        id: 'q5',
        prompt: 'Which link in the chain of infection does hand hygiene most directly interrupt?',
        choices: [
          'Infectious agent',
          'Reservoir',
          'Mode of transmission',
          'Susceptible host'
        ],
        answerIndex: 2
      }
    ]
  },
  {
    slug: 'medication-administration-safety',
    title: 'Medication Administration Safety',
    category: 'Medication Safety',
    level: 'Intermediate',
    durationMinutes: 30,
    summary: 'This course reviews the Rights of Medication Administration, common error types, high-alert medications, and structured verification processes that reduce adverse drug events in inpatient and outpatient clinical settings.',
    objectives: [
      'By the end of this course, learners will be able to apply the Rights of Medication Administration before each drug dose.',
      'By the end of this course, learners will be able to identify categories of high-alert medications and associated safety precautions.',
      'By the end of this course, learners will be able to describe the most common contributing factors to medication errors.',
      'By the end of this course, learners will be able to explain the role of independent double-checks for specific drug classes.',
      'By the end of this course, learners will be able to report a medication error or near-miss using the facility incident reporting system.'
    ],
    lessons: [
      {
        id: 'rights-of-administration',
        title: 'The Rights of Medication Administration',
        durationMinutes: 6,
        body: `The Rights of Medication Administration are a long-standing framework used to structure the verification process before giving any drug to a patient. The core five rights — right patient, right drug, right dose, right route, and right time — have been expanded in many institutions to include right documentation, right reason, and right response. Each right represents a checkpoint, and omitting any one increases the risk of an adverse drug event.\n\nVerifying the right patient requires two independent identifiers, typically the patient's full name and date of birth or medical record number. Relying solely on room number or bed assignment has led to serious errors. Identification must be confirmed against the medication administration record (MAR) and, where used, the patient's wristband.\n\nThe right drug check involves comparing the medication label against the order at least three times: when retrieving the medication, when preparing it, and immediately before administration. Tall-man lettering is one strategy used in labeling to visually differentiate look-alike drug names such as hydrALAZINE and hydrOXYzine. Attention to drug names at each verification step is a behavioral safeguard against selection errors.`,
        keyPoints: [
          'The core framework includes at least five rights, often expanded to eight.',
          'Two independent patient identifiers must be confirmed before every dose.',
          'Medication labels should be compared against the order at three distinct points.',
          'Tall-man lettering helps distinguish visually similar drug names.'
        ]
      },
      {
        id: 'high-alert-medications',
        title: 'High-Alert Medications',
        durationMinutes: 7,
        body: `High-alert medications are drugs that bear a heightened risk of causing significant patient harm when used in error. The Institute for Safe Medication Practices (ISMP) publishes and maintains a list of these agents. Common categories include anticoagulants, insulin, opioids, concentrated electrolytes, chemotherapy agents, and neuromuscular blocking agents.\n\nConcentrated electrolytes such as potassium chloride (KCl) and hypertonic sodium chloride have been responsible for fatal errors when administered undiluted or at incorrect rates. Many facilities remove concentrated KCl from floor stock entirely and require pharmacist preparation for all concentrated electrolyte infusions. Where floor stock is maintained, these agents must be stored separately from routine medications and require independent double-check procedures before administration.\n\nInsulin errors are among the most frequently reported high-alert medication events. Errors arise from confusion between insulin types, misinterpretation of handwritten orders (particularly the abbreviation "U" for units, which can be misread as a zero), and incorrect timing relative to meals. Safe practice requires that insulin orders be written out in full — "units" — and that patients on sliding-scale or basal-bolus regimens have blood glucose values verified and documented before each dose is given.`,
        keyPoints: [
          'High-alert medications cause disproportionate harm when errors occur.',
          'ISMP maintains the definitive reference list for high-alert drug categories.',
          'Concentrated electrolytes should be restricted from floor stock where possible.',
          'Insulin orders must spell out "units" to prevent misinterpretation errors.'
        ]
      },
      {
        id: 'error-types-contributing-factors',
        title: 'Common Error Types and Contributing Factors',
        durationMinutes: 7,
        body: `Medication errors are classified by where they occur in the medication use process: prescribing, transcription, dispensing, and administration. Administration errors — those made at the bedside — account for a substantial proportion of errors that reach the patient, because they represent the last point before the drug enters the body. Common administration error types include wrong dose, wrong route, omitted dose, and extra dose.\n\nHuman factors research consistently identifies distraction and interruption as leading contributors to medication errors. Studies have shown that nurses are interrupted an average of several times per medication preparation sequence, with each interruption increasing error risk. Some facilities have implemented medication preparation zones or visual cues such as vests or sashes worn during medication administration to signal to colleagues that interruptions should be deferred unless urgent.\n\nFatigue, high patient-to-nurse ratios, and poor lighting in medication rooms are additional systemic contributors. Individual blame does not address these root causes and discourages error reporting. A just culture approach recognizes that most errors arise from system failures rather than individual negligence, and encourages transparent reporting so that contributing factors can be analyzed and corrected at the system level.`,
        keyPoints: [
          'Administration errors reach the patient directly and are therefore high-priority.',
          'Interruption during medication preparation is a leading modifiable risk factor.',
          'No-interruption zones reduce distraction during high-risk preparation steps.',
          'A just culture promotes reporting by separating system failures from individual blame.'
        ]
      },
      {
        id: 'independent-double-checks',
        title: 'Independent Double-Checks',
        durationMinutes: 5,
        body: `An independent double-check (IDC) is a verification process in which a second qualified clinician independently — without first knowing the first clinician's calculation or setting — reviews the drug, dose, concentration, rate, and infusion pump programming before administration begins. The independence of the check is critical: if the second clinician is told in advance what the first found, cognitive bias reduces the verification to a formality.\n\nIDCs are most commonly required for high-alert infusions such as heparin, insulin drips, concentrated electrolytes, and opioid patient-controlled analgesia pumps. They are time-intensive and subject to "automation bias" if performed too frequently on lower-risk medications, which can lead to superficial checking. For this reason, most guidelines recommend targeting IDCs to the highest-risk situations rather than applying them universally.\n\nDocumentation of the IDC — including both clinicians' names — should be recorded in the MAR or electronic health record at the time of administration. If the two clinicians reach different conclusions, the discrepancy must be resolved before the medication is given. Escalation to a charge nurse or pharmacist is appropriate when disagreement cannot be quickly reconciled at the bedside.`,
        keyPoints: [
          'IDC validity depends on the second verifier working without knowing the first result.',
          'IDCs are targeted to high-alert infusions to prevent automation bias.',
          'Both clinicians involved in an IDC must be documented in the medical record.',
          'Unresolved discrepancies require escalation before administration proceeds.'
        ]
      },
      {
        id: 'error-reporting',
        title: 'Reporting Medication Errors and Near-Misses',
        durationMinutes: 5,
        body: `Timely and accurate error reporting is essential for organizational learning and patient safety improvement. A medication error that reaches the patient must be reported, but near-misses — events that were caught before reaching the patient — are equally valuable because they reveal vulnerabilities in the system before harm occurs. Underreporting of near-misses is a persistent challenge in healthcare organizations.\n\nMost facilities use an electronic incident reporting system. The report should document what occurred, when it was identified, which medications and doses were involved, what action was taken to protect the patient, and what factors may have contributed to the event. Clinicians should complete the report promptly after the patient has been stabilized and monitored.\n\nReporting a medication error does not preclude the need to disclose the error to the patient and family. Disclosure conversations should be conducted in clear language, explain what happened and what was done in response, and include any monitoring or follow-up that will occur as a result. Most patients report that transparency following an error, rather than concealment, preserves rather than damages their trust in the care team.`,
        keyPoints: [
          'Near-misses must be reported; they expose system vulnerabilities before harm occurs.',
          'Incident reports should be completed promptly after patient safety is addressed.',
          'Error disclosure to patients and families is a professional and ethical obligation.',
          'Transparent communication after errors generally preserves patient trust.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Which of the following is the correct minimum number of patient identifiers required before administering a medication?',
        choices: [
          'One — the patient\'s room number',
          'One — the patient\'s full name',
          'Two — such as full name and date of birth',
          'Three — name, date of birth, and room number'
        ],
        answerIndex: 2
      },
      {
        id: 'q2',
        prompt: 'Why is the abbreviation "U" considered unsafe in insulin orders?',
        choices: [
          'It is not recognized by pharmacy systems',
          'It can be misread as a zero, leading to a tenfold dose error',
          'It is ambiguous between different insulin formulations',
          'It bypasses the required weight-based dosing calculation'
        ],
        answerIndex: 1
      },
      {
        id: 'q3',
        prompt: 'What makes an independent double-check valid rather than a mere formality?',
        choices: [
          'The second clinician reviews the order within five minutes',
          'Both clinicians hold the same professional license',
          'The second clinician performs the verification without first knowing the first result',
          'The double-check is documented in the medication administration record'
        ],
        answerIndex: 2
      },
      {
        id: 'q4',
        prompt: 'Which action is most appropriate when two nurses reach different conclusions during an independent double-check?',
        choices: [
          'Default to the more experienced nurse\'s calculation',
          'Average the two calculations and administer that dose',
          'Proceed with administration and document the discrepancy afterward',
          'Withhold the medication and escalate to a charge nurse or pharmacist'
        ],
        answerIndex: 3
      },
      {
        id: 'q5',
        prompt: 'A nurse catches an error in a colleague\'s order before the medication reaches the patient. What should the nurse do?',
        choices: [
          'Correct the order silently to avoid embarrassing the prescriber',
          'Report the near-miss through the facility incident reporting system',
          'Only report it if the same error has occurred before',
          'File a report only if the error involved a high-alert medication'
        ],
        answerIndex: 1
      }
    ]
  },
  {
    slug: 'patient-communication-essentials',
    title: 'Patient Communication Essentials',
    category: 'Patient Care',
    level: 'Beginner',
    durationMinutes: 25,
    summary: 'This course introduces the core communication skills used in clinical encounters, including active listening, the SBAR framework, teach-back, and strategies for communicating clearly with patients whose health literacy or language needs require additional support.',
    objectives: [
      'By the end of this course, learners will be able to apply active listening techniques during patient interactions.',
      'By the end of this course, learners will be able to use the SBAR framework to communicate clinical handoff information.',
      'By the end of this course, learners will be able to implement the teach-back method to confirm patient understanding.',
      'By the end of this course, learners will be able to identify patients who require additional communication support and apply appropriate strategies.'
    ],
    lessons: [
      {
        id: 'active-listening',
        title: 'Active Listening in Clinical Settings',
        durationMinutes: 6,
        body: `Effective patient communication begins with listening — not simply waiting for a turn to speak, but attending fully to what the patient is saying, both verbally and nonverbally. Active listening involves maintaining appropriate eye contact, using brief verbal acknowledgments such as "I understand" or "go on," and reflecting back what the patient has said to confirm comprehension. These behaviors signal to the patient that their experience is being taken seriously.\n\nStudies on clinical encounters have found that patients are frequently interrupted by their clinician within the first seconds of describing their chief concern. When allowed to complete their opening statement without interruption, most patients finish within two minutes, and the information provided is richer and more diagnostically useful. Allowing the patient to speak fully before redirecting is a low-cost intervention with measurable impact on care quality.\n\nNonverbal communication carries significant weight in clinical interactions. Body language such as crossing arms, facing away, or typing on a workstation while a patient speaks can undermine verbal expressions of engagement. Where possible, clinicians should position themselves at eye level with the patient, minimize physical barriers, and set aside documentation tasks for the duration of the active assessment conversation.`,
        keyPoints: [
          'Active listening requires full attention, not just waiting to respond.',
          'Allowing patients to complete their opening statement improves diagnostic quality.',
          'Interrupting patients early in their account is a common and preventable habit.',
          'Nonverbal cues significantly affect how patients perceive engagement and trust.'
        ]
      },
      {
        id: 'sbar-framework',
        title: 'SBAR for Clinical Communication',
        durationMinutes: 6,
        body: `SBAR stands for Situation, Background, Assessment, and Recommendation. It is a structured communication framework originally developed in high-reliability industries and adapted for healthcare to standardize the transfer of clinical information between care team members. Its value lies in organizing information in a predictable sequence that reduces ambiguity during handoffs, phone consultations, and escalations.\n\nThe Situation component is a concise statement of what is happening right now: the patient's name, location, and the immediate concern. Background provides relevant context: diagnosis, admitting reason, pertinent history, and recent laboratory or vital sign trends. Assessment articulates the clinician's interpretation of what the data means — this is where clinical judgment is communicated explicitly, rather than leaving it to the recipient to draw conclusions. Recommendation states what action is being requested: an order, a bedside visit, a change in the care plan.\n\nUsing SBAR for bedside nursing handoffs and physician notifications reduces the risk of critical information being omitted. Organizations that have adopted structured handoff tools including SBAR have reported reductions in adverse events attributable to communication failures. The framework is particularly valuable during rapid escalations, when cognitive load is high and the natural tendency to communicate incompletely is greatest.`,
        keyPoints: [
          'SBAR structures communication into four predictable components to reduce ambiguity.',
          'The Assessment component requires the communicator to state their clinical interpretation.',
          'Structured handoff tools have been associated with reductions in communication-related harm.',
          'SBAR is especially valuable during high-stress escalations with high cognitive load.'
        ]
      },
      {
        id: 'teach-back-method',
        title: 'The Teach-Back Method',
        durationMinutes: 7,
        body: `Teach-back is an evidence-based technique for confirming that a patient or caregiver has understood the information they have been given. Rather than asking "Do you have any questions?" — which tends to elicit a socially compliant "no" regardless of actual understanding — teach-back asks the patient to explain the information back in their own words. This allows the clinician to identify and correct misunderstandings before the patient leaves the care setting.\n\nEffective teach-back frames the request in a way that places responsibility on the clinician, not the patient. A clinician might say, "I want to make sure I explained your discharge instructions clearly. Can you walk me through what you will do when you get home?" This phrasing avoids making the patient feel tested and reduces the social pressure that can lead to false confirmation of understanding.\n\nTeach-back is particularly important for discharge planning, medication instructions, and management of chronic conditions. Research has associated consistent teach-back use with reduced hospital readmission rates, better medication adherence, and improved chronic disease outcomes. It is most effective when clinicians close information gaps identified during the teach-back exchange rather than simply repeating the original explanation verbatim.`,
        keyPoints: [
          'Teach-back confirms understanding by asking patients to re-explain information.',
          'Asking "Do you have any questions?" is not an effective substitute for teach-back.',
          'Framing requests as clinician responsibility reduces patient social pressure.',
          'Teach-back is associated with reduced readmissions and better medication adherence.'
        ]
      },
      {
        id: 'health-literacy-language-access',
        title: 'Health Literacy and Language Access',
        durationMinutes: 6,
        body: `Health literacy refers to a patient's ability to obtain, understand, and use health information to make informed decisions. Low health literacy is more prevalent than many clinicians expect — it spans education levels and is not reliably predicted by a patient's occupation, age, or apparent comprehension during conversation. Patients with low health literacy are more likely to misunderstand medication instructions, miss follow-up appointments, and experience preventable complications.\n\nPlain language principles support effective communication with patients across the health literacy spectrum. This means using common words rather than clinical terminology, speaking in short sentences, limiting the number of key points per interaction, and pairing verbal instructions with written materials written at an appropriate reading level. Medical jargon should be avoided unless the term is immediately explained in plain terms.\n\nPatients with limited English proficiency have a legal right under Title VI of the Civil Rights Act to language assistance services at no cost. This requires the use of trained medical interpreters — not family members, and not untrained bilingual staff — for clinical conversations involving diagnosis, treatment, or consent. Using untrained interpreters increases the risk of clinically significant miscommunication. Facilities must maintain access to interpreter services in person, by telephone, or via video remote interpreting.`,
        keyPoints: [
          'Low health literacy does not reliably correlate with education level or apparent comprehension.',
          'Plain language uses common words, short sentences, and a limited number of key points.',
          'Patients with limited English proficiency have a legal right to interpreter services.',
          'Family members should not serve as medical interpreters in clinical conversations.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'In the SBAR communication framework, which component requires the clinician to state their clinical interpretation of the situation?',
        choices: [
          'Situation',
          'Background',
          'Assessment',
          'Recommendation'
        ],
        answerIndex: 2
      },
      {
        id: 'q2',
        prompt: 'A nurse asks a patient, "Can you walk me through what you will do with this medication at home?" This is an example of which technique?',
        choices: [
          'SBAR handoff communication',
          'Motivational interviewing',
          'Teach-back method',
          'Structured discharge planning'
        ],
        answerIndex: 2
      },
      {
        id: 'q3',
        prompt: 'Which of the following is the most effective way to confirm patient understanding at discharge?',
        choices: [
          'Asking "Do you have any questions?"',
          'Providing a detailed written pamphlet',
          'Asking the patient to explain the information back in their own words',
          'Having a family member confirm they understood the instructions'
        ],
        answerIndex: 2
      },
      {
        id: 'q4',
        prompt: 'Who is the appropriate interpreter for a clinical conversation involving diagnosis and treatment with a patient who has limited English proficiency?',
        choices: [
          'The patient\'s adult family member who speaks both languages',
          'A bilingual unit staff member who volunteers to assist',
          'A trained medical interpreter, in person or via remote service',
          'Written bilingual materials provided without verbal support'
        ],
        answerIndex: 2
      },
      {
        id: 'q5',
        prompt: 'Research on clinical encounters has found that most patients finish their opening statement without interruption within approximately how long?',
        choices: [
          'Thirty seconds',
          'Two minutes',
          'Five minutes',
          'Ten minutes'
        ],
        answerIndex: 1
      }
    ]
  },
  {
    slug: 'mental-health-crisis-response',
    title: 'Recognizing & Responding to Mental Health Crises',
    category: 'Mental Health',
    level: 'Intermediate',
    durationMinutes: 30,
    summary: 'This course covers recognition of acute mental health crises in clinical settings, including suicidal ideation, psychotic episodes, and severe anxiety, along with structured response approaches, de-escalation techniques, and documentation requirements.',
    objectives: [
      'By the end of this course, learners will be able to recognize behavioral and verbal indicators of a mental health crisis.',
      'By the end of this course, learners will be able to conduct a basic safety assessment using structured screening questions.',
      'By the end of this course, learners will be able to apply de-escalation techniques in an acute agitation situation.',
      'By the end of this course, learners will be able to describe the appropriate escalation and documentation process following a crisis event.',
      'By the end of this course, learners will be able to identify self-care strategies to mitigate vicarious trauma after crisis response.'
    ],
    lessons: [
      {
        id: 'recognizing-crisis-indicators',
        title: 'Recognizing Indicators of Mental Health Crisis',
        durationMinutes: 6,
        body: `A mental health crisis is any situation in which a person's behavior poses an imminent danger to themselves or others, or in which a person is unable to care for themselves due to a psychiatric condition. Crises can present across a wide spectrum, from a patient expressing passive suicidal ideation during a routine visit to an acute psychotic episode in the emergency department. Early recognition allows for timely and appropriate intervention.\n\nKey behavioral indicators include sudden changes in mood or affect, disorganized speech or thought patterns, refusal to engage with care, withdrawal from communication, or escalating agitation. Verbal indicators include direct or indirect statements about self-harm, feelings of hopelessness, statements suggesting the patient believes others would be better off without them, or expressions of intent to harm others. Both behavioral and verbal cues must be taken seriously — minimizing or dismissing them is a significant clinical error.\n\nClinicians in non-psychiatric settings should be aware that mental health crises frequently co-occur with medical conditions and presentations. Metabolic disturbances, medication side effects, substance withdrawal, and delirium can all produce behaviors that resemble psychiatric crises and must be included in the differential assessment. A comprehensive response addresses both the immediate safety need and the underlying medical or psychiatric cause.`,
        keyPoints: [
          'Crisis presentations range from passive ideation to acute psychosis or agitation.',
          'Both behavioral and verbal indicators require a structured response.',
          'Dismissing or minimizing crisis indicators is a clinical error with serious consequences.',
          'Medical causes of crisis-like behavior must be considered in the assessment.'
        ]
      },
      {
        id: 'safety-assessment',
        title: 'Conducting a Basic Safety Assessment',
        durationMinutes: 7,
        body: `When a patient presents with indicators of potential self-harm, a safety assessment must be conducted promptly and documented. Directly asking a patient about suicidal ideation does not increase the risk of suicide — this is a well-established finding in the clinical literature — and avoidance of direct questioning leaves critical information unaddressed.\n\nA structured approach to safety assessment includes several core domains: the presence of suicidal ideation (passive or active), the existence of a specific plan, access to means, intent to act, and any history of prior attempts. Prior suicide attempts are one of the strongest predictors of future attempt risk and must always be documented and communicated to the receiving care team during handoffs. The Columbia Suicide Severity Rating Scale (C-SSRS) is a validated instrument used widely to standardize this assessment.\n\nThe outcome of a safety assessment determines the appropriate level of intervention. A patient with passive ideation and no plan may be managed with outpatient resources and a safety plan. A patient with active ideation, a specific plan, and access to means requires immediate escalation to psychiatric consultation and, depending on the clinical setting, potential initiation of an involuntary hold evaluation. Clinicians should be familiar with their facility's specific protocols and with applicable state regulations governing involuntary psychiatric evaluation.`,
        keyPoints: [
          'Directly asking about suicidal ideation does not increase risk — avoidance does.',
          'Prior suicide attempts are a strong predictor of future attempt risk.',
          'The C-SSRS is a validated, widely used tool for standardizing safety assessments.',
          'Assessment findings determine the appropriate level of clinical intervention.'
        ]
      },
      {
        id: 'de-escalation-techniques',
        title: 'De-escalation in Acute Agitation',
        durationMinutes: 7,
        body: `De-escalation is a set of verbal and nonverbal techniques used to reduce the intensity of an agitated patient's distress and decrease the likelihood of physical aggression. Evidence supports verbal de-escalation as the first-line response to acute agitation before pharmacological or physical intervention is considered. Restraint use carries significant physiological and psychological risks for patients and should be reserved for situations in which less restrictive measures have failed or immediate safety cannot be otherwise maintained.\n\nEffective de-escalation involves speaking in a calm, low, unhurried tone; using the patient's preferred name; maintaining a respectful and non-confrontational posture; offering choices where genuine options exist; and avoiding commands, ultimatums, or dismissive language. Spatial positioning matters — clinicians should avoid cornering a patient, maintain enough distance to de-escalate personal space triggers, and ensure that the patient perceives a clear path to exit.\n\nActive listening is central to de-escalation. Acknowledging the patient's emotional experience without necessarily agreeing with their stated perceptions conveys respect and reduces the adversarial dynamic that can accelerate escalation. Statements such as "It sounds like you're feeling very frustrated right now, and I want to understand what you need" are more effective than instructions to "calm down." Teams should be briefed before entering a situation when possible, with a designated primary communicator to prevent conflicting messages.`,
        keyPoints: [
          'Verbal de-escalation is the evidence-based first-line response to acute agitation.',
          'Calm tone, spatial positioning, and genuine choices are core de-escalation tools.',
          'Acknowledging emotional experience reduces adversarial dynamics during crises.',
          'One designated communicator prevents conflicting messages to an agitated patient.'
        ]
      },
      {
        id: 'escalation-and-documentation',
        title: 'Escalation, Documentation, and Handoff',
        durationMinutes: 5,
        body: `Following a mental health crisis event, thorough documentation is both a clinical and legal obligation. The record should include a description of the behaviors and statements that prompted concern, the specific assessment findings including ideation, plan, means, and intent, the interventions applied, the patient's response to those interventions, and the disposition and follow-up plan. Vague entries such as "patient was upset" do not meet clinical or legal documentation standards.\n\nCrisis events must be communicated explicitly during care transitions. A patient who experienced a suicidal crisis during one shift may be transferred to another unit or another provider before full stabilization. The handoff must include a safety assessment summary, any agreed-upon safety plan, and any standing orders or behavioral care plans. Using a structured tool such as SBAR ensures this information is not omitted under time pressure.\n\nEscalation to psychiatric consultation, behavioral response teams, or administration should follow facility-specific protocols. Clinicians who are uncertain whether a situation requires escalation should err toward involving additional expertise rather than managing alone. Early escalation is associated with better outcomes and is not a reflection of clinical inadequacy — recognizing the need for specialist input is sound clinical judgment.`,
        keyPoints: [
          'Documentation must include specific assessment findings, not vague behavioral descriptions.',
          'Safety status must be explicitly communicated at every handoff.',
          'Early escalation to specialist resources is appropriate and reflects sound judgment.',
          'Safety plans and behavioral care plans must transfer with the patient across settings.'
        ]
      },
      {
        id: 'clinician-self-care',
        title: 'Vicarious Trauma and Clinician Self-Care',
        durationMinutes: 5,
        body: `Repeated exposure to patient crises, trauma histories, and acute psychiatric emergencies can produce vicarious trauma in clinicians — a gradual shift in worldview and emotional functioning that results from bearing witness to others' suffering. Unlike acute stress reactions, vicarious trauma accumulates over time and may not be immediately recognizable as work-related. Symptoms include emotional numbness, hypervigilance, difficulty separating work experiences from personal life, and changes in beliefs about safety or human nature.\n\nOrganizations have a responsibility to support clinician wellbeing through structured debriefing after critical incidents, access to employee assistance programs, and a culture that normalizes help-seeking. Individual strategies that buffer against vicarious trauma include deliberate self-reflection on meaning and impact, maintaining clear boundaries between professional and personal time, peer support relationships, and consistent engagement with activities that replenish psychological resources.\n\nClinicians experiencing significant distress following crisis response should be encouraged to seek support rather than suppress or dismiss their reactions. Acknowledging the emotional weight of crisis work is not a professional weakness — it is consistent with the psychological demands of the role. Units that conduct structured post-crisis debriefs report higher team cohesion and lower rates of staff burnout compared to those where critical events are not discussed.`,
        keyPoints: [
          'Vicarious trauma accumulates gradually from repeated exposure to patient suffering.',
          'Symptoms may not be immediately recognized as occupationally related.',
          'Structured debriefing after critical incidents supports team cohesion and reduces burnout.',
          'Seeking support after crisis response is appropriate and professionally encouraged.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Which of the following is a well-established finding regarding direct questioning about suicidal ideation?',
        choices: [
          'It significantly increases the risk of a suicide attempt.',
          'It should only be done by licensed mental health professionals.',
          'It does not increase suicide risk and is an essential part of assessment.',
          'It is appropriate only when a patient has a known psychiatric history.'
        ],
        answerIndex: 2
      },
      {
        id: 'q2',
        prompt: 'A patient is becoming increasingly agitated in their room. According to de-escalation principles, what is the appropriate first response?',
        choices: [
          'Call for restraints to ensure safety before the situation escalates further',
          'Apply verbal de-escalation techniques using calm tone and active listening',
          'Administer a PRN sedative medication before verbal intervention is attempted',
          'Alert security and wait outside until the patient has calmed down independently'
        ],
        answerIndex: 1
      },
      {
        id: 'q3',
        prompt: 'Which assessment finding is one of the strongest predictors of future suicide attempt risk?',
        choices: [
          'A current diagnosis of depression',
          'Expression of passive suicidal ideation without a plan',
          'History of a prior suicide attempt',
          'Current use of psychiatric medication'
        ],
        answerIndex: 2
      },
      {
        id: 'q4',
        prompt: 'What does the C-SSRS stand for, and what is its purpose in mental health crisis assessment?',
        choices: [
          'Clinical Suicide Screening Reference System — a diagnostic classification tool',
          'Columbia Suicide Severity Rating Scale — a validated tool for standardizing safety assessments',
          'Comprehensive Safety and Stabilization Rating Survey — an inpatient triage instrument',
          'Crisis Situation Severity Response Scale — a pharmacological dosing guide'
        ],
        answerIndex: 1
      },
      {
        id: 'q5',
        prompt: 'Which of the following is an example of vicarious trauma as distinct from acute work-related stress?',
        choices: [
          'Feeling anxious immediately after witnessing a patient code',
          'Becoming tearful during a patient\'s emotional disclosure',
          'A gradual shift in worldview and emotional functioning over time from repeated exposure',
          'Experiencing brief fatigue at the end of a demanding shift'
        ],
        answerIndex: 2
      }
    ]
  },
  {
    slug: 'hipaa-patient-privacy',
    title: 'HIPAA & Patient Privacy Fundamentals',
    category: 'Compliance',
    level: 'Beginner',
    durationMinutes: 25,
    summary: 'This course introduces the key provisions of HIPAA\'s Privacy Rule and Security Rule, defines protected health information, explains patients\' rights under the law, and identifies common compliance pitfalls in everyday clinical and administrative workflows.',
    objectives: [
      'By the end of this course, learners will be able to define protected health information and identify its 18 identifiers.',
      'By the end of this course, learners will be able to explain the permitted uses and disclosures under the HIPAA Privacy Rule.',
      'By the end of this course, learners will be able to describe the core requirements of the HIPAA Security Rule for electronic PHI.',
      'By the end of this course, learners will be able to identify patients\' rights under HIPAA and how to fulfill them.',
      'By the end of this course, learners will be able to recognize common HIPAA violations and apply corrective practices.'
    ],
    lessons: [
      {
        id: 'what-is-phi',
        title: 'Protected Health Information Defined',
        durationMinutes: 5,
        body: `Protected health information (PHI) is any individually identifiable health information held or transmitted by a covered entity or its business associate in any form or medium, whether electronic, paper, or oral. The HIPAA Privacy Rule, issued under the Health Insurance Portability and Accountability Act of 1996, establishes the federal floor for PHI protection. State laws may impose stricter requirements, and in those cases the more protective standard applies.\n\nHIPAA identifies 18 specific categories of information that, when linked to health data, constitute PHI. These include direct identifiers such as name, address, and Social Security number, as well as less obvious identifiers such as geographic subdivisions smaller than a state, dates other than year for individuals over 89, vehicle identifiers, device identifiers, URLs, and full-face photographs. Even data that has been partially de-identified may remain PHI if the remaining elements can reasonably be used to identify the individual.\n\nCovered entities under HIPAA include healthcare providers who transmit health information electronically, health plans, and healthcare clearinghouses. Business associates — vendors or contractors that perform services involving access to PHI — are also subject to HIPAA obligations through Business Associate Agreements. Staff who handle PHI in any form are responsible for understanding their obligations regardless of whether they have direct patient contact.`,
        keyPoints: [
          'PHI is individually identifiable health information in any format — electronic, paper, or oral.',
          'HIPAA identifies 18 specific categories of information that constitute PHI.',
          'Business associates are subject to HIPAA through executed Business Associate Agreements.',
          'Partial de-identification does not eliminate PHI status if re-identification remains feasible.'
        ]
      },
      {
        id: 'permitted-uses-disclosures',
        title: 'Permitted Uses and Disclosures',
        durationMinutes: 6,
        body: `The HIPAA Privacy Rule establishes a general principle that PHI may not be used or disclosed without the patient's written authorization, subject to a set of defined exceptions. The most significant exception is the treatment, payment, and healthcare operations (TPO) category: covered entities may use and disclose PHI without patient authorization for purposes of providing treatment, obtaining payment, and conducting routine health care operations such as quality improvement, training, and accreditation activities.\n\nPublic health activities, mandatory reporting requirements, law enforcement disclosures under specific conditions, disclosures to the Department of Health and Human Services for compliance investigations, and certain research uses under institutional review board approval are among the other permitted uses that do not require individual authorization. The minimum necessary standard applies to most of these disclosures: covered entities must make reasonable efforts to limit PHI to the minimum necessary to accomplish the intended purpose.\n\nThe minimum necessary standard does not apply to disclosures for treatment purposes — a treating provider may share relevant clinical details with other members of the care team as needed. It does apply to administrative uses, disclosures to third parties, and requests from other covered entities who are not directly involved in the patient's treatment. Understanding when the standard applies helps staff make appropriate decisions about how much information to include in a disclosure.`,
        keyPoints: [
          'PHI may be used without authorization for treatment, payment, and healthcare operations.',
          'The minimum necessary standard limits disclosures to what is needed for the stated purpose.',
          'Minimum necessary does not restrict disclosures between treating providers.',
          'Research, public health, and law enforcement disclosures have specific conditions and limitations.'
        ]
      },
      {
        id: 'security-rule-ephi',
        title: 'The HIPAA Security Rule and Electronic PHI',
        durationMinutes: 6,
        body: `The HIPAA Security Rule applies specifically to electronic protected health information (ePHI) and requires covered entities and business associates to implement administrative, physical, and technical safeguards to protect its confidentiality, integrity, and availability. Unlike the Privacy Rule, which applies to all formats of PHI, the Security Rule is limited to ePHI — any PHI that is created, received, maintained, or transmitted electronically.\n\nAdministrative safeguards include security management processes such as risk analysis and risk management, workforce training and access controls, and security incident response procedures. Physical safeguards govern access to the physical locations and devices where ePHI is stored or accessed, including workstation use policies, device and media controls, and facility access controls. Technical safeguards cover access controls, audit controls, integrity controls, and transmission security measures such as encryption.\n\nA formal risk analysis is a foundational Security Rule requirement. It involves identifying potential threats and vulnerabilities to ePHI, assessing the likelihood and potential impact of those threats, and implementing security measures that reduce risk to a reasonable and appropriate level. Risk analysis is not a one-time exercise — it must be reviewed and updated in response to environmental or operational changes, such as new technology deployments, workforce changes, or identified security incidents.`,
        keyPoints: [
          'The Security Rule applies only to ePHI — electronically created, received, or transmitted PHI.',
          'Safeguards are categorized as administrative, physical, and technical.',
          'Risk analysis is a mandatory, ongoing Security Rule requirement.',
          'Risk analysis must be updated in response to organizational or environmental changes.'
        ]
      },
      {
        id: 'patient-rights',
        title: 'Patient Rights Under HIPAA',
        durationMinutes: 4,
        body: `HIPAA grants patients several rights over their own health information. These rights include the right to access and receive a copy of their medical records, the right to request amendments to records they believe are inaccurate or incomplete, the right to receive an accounting of certain disclosures of their PHI, and the right to request restrictions on certain uses and disclosures. Patients also have the right to receive a Notice of Privacy Practices describing how the covered entity uses and protects their information.\n\nCovered entities must respond to patient access requests within 30 days, with a permissible 30-day extension if the patient is notified in writing. Fees for copies of records must be reasonable and cost-based — charging excessive fees is a common compliance issue. Denial of access is permitted only in specific narrow circumstances defined by the rule, and patients have the right to request a review of a denial.\n\nFacility staff who receive patient rights requests should route them promptly to the appropriate privacy officer or medical records department rather than attempting to fulfill them independently. Missteps in handling access requests — such as providing an incomplete record, missing the response deadline, or improperly denying access — are reportable compliance failures.`,
        keyPoints: [
          'Patients have the right to access, amend, and receive an accounting of PHI disclosures.',
          'Access requests must be fulfilled within 30 days, with one permissible extension.',
          'Record copy fees must be reasonable and cost-based, not excessive.',
          'Patient rights requests should be routed to the privacy officer or medical records staff.'
        ]
      },
      {
        id: 'common-violations',
        title: 'Common HIPAA Violations and Preventive Practices',
        durationMinutes: 4,
        body: `Many HIPAA violations in clinical settings stem from routine behaviors that staff may not recognize as compliance risks. Discussing patient cases in public areas such as elevators, lobbies, or cafeterias where conversations can be overheard is a common oral PHI violation. Sharing login credentials, leaving workstations unlocked and unattended, or accessing the records of patients outside one's care assignment are frequent technical and administrative violations.\n\nLost or stolen unencrypted devices — laptops, USB drives, and mobile devices containing ePHI — represent one of the most significant categories of reportable breaches. Encryption of portable devices is a widely recommended safeguard that, if implemented, can eliminate the notification obligation for a lost device under the breach notification rule, because the data is unreadable without the decryption key. Device management policies should address all portable media that may store ePHI.\n\nViolations involving unauthorized access to a famous or high-profile patient's records — often called "celebrity snooping" — account for a consistent proportion of workforce terminations and civil monetary penalty actions. Accessing a patient's record out of personal curiosity, even without sharing the information, is a HIPAA violation. Covered entities are required to audit access logs for their EHR systems and investigate patterns of unusual access. Workforce members must understand that their access is logged and subject to review.`,
        keyPoints: [
          'Oral disclosures in public areas are a common and preventable Privacy Rule violation.',
          'Sharing login credentials is an administrative safeguard violation.',
          'Encryption of portable devices mitigates breach notification obligations upon device loss.',
          'Accessing patient records out of personal curiosity is a HIPAA violation subject to audit.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'Which of the following is one of the 18 HIPAA identifiers that can make health data constitute protected health information?',
        choices: [
          'Patient\'s general geographic region, such as a state name',
          'The patient\'s treating physician\'s name',
          'The patient\'s vehicle identification number',
          'A clinical diagnosis recorded without the patient\'s name'
        ],
        answerIndex: 2
      },
      {
        id: 'q2',
        prompt: 'A charge nurse asks a floor nurse to share a patient\'s medication list to facilitate care coordination. Does this require patient authorization under HIPAA?',
        choices: [
          'Yes, because the charge nurse is not the treating physician',
          'Yes, because any PHI transfer requires written authorization',
          'No, because treatment disclosures between care team members are permitted without authorization',
          'No, because verbal disclosures are excluded from HIPAA requirements'
        ],
        answerIndex: 2
      },
      {
        id: 'q3',
        prompt: 'Which of the following best describes the minimum necessary standard under the HIPAA Privacy Rule?',
        choices: [
          'Covered entities must share the minimum amount of PHI required for any purpose, including treatment',
          'Covered entities must limit PHI disclosures to what is needed, except when disclosing for treatment purposes',
          'PHI should be de-identified before any disclosure to meet the minimum necessary requirement',
          'The standard applies only to electronic PHI, not to paper or oral disclosures'
        ],
        answerIndex: 1
      },
      {
        id: 'q4',
        prompt: 'A staff member accesses the medical record of a hospitalized colleague out of personal concern. This is best described as which type of HIPAA issue?',
        choices: [
          'A permitted disclosure because the intent was supportive',
          'An unauthorized access violation regardless of intent',
          'An acceptable use under the healthcare operations exception',
          'A minor infraction that does not require reporting'
        ],
        answerIndex: 1
      },
      {
        id: 'q5',
        prompt: 'Within how many days must a covered entity respond to a patient\'s medical record access request?',
        choices: [
          '10 days',
          '15 days',
          '30 days',
          '60 days'
        ],
        answerIndex: 2
      }
    ]
  },
  {
    slug: 'bls-refresher',
    title: 'Basic Life Support (BLS) Refresher',
    category: 'Emergency Care',
    level: 'Advanced',
    durationMinutes: 35,
    summary: 'This course reviews the current American Heart Association BLS guidelines for adult, child, and infant cardiac arrest, including high-quality CPR technique, AED operation, relief of foreign-body airway obstruction, and team-based resuscitation roles.',
    objectives: [
      'By the end of this course, learners will be able to describe the components of high-quality CPR as defined by current AHA guidelines.',
      'By the end of this course, learners will be able to demonstrate the correct sequence for adult, child, and infant BLS.',
      'By the end of this course, learners will be able to explain the operation of an automated external defibrillator in a cardiac arrest scenario.',
      'By the end of this course, learners will be able to perform the correct technique for relieving foreign-body airway obstruction in conscious and unconscious patients.',
      'By the end of this course, learners will be able to describe team roles in a resuscitation effort to minimize interruptions in compressions.'
    ],
    lessons: [
      {
        id: 'high-quality-cpr',
        title: 'Components of High-Quality CPR',
        durationMinutes: 8,
        body: `High-quality CPR is the single most modifiable determinant of survival from cardiac arrest. The American Heart Association (AHA) defines the components of high-quality CPR as adequate compression rate, adequate compression depth, allowing full chest recoil between compressions, minimizing interruptions, and avoiding excessive ventilation. Each component has been associated with measurable differences in return of spontaneous circulation (ROSC) and survival to hospital discharge.\n\nFor adults, compressions should be delivered at a rate of 100 to 120 per minute and to a depth of at least 2 inches (5 cm), not exceeding 2.4 inches (6 cm). Compression rate above 120 per minute is associated with inadequate depth due to insufficient time for full recoil, which diminishes coronary perfusion pressure. Full chest recoil — allowing the chest to fully rise between compressions without the rescuer leaning on the chest — is necessary to allow venous return and refill the right ventricle.\n\nInterruptions in chest compressions reduce the mean aortic pressure that drives coronary and cerebral perfusion. The chest compression fraction — the proportion of resuscitation time during which compressions are being delivered — should be at least 60%, with a target greater than 80% in organized resuscitation teams. Pre-charging the defibrillator before rhythm analysis, limiting pulse checks to 10 seconds, and switching compressors every two minutes are strategies used to maximize compression fraction during a resuscitation effort.`,
        keyPoints: [
          'Adult compressions: 100 to 120 per minute, at least 2 inches deep, with full recoil.',
          'Compression rate above 120 per minute compromises depth and coronary perfusion pressure.',
          'Chest compression fraction should exceed 60%, with a target above 80% for trained teams.',
          'Minimizing interruptions is one of the most impactful factors in survival from cardiac arrest.'
        ]
      },
      {
        id: 'adult-child-infant-sequences',
        title: 'BLS Sequences: Adult, Child, and Infant',
        durationMinutes: 8,
        body: `The BLS sequence varies by age group, reflecting differences in the predominant cause of cardiac arrest and in anatomy. For adults, cardiac arrest is most commonly caused by a primary cardiac event such as ventricular fibrillation, making immediate chest compressions and early defibrillation the priority. For children and infants, arrest is more often the result of respiratory failure or hypoxia, making effective ventilation relatively more important in the rescue sequence.\n\nFor unresponsive adults, the sequence is: confirm scene safety, confirm unresponsiveness, activate emergency medical services (or direct a bystander to activate), begin chest compressions (C-A-B: compressions, airway, breathing), and apply an AED as soon as available. For lone rescuers with a child or infant who likely experienced an asphyxial arrest, two minutes of CPR are recommended before leaving to activate EMS, because early oxygenation may be critical.\n\nInfant compressions are delivered using two fingers on the lower half of the sternum, just below the nipple line, to a depth of approximately 1.5 inches (4 cm). For the two-thumb encircling technique used by two trained rescuers, both thumbs are placed on the lower third of the sternum with the hands encircling the chest — this technique produces higher coronary perfusion pressures and is preferred when a second rescuer is available. The compression-to-ventilation ratio for CPR with an advanced airway in place is continuous compressions at 100 to 120 per minute with one breath every 6 seconds, regardless of patient age.`,
        keyPoints: [
          'Adult arrest is typically cardiac in origin; pediatric arrest is typically respiratory.',
          'The adult BLS sequence prioritizes compressions and early defibrillation.',
          'Infant compressions use two fingers or the two-thumb encircling technique to a depth of 1.5 inches.',
          'With an advanced airway, deliver one breath every 6 seconds regardless of patient age.'
        ]
      },
      {
        id: 'aed-operation',
        title: 'AED Operation and Defibrillation Principles',
        durationMinutes: 7,
        body: `Automated external defibrillators (AEDs) are designed for use by both trained and untrained rescuers. The device analyzes the cardiac rhythm and, if a shockable rhythm — ventricular fibrillation or pulseless ventricular tachycardia — is detected, delivers a shock to restore organized electrical activity. AEDs do not benefit patients in asystole or pulseless electrical activity, which are non-shockable rhythms.\n\nThe sequence for AED use is: power on the device, attach the pads to the bare chest as illustrated (right of the sternum below the clavicle and the left lateral chest wall below the axilla), allow the device to analyze the rhythm, and follow the voice prompts. Before delivering a shock, all rescuers must clear the patient — no one should be touching the patient or any conducting surface. After delivering a shock, CPR should be resumed immediately without checking for a pulse; a rhythm and pulse check is conducted after two minutes of post-shock CPR.\n\nPad placement modifications are required in specific circumstances. For a patient with an implanted pacemaker or defibrillator, pads should be placed at least one inch away from the device. For a patient wearing a transdermal medication patch such as nitroglycerin in the pad placement area, the patch should be removed and the skin wiped dry before applying the pad. Pad placement should also be modified for infants and children under 25 kg when only adult pads are available, using anterior-posterior positioning to prevent arc.`,
        keyPoints: [
          'AEDs treat ventricular fibrillation and pulseless ventricular tachycardia only.',
          'All rescuers must clear the patient before shock delivery.',
          'Resume CPR immediately after shock delivery without checking for a pulse.',
          'Implanted cardiac devices require pads to be placed at least one inch from the device.'
        ]
      },
      {
        id: 'fbao-management',
        title: 'Foreign-Body Airway Obstruction Management',
        durationMinutes: 6,
        body: `Foreign-body airway obstruction (FBAO) is a life-threatening emergency that requires immediate recognition and action. A conscious adult or child with a severe or complete obstruction will typically show the universal choking sign — hands clutched to the throat — and be unable to speak, cough effectively, or breathe. Mild obstruction, in which the patient can still cough forcefully or speak, should be managed by encouraging continued coughing rather than performing abdominal thrusts, as unnecessary intervention can dislodge the object into a worse position.\n\nFor a conscious adult or child with severe FBAO, the Heimlich maneuver — a series of firm abdominal thrusts delivered with the rescuer standing behind the patient — is the recommended technique. For a pregnant patient or an individual with significant obesity, chest thrusts are substituted for abdominal thrusts. Thrusts are continued until the object is expelled, the patient loses consciousness, or emergency services arrive.\n\nIf a patient with FBAO becomes unresponsive, the rescuer should lower the patient to the ground and begin the standard cardiac arrest sequence. Each time the airway is opened for rescue breaths, the rescuer should look for a visible object in the mouth and remove it if it can be seen. Blind finger sweeps are no longer recommended because they risk pushing the obstruction deeper. For infants, FBAO is managed with a sequence of five back blows followed by five chest thrusts — abdominal thrusts are not used in infants due to the risk of abdominal organ injury.`,
        keyPoints: [
          'Encourage forceful coughing for mild FBAO; abdominal thrusts are for severe obstruction only.',
          'Chest thrusts replace abdominal thrusts for pregnant patients and those with obesity.',
          'If a choking patient loses consciousness, begin CPR and check for visible objects before ventilating.',
          'Infant FBAO is managed with back blows and chest thrusts, never abdominal thrusts.'
        ]
      },
      {
        id: 'team-resuscitation-roles',
        title: 'Team-Based Resuscitation and Role Clarity',
        durationMinutes: 6,
        body: `Effective resuscitation in a healthcare setting is a team performance, not an individual skill. Research on resuscitation outcomes demonstrates that teams with clear role assignment, closed-loop communication, and a designated team leader achieve higher compression fractions, fewer errors in medication administration, and better overall adherence to resuscitation guidelines. Poor communication and role ambiguity during arrests are identified as contributing factors in preventable resuscitation failures.\n\nIn a structured team resuscitation, key roles include the team leader who directs the response, gives orders clearly, monitors performance, and makes decisions about interventions; the compressor who delivers high-quality compressions and is relieved every two minutes to prevent fatigue; the airway manager who maintains the airway and delivers ventilations; the medication nurse or pharmacist who prepares and administers resuscitation drugs; the recorder who documents timing and interventions; and a defibrillator operator. In smaller teams, roles are combined, but the principle of explicit assignment remains.\n\nClosed-loop communication is a standard of team performance in resuscitation. When the team leader gives a directive — for example, "one milligram of epinephrine IV now" — the receiving team member should repeat the order back to confirm receipt, carry out the action, and verbally confirm completion. This sequence catches misheard orders before they result in an error. Team leaders should also conduct a brief pre-arrest huddle when arrest is anticipated, establish a debriefing culture, and conduct post-arrest reviews to improve future team performance.`,
        keyPoints: [
          'Clear role assignment during resuscitation is associated with higher compression fraction and fewer errors.',
          'Compressors should be rotated every two minutes to prevent fatigue-related quality decline.',
          'Closed-loop communication confirms orders are heard, executed, and completed.',
          'Post-arrest debriefs support learning and improve future resuscitation team performance.'
        ]
      }
    ],
    quiz: [
      {
        id: 'q1',
        prompt: 'According to current AHA BLS guidelines, what is the correct compression depth for adult cardiac arrest?',
        choices: [
          'At least 1.5 inches, not exceeding 2 inches',
          'At least 2 inches, not exceeding 2.4 inches',
          'At least 2.5 inches, not exceeding 3 inches',
          'Exactly 2 inches regardless of patient size'
        ],
        answerIndex: 1
      },
      {
        id: 'q2',
        prompt: 'An AED analyzes the rhythm of an unresponsive patient and advises no shock. What is the correct next action?',
        choices: [
          'Check for a pulse for up to 30 seconds before resuming compressions',
          'Reposition the AED pads and allow the device to re-analyze',
          'Resume CPR immediately and re-analyze the rhythm after two minutes',
          'Administer a precordial thump before beginning compressions'
        ],
        answerIndex: 2
      },
      {
        id: 'q3',
        prompt: 'A conscious infant is choking and unable to cry or breathe. Which technique is appropriate for managing this severe foreign-body airway obstruction?',
        choices: [
          'Abdominal thrusts delivered with two fingers below the navel',
          'Back blows alternating with chest thrusts',
          'Heimlich maneuver performed with the infant lying on a flat surface',
          'Blind finger sweep to locate and remove the obstruction'
        ],
        answerIndex: 1
      },
      {
        id: 'q4',
        prompt: 'What is the recommended compression-to-ventilation ratio when CPR is performed with an advanced airway in place?',
        choices: [
          '30 compressions to 2 breaths, pausing compressions for each ventilation',
          '15 compressions to 2 breaths for all patients regardless of age',
          'Continuous compressions at 100 to 120 per minute with one breath every 6 seconds',
          'Continuous compressions only, with no ventilations until spontaneous breathing resumes'
        ],
        answerIndex: 2
      },
      {
        id: 'q5',
        prompt: 'In a team resuscitation, closed-loop communication requires the receiving team member to do which of the following?',
        choices: [
          'Nod to acknowledge the order and carry it out without verbal confirmation',
          'Ask for written clarification before executing any verbal medication order',
          'Repeat the order back, execute it, and verbally confirm completion to the team leader',
          'Confirm the order only if it involves a high-alert medication'
        ],
        answerIndex: 2
      }
    ]
  }
]
