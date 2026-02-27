import { ApplyForm } from '../../components/apply-form/ApplyForm'

const questions = [
  {
    id: 'task_type',
    question: 'What bookkeeping work do you need help with?',
    options: [
      'Accounts payable & receivable',
      'Invoice creation & tracking',
      'Bank reconciliation & expense tracking',
      'Payroll & tax preparation',
      'All of the above',
    ],
  },
  {
    id: 'hours_per_week',
    question: 'How many hours per week do you need help?',
    options: [
      'Less than 5 hours',
      '5–10 hours',
      '10–20 hours',
      '20+ hours',
    ],
  },
  {
    id: 'start_timeline',
    question: 'How soon are you looking to get started?',
    options: [
      'Right away',
      'Within a week',
      'Within a month',
      'Just exploring',
    ],
  },
  {
    id: 'role',
    question: 'What best describes your role?',
    options: [
      'Business owner / Founder',
      'Executive / Manager',
      'Solopreneur / Freelancer',
      'Other',
    ],
  },
]

export default function ApplyBookkeeperPage() {
  return <ApplyForm questions={questions} serviceType="Bookkeeping" />
}
