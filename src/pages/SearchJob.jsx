import CarouselCards from "../components/CarouselCards";
import CardContainer from "../components/IndustoryCards";
import IndustoryCard from "../components/IndustoryCards";
import JobCategories from "../components/JobCategories";
import Searchbar from "../components/Searchbar";

const cardData = [
  {
    image: 'https://media.istockphoto.com/id/1480239160/photo/an-analyst-uses-a-computer-and-dashboard-for-data-business-analysis-and-data-management.jpg?s=612x612&w=0&k=20&c=Zng3q0-BD8rEl0r6ZYZY0fbt2AWO9q_gC8lSrwCIgdk=',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'All Accountancy & Accounting',
      ps: 'ټول حسابداري او محاسبې',
      fa: 'همه حسابداری و حسابرسی',
    },
    jobTitles: {
      en: ['Accountant', 'Financial Analyst', 'Auditor'],
      ps: ['حسابدار', 'مالي تحلیلګر', 'مفتش'],
      fa: ['حسابدار', 'تحلیلگر مالی', 'بازرس'],
    },
    location: {
      en: 'New York, NY',
      ps: 'نیویارک، نیو یارک',
      fa: 'نیویورک، نیویورک',
    },
  },
  {
    image: 'https://media.istockphoto.com/id/1407200725/photo/close-up-of-businessman-using-a-laptop-with-graphs-and-charts-on-a-laptop-computer.jpg?s=612x612&w=0&k=20&c=rZLDjt03_qO7-wFEm_csy-FEChbipQvo5-a8md-uc4U=',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'Job Titles',
      ps: 'دندې سرلیکونه',
      fa: 'عنوان‌های شغلی',
    },
    jobTitles: {
      en: ['Tax Accountant', 'Management Accountant', 'Bookkeeper'],
      ps: ['د مالیاتو حسابدار', 'د مدیریت حسابدار', 'کتابدار'],
      fa: ['حسابدار مالیاتی', 'حسابدار مدیریتی', 'حسابدار'],
    },
    location: {
      en: 'Los Angeles, CA',
      ps: 'لاس انجلس، کالیفورنیا',
      fa: 'لس آنجلس، کالیفورنیا',
    },
  },
  {
    image: 'https://picsum.photos/id/3/400/300',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'By location',
      ps: 'د موقعیت له مخې',
      fa: 'بر اساس مکان',
    },
    jobTitles: {
      en: ['Accounting Manager', 'Cost Accountant', 'Forensic Accountant'],
      ps: ['د حسابدارۍ مدیر', 'د لګښت حسابدار', 'عدلي حسابدار'],
      fa: ['مدیر حسابداری', 'حسابدار هزینه', 'حسابدار قانونی'],
    },
    location: {
      en: 'Chicago, IL',
      ps: 'شیکاګو، ایل',
      fa: 'شیکاگو، ایلینوی',
    },
  },
  {
    image: 'https://picsum.photos/id/4/400/300',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'All Accountancy & Accounting',
      ps: 'ټول حسابداري او محاسبې',
      fa: 'همه حسابداری و حسابرسی',
    },
    jobTitles: {
      en: ['Financial Controller', 'Budget Analyst', 'Payroll Specialist'],
      ps: ['مالي کنټرولر', 'د بودجې تحلیلګر', 'د معاش متخصص'],
      fa: ['کنترلر مالی', 'تحلیلگر بودجه', 'متخصص حقوق و دستمزد'],
    },
    location: {
      en: 'Houston, TX',
      ps: 'هیوستن، ټکساس',
      fa: 'هوستون، تگزاس',
    },
  },
  {
    image: 'https://media.istockphoto.com/id/1182777182/photo/business-document-report-on-paper-and-tablet-with-sales-data-and-financial-business-growth.jpg?s=612x612&w=0&k=20&c=NundxRINazTarTCBDSbdoqORygFvbbAzIOc7-ubHIM8=',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'Job Titles',
      ps: 'دندې سرلیکونه',
      fa: 'عنوان‌های شغلی',
    },
    jobTitles: {
      en: ['Accounts Receivable Clerk', 'Accounts Payable Clerk', 'Credit Analyst'],
      ps: ['د حسابونو ترلاسه کولو کارکوونکی', 'د حسابونو تادیه کولو کارکوونکی', 'د اعتبار تحلیلګر'],
      fa: ['کارمند دریافت حساب', 'کارمند پرداخت حساب', 'تحلیلگر اعتبار'],
    },
    location: {
      en: 'Phoenix, AZ',
      ps: 'فینکس، ای AZ',
      fa: 'فینیکس، آریزونا',
    },
  },
  {
    image: 'https://picsum.photos/id/6/400/300',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'By location',
      ps: 'د موقعیت له مخې',
      fa: 'بر اساس مکان',
    },
    jobTitles: {
      en: ['Internal Auditor', 'Financial Reporting Analyst', 'Treasury Analyst'],
      ps: ['د داخلي څیړنې کوونکی', 'مالي راپور ورکولو تحلیلګر', 'د خزانه تحلیلګر'],
      fa: ['بازرس داخلی', 'تحلیلگر گزارش مالی', 'تحلیلگر خزانه'],
    },
    location: {
      en: 'Philadelphia, PA',
      ps: 'فیلادلفیا، PA',
      fa: 'فیلادلفیا، پنسیلوانیا',
    },
  },
  {
    image: 'https://media.istockphoto.com/id/1455701949/photo/business-people-meeting-to-discuss-and-brainstorming-the-financial-report-paperwork-in-home.jpg?s=612x612&w=0&k=20&c=4aTNu6I6dwwX5jw2nmNxhbmUxBXJwZsLGYxpV4N4OXI=',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'All Accountancy & Accounting',
      ps: 'ټول حسابداري او محاسبې',
      fa: 'همه حسابداری و حسابرسی',
    },
    jobTitles: {
      en: ['Budget Manager', 'Accounting Supervisor', 'Tax Preparer'],
      ps: ['د بودجې مدیر', 'د حسابدارۍ ناظر', 'د مالیاتو چمتو کوونکی'],
      fa: ['مدیر بودجه', 'سرپرست حسابداری', 'تهیه کننده مالیات'],
    },
    location: {
      en: 'San Antonio, TX',
      ps: 'سان انتونیو، ټکساس',
      fa: 'سان آنتونیو، تگزاس',
    },
  },
  {
    image: 'https://picsum.photos/id/8/400/300',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'Job Titles',
      ps: 'دندې سرلیکونه',
      fa: 'عنوان‌های شغلی',
    },
    jobTitles: {
      en: ['Financial Reporting Manager', 'Cost Estimator', 'Accounts Receivable Manager'],
      ps: ['د مالي راپور ورکولو مدیر', 'د لګښت اټکل کوونکی', 'د حسابونو ترلاسه کولو مدیر'],
      fa: ['مدیر گزارش مالی', 'برآورد کننده هزینه', 'مدیر دریافت حساب'],
    },
    location: {
      en: 'San Diego, CA',
      ps: 'سان دیګو، کالیفورنیا',
      fa: 'سن دیگو، کالیفورنیا',
    },
  },
  {
    image: 'https://media.istockphoto.com/id/1057509614/photo/business-people-working-on-marketing-plan-double-exposure.jpg?s=612x612&w=0&k=20&c=Th-ow00RbnGu71hFoJLWivVR5qhRyXa4Mn6kWbTXRco=',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'By location',
      ps: 'د موقعیت له مخې',
      fa: 'بر اساس مکان',
    },
    jobTitles: {
      en: ['Payroll Manager', 'Accounts Payable Supervisor', 'Financial Analyst'],
      ps: ['د معاشونو مدیر', 'د حسابونو تادیه کولو ناظر', 'مالي تحلیلګر'],
      fa: ['مدیر حقوق و دستمزد', 'سرپرست پرداخت حساب', 'تحلیلگر مالی'],
    },
    location: {
      en: 'Dallas, TX',
      ps: 'ډالاس، ټکساس',
      fa: 'دالاس، تگزاس',
    },
  },
  {
    image: 'https://picsum.photos/id/10/400/300',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'All Accountancy & Accounting',
      ps: 'ټول حسابداري او محاسبې',
      fa: 'همه حسابداری و حسابرسی',
    },
    jobTitles: {
      en: ['Accounting Clerk', 'Budget Analyst', 'Tax Accountant'],
      ps: ['د حسابدارۍ کارکوونکی', 'د بودجې تحلیلګر', 'د مالیاتو حسابدار'],
      fa: ['کارمند حسابداری', 'تحلیلگر بودجه', 'حسابدار مالیاتی'],
    },
    location: {
      en: 'San Jose, CA',
      ps: 'سان خوزه، کالیفورنیا',
      fa: 'سن خوزه، کالیفورنیا',
    },
  },
  {
    image: 'https://media.istockphoto.com/id/1431694821/photo/investors-working-on-desk-office-and-check-data-cost-balance-profit-and-currency-on-monitor.jpg?s=612x612&w=0&k=20&c=JDWZLzE3plhA8wKQcRAWnnZTU7Xk6wqqYFicSyII0hc=',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'Job Titles',
      ps: 'دندې سرلیکونه',
      fa: 'عنوان‌های شغلی',
    },
    jobTitles: {
      en: ['Accounts Receivable Specialist', 'Cost Accountant', 'Financial Reporting Analyst'],
      ps: ['د حسابونو ترلاسه کولو متخصص', 'د لګښت حسابدار', 'د مالي راپور ورکولو تحلیلګر'],
      fa: ['متخصص دریافت حساب', 'حسابدار هزینه', 'تحلیلگر گزارش مالی'],
    },
    location: {
      en: 'Austin, TX',
      ps: 'اوسټین، ټکساس',
      fa: 'آستین، تگزاس',
    },
  },
  {
    image: 'https://picsum.photos/id/12/400/300',
    title: {
      en: 'Accountancy & Accounting Jobs',
      ps: 'د حسابداري او محاسبې دندې',
      fa: 'مشاغل حسابداری و حسابرسی',
    },
    subTitle: {
      en: 'By location',
      ps: 'د موقعیت له مخې',
      fa: 'بر اساس مکان',
    },
    jobTitles: {
      en: ['Payroll Clerk', 'Accounts Payable Clerk', 'Financial Analyst'],
      ps: ['د معاشونو کارکوونکی', 'د حسابونو تادیه کولو کارکوونکی', 'مالي تحلیلګر'],
      fa: ['کارمند حقوق و دستمزد', 'کارمند پرداخت حساب', 'تحلیلگر مالی'],
    },
    location: {
      en: 'Fort Worth, TX',
      ps: 'فورټ ورث، ټکساس',
      fa: 'فورت وورث، تگزاس',
    },
  },
];

export default function SearchJob() {
    return (
        <div>
         <p  className="text-gray-200 py-1 text-sm bg-[#002244] text-center font-medium" >Search 156,089 jobs from 10,070 companies</p>
         <Searchbar />
         <CarouselCards />
         <CardContainer cardData={cardData}  />
         <JobCategories />
        </div>
    )
}