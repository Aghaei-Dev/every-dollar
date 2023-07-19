import {
  FolderIcon,
  FolderOpenIcon,
  CurrencyExchangeOutlinedIcon,
  RadioButtonCheckedOutlinedIcon,
  ShowChartOutlinedIcon,
  BarChartOutlinedIcon,
  PeopleOutlinedIcon,
  VideoLibraryOutlinedIcon,
  HeadsetMicOutlinedIcon,
  SupportOutlinedIcon,
  SettingsOutlinedIcon,
} from '../icons'

export const navigation = [
  {
    id: 1,
    title: 'budget',
    to: 'budget',
    icon: <FolderIcon />,
    disIcon: <FolderOpenIcon />,
  },
  {
    id: 2,
    title: 'paycheck Planning',
    to: 'paycheck-planning',
    icon: <CurrencyExchangeOutlinedIcon />,
  },
  {
    id: 3,
    title: 'goals',
    to: 'goals',
    icon: <RadioButtonCheckedOutlinedIcon />,
  },
  { id: 4, title: 'roadmap', to: 'roadmap', icon: <ShowChartOutlinedIcon /> },
  { id: 5, title: 'insights', to: 'insights', icon: <BarChartOutlinedIcon /> },
  {
    id: 6,
    title: 'ramesy pros',
    to: 'ramesy-pros',
    icon: <PeopleOutlinedIcon />,
  },
  { id: 7, title: 'learn', to: 'learn', icon: <VideoLibraryOutlinedIcon /> },
  {
    id: 8,
    title: 'ask a coach',
    to: 'ask-a-coach',
    icon: <HeadsetMicOutlinedIcon />,
  },
  {
    id: 9,
    title: 'help center',
    to: 'help',
    icon: <SupportOutlinedIcon />,
  },
  {
    id: 10,
    title: 'setting',
    to: 'setting',
    icon: <SettingsOutlinedIcon />,
  },
]

export const monthsName = [
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
]

export const init = [
  {
    id: 1,
    title: 'income',
    month: true,
    array: [
      { title: 'paycheck 1', value: 0 },
      { title: 'paycheck 2', value: 0 },
    ],
  },
  {
    id: 2,
    title: 'giving',
    array: [
      { title: 'church', value: 0 },
      { title: 'charity', value: 0 },
    ],
  },
  {
    id: 3,
    title: 'saving',
    array: [{ title: 'Emergency Fund', value: 0 }],
  },
  {
    id: 4,
    title: 'Bills & Subscriptions',
    array: [
      { title: 'Mortgage/Rent', value: 0 },
      { title: 'water', value: 0 },
      { title: 'natural gas', value: 0 },
      { title: 'Electricity', value: 0 },
      { title: 'internet', value: 0 },
      { title: 'Streaming Services', value: 0 },
      { title: 'Trash', value: 0 },
      { title: 'Phone', value: 0 },
      { title: 'Health Insurance', value: 0 },
      { title: 'Life Insurance', value: 0 },
      { title: 'Auto Insurance', value: 0 },
      { title: 'Identity Theft', value: 0 },
      { title: 'Gym', value: 0 },
    ],
  },
  {
    id: 5,
    title: 'Spending',
    array: [
      { title: 'Groceries', value: 0 },
      { title: 'Restaurants', value: 0 },
      { title: 'gas', value: 0 },
      { title: 'Clothing', value: 0 },
      { title: 'Hair & Skin Care', value: 0 },
      { title: 'Fun & Entertainment', value: 0 },
      { title: 'Pet Care', value: 0 },
      { title: 'Child Care', value: 0 },
      { title: 'Repairs & Maintenance', value: 0 },
      { title: 'Miscellaneous', value: 0 },
    ],
  },
  {
    id: 6,
    title: 'debt',
    array: [
      { title: 'bank', value: 0 },
      { title: 'father', value: 0 },
      { title: 'friend', value: 0 },
    ],
  },
]

// ====== tabs ======

export const summaryValues_tabs = [
  { id: 1, label: 'income' },
  { id: 2, label: 'spent' },
  { id: 3, label: 'remaining' },
]
export const transactionsValues_tabs = [
  { id: 1, label: 'new' },
  { id: 2, label: 'tracked' },
  { id: 3, label: 'deleted' },
]

export const colors = [
  '#00b2f6',
  '#e64b40',
  '#faab19',
  '#48ce65',
  '#b34fa0',
  '#16a597',
  '#f26552',
  '#e3b409',
  '#35bd59',
  '#634fb3',
]
