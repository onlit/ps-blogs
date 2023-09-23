import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const sections = [
  {
    href: '#section1',
    text: 'What Is Breath of Fire?',
  },
  {
    href: '#section2',
    text: '3 Benefits of Practicing the Breath of Fire Technique',
  },
  {
    href: '#section3',
    text: 'How to Do Yoga Safely and Avoid Injury',
  },
];

export default function Home() {
  return (
    <main className={`max-w-[1264px] mx-auto ${inter.className}`}>
      <div className='grid grid-cols-12 gap-4 py-[64px] px-[32px]'>
        <div className='col-span-9 ml-[101px]'>
          <section className='p-[8px]'>
            <h1 className='text-5xl	leading-[60px] font-semibold	my-[8px]'>
              How to Practice the Breath of Fire Technique in Yoga{' '}
            </h1>
            <p className='opacity-60 text-base'>Last updated: Sep 23, 2023</p>
          </section>

          <section className='p-[8px]'>
            <p className='mb-[24px] text-[20px] leading-[32px]'>
              Breath of fire is a stimulating yogic breathing technique that can
              help energize yogis of all levels.
            </p>
            <div className='h-[338px] overflow-hidden'>
              <img
                src='/yoga.jpeg'
                alt=''
                className='w-full h-full object-cover'
              />
            </div>
          </section>

          <section className='p-[8px]'>
            <nav>
              <h2 className='text-[24px] font-semibold leading-[30px]'>
                Jump To Section
              </h2>
              <ul className='mt-[12px]'>
                {sections.map(({ href, text }) => (
                  <li className='mt-[12px]' key={text}>
                    <a
                      href={href}
                      className='underline cursor-pointer text-base text-black'
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <hr className='h-px bg-[#d4d5d9] my-[64px]' />
            <div className='pb-[24px]' id='section1'>
              <h2 className='text-[32px] font-semibold'>
                What Is Breath of Fire?
              </h2>
              <div className='mt-[16px]'>
                <p className='text-[20px] mb-[24px]'>
                  Breath of fire (Agni Pran in Sanskrit) is a unique breathing
                  exercise in Kundalini yoga that involves forcing air quickly
                  out of the lungs using the diaphragm—the dominant respiratory
                  muscle near the lower ribs and intercostal muscle. While yogic
                  breathwork exercises typically focus on lengthy deep breathing
                  to promote relaxation, the breath of fire technique aims to
                  energize and excite. Breath of fire is attributed to the work
                  of Yogi Bhajan, who brought the Kundalini yoga practice to
                  North America in the 1960s.
                </p>
                <p className='text-[20px] mb-[24px]'>
                  Breath of fire is closely related to—and sometimes used
                  interchangeably with—Kapalbhati or Kapalabhati Pranayama (or
                  skull shining breath), another energizing yoga breathing
                  technique that uses passive inhales and forceful exhales.
                </p>
              </div>
            </div>
            <div className='pb-[24px]' id='section2'>
              <h2 className='text-[32px] font-semibold'>
                3 Benefits of Practicing the Breath of Fire Technique
              </h2>
              <div className='mt-[16px]'>
                <p className='text-[20px] mb-[24px]'>
                  When done properly, the breath of fire technique can:
                </p>
                <ol className='m-[16px]'>
                  <li className='text-[20px] my-[16px]'>
                    <span className='ml-[8px]'>1.</span>{' '}
                    <strong className='font-semibold'>Helps to energize</strong>
                    . The breath of fire technique stimulates your nervous
                    system by increasing your body temperature, heart rate, and
                    blood flow, which can leave you feeling energized and more
                    prepared to start your day or tackle a difficult task.
                  </li>
                  <li className='text-[20px] my-[16px]'>
                    <span className='ml-[8px]'>2.</span>{' '}
                    <strong className='font-semibold'>
                      Helps clear the nasal passage
                    </strong>
                    . Since the breath of fire technique rapidly sends air
                    through your airways on each exhalation, it may help clear
                    your nasal passage of mucus buildup or other blockages,
                    allowing you to breathe freer after the exercise.
                  </li>
                  <li className='text-[20px] my-[16px]'>
                    <span className='ml-[8px]'>3.</span>{' '}
                    <strong className='font-semibold'>
                      Works core muscles
                    </strong>
                    . Breath of fire is a diaphragm-centered movement, so proper
                    inhaling and exhaling can work your abdominal muscles and
                    help build core strength and physical endurance during your
                    yoga practice.
                  </li>
                </ol>
              </div>
            </div>
            <div className='pb-[24px]' id='section3'>
              <h2 className='text-[32px] font-semibold'>
                How to Do Yoga Safely and Avoid Injury
              </h2>
              <div className='mt-[16px]'>
                <p className='text-[20px] mb-[24px]'>
                  Proper form and technique are essential to ensure the safety
                  and effectiveness of a yoga practice. If you have a previous
                  or pre-existing health condition, consult your physician
                  before practicing yoga. Yoga poses may be modified based on
                  your individual needs.
                </p>
              </div>
            </div>

            <div className='bg-[#f3f3f3] p-[24px]'>
              <div>
                <h2 className='text-[24px] leading-[30px] font-semibold'>
                  Try some of our classes
                </h2>
                <p className='my-[16px] opacity-60'>
                  Enter your email and we’ll send you some samples of our
                  favorite classes.
                </p>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      placeholder='Enter email address'
                      className='block w-[390px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <button className='rounded-md mt-[16px] bg-indigo-600 px-[24px] py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Submit
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className='col-span-3 text-white'>0</div>
      </div>
    </main>
  );
}
