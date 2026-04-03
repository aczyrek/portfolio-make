export const stats = [
  { value: 4, suffix: '+', label: 'Live Automations' },
  { value: 20, prefix: '~', suffix: 'h', label: 'Weekly Time Saved' },
  { value: 3, label: 'AI Integrations' },
]

export const expertise = [
  {
    number: '01',
    title: 'Business Process Automation',
    description:
      'Complex no-code/low-code scenarios on Make.com connecting dozens of modules, APIs, and webhooks into seamless, reliable pipelines.',
    tags: ['Make.com', 'Webhooks', 'REST APIs'],
  },
  {
    number: '02',
    title: 'AI Integration',
    description:
      'Embedding Gemini and OpenAI models for intelligent content analysis, multi-class categorization, and structured data generation at scale.',
    tags: ['Gemini AI', 'OpenAI', 'Prompt Engineering'],
  },
  {
    number: '03',
    title: 'Data Orchestration',
    description:
      'Designing Airtable schemas, validating JSON payloads, and synchronizing structured data across third-party services in real time.',
    tags: ['Airtable', 'JSON', 'Google Sheets'],
  },
]

export const projects = [
  {
    id: 1,
    number: '01',
    category: 'Task Automation & AI',
    title: 'Centralized AI Task Management System',
    description:
      'Advanced pipeline capturing unstructured notes from Google Tasks, leveraging Gemini 2.5 Flash for context understanding, priority assignment, and category classification.',
    tags: ['Make.com', 'Gemini AI', 'Airtable', 'Google Tasks', 'Slack'],
    image: '/images/automation_thumbnail.png',
    challenge: 'Scattered tasks with no consistent prioritization — forcing daily manual "triage".',
    solution:
      'Make.com pipeline with embedded AI creates structured tasks in Todoist, logs every operation to Airtable, and reports results to Slack.',
    result: '~10h saved weekly on task management with zero backlog errors.',
    blueprint: '/blueprints/project-1.json',
    filename: 'Make_Blueprint_TasksAI.json',
    schema: [
      { icon: '📝', name: 'Google Tasks', desc: 'Watch Tasks' },
      { icon: '🧠', name: 'Gemini AI', desc: 'Analyze & Classify' },
      { icon: '📊', name: 'Airtable', desc: 'Log Operation' },
      { icon: '✅', name: 'Todoist', desc: 'Create Task' },
      { icon: '💬', name: 'Slack', desc: 'Send Report' },
    ],
  },
  {
    id: 2,
    number: '02',
    category: 'Performance Marketing',
    title: 'Automated Meta Ads Results Extractor',
    description:
      'System fetching campaign profitability metrics (Spend, ROAS, Conversions) from Facebook Insights and building historical reports in Google Sheets with a built-in API error recovery mechanism.',
    tags: ['Make.com', 'Meta Ads API', 'Facebook Insights', 'Google Sheets'],
    image: '/images/analytics_thumbnail_2.png',
    challenge: 'Tedious manual logging of daily Ad results from Ads Manager into spreadsheets.',
    solution:
      'Automated API flow processing Action arrays and formatting them into business columns. Built-in Error Handler module (Break).',
    result: 'Real-time analytical data for budget decisions with zero manual input.',
    blueprint: '/blueprints/project-2.json',
    filename: 'Make_Blueprint_MetaAds_Sheets.json',
    schema: [
      { icon: '🎯', name: 'Meta Ads', desc: 'List Campaigns' },
      { icon: '📈', name: 'FB Insights', desc: 'Get ROAS Data' },
      { icon: '📊', name: 'Google Sheets', desc: 'Add Report Row' },
      { icon: '🔄', name: 'Error Handler', desc: 'Auto-Retry (3×)' },
    ],
  },
  {
    id: 3,
    number: '03',
    category: 'IT Service Management',
    title: 'Automated Jira Status Report in Slack',
    description:
      'Operational tool fetching all active tickets via advanced JQL queries, aggregating results by status, and posting a clear summary directly to a Slack channel.',
    tags: ['Make.com', 'Jira Software', 'Slack', 'JQL'],
    image: '/images/jira_slack_thumbnail.png',
    challenge: 'Tasks scattered across multiple boards causing prioritization and WIP tracking gaps.',
    solution:
      'JQL-based flow with multi-board aggregators for status counting and a Text Parser formatting Slack notifications.',
    result: 'Full team awareness of task load without navigating Jira boards.',
    blueprint: '/blueprints/project-3.json',
    filename: 'Make_Blueprint_Jira_Slack.json',
    schema: [
      { icon: '🎫', name: 'Jira Software', desc: 'Search JQL Issues' },
      { icon: '📦', name: 'Aggregator', desc: 'Group by Status' },
      { icon: '📝', name: 'Text Parser', desc: 'Format Report' },
      { icon: '💬', name: 'Slack', desc: 'Send Message' },
    ],
  },
  {
    id: 4,
    number: '04',
    category: 'POS Integration & AI',
    title: 'ID POS → Sheets Sales Reporter',
    description:
      'Daily sales pipeline for Legia Sports Bar fetching POS transactions, using an AI model to classify each into Kitchen or Bar revenue, and logging structured records to Google Sheets.',
    tags: ['Make.com', 'ID POS API', 'OpenRouter AI', 'Google Sheets'],
    image: '/images/analytics_thumbnail_2.png',
    challenge: 'Manual separation of food and beverage revenue from raw POS transaction data.',
    solution:
      'Make.com authenticates with ID POS, iterates 1000+ transactions per run, sends each to an AI classifier via OpenRouter, parses the JSON response, and appends rows to Sheets.',
    result: 'Zero-touch daily financial reports with automatic Kitchen / Bar revenue split.',
    blueprint: '/blueprints/project-4.json',
    filename: 'Make_Blueprint_IDPOS_Legia.json',
    schema: [
      { icon: '🏪', name: 'ID POS API', desc: 'Auth & Fetch Tx' },
      { icon: '🔁', name: 'Basic Feeder', desc: 'Iterate Records' },
      { icon: '🧾', name: 'ID POS API', desc: 'Get Tx Detail' },
      { icon: '🧠', name: 'OpenRouter AI', desc: 'Classify Revenue' },
      { icon: '⚙️', name: 'JSON Parser', desc: 'Parse Response' },
      { icon: '📊', name: 'Google Sheets', desc: 'Append Row' },
    ],
  },
]
