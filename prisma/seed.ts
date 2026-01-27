import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  // Delete existing data
  await prisma.contactSubmission.deleteMany()
  await prisma.organization.deleteMany()
  await prisma.category.deleteMany()

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Anna Danam',
        slug: 'anna-danam',
        title: 'Anna Danam – Feeding the Hungry',
        description: 'Providing free, nutritious food to devotees, the needy, and the underserved. Anna Danam is considered the highest form of charity, as hunger knows no religion or boundary.',
        icon: 'UtensilsCrossed',
        color: 'bg-gradient-to-br from-saffron to-gold',
        order: 1,
      }
    }),
    prisma.category.create({
      data: {
        name: 'Vidya Danam',
        slug: 'vidya-danam',
        title: 'Vidya Danam – Education for All',
        description: 'Supporting education through scholarships, schools, gurukuls, and learning initiatives. Vidya Danam empowers individuals and uplifts generations.',
        icon: 'GraduationCap',
        color: 'bg-gradient-to-br from-gold to-sandalwood',
        order: 2,
      }
    }),
    prisma.category.create({
      data: {
        name: 'Go Danam',
        slug: 'go-danam',
        title: 'Go Danam – Protection & Care of Cows',
        description: 'Supporting goshalas and cow protection initiatives that preserve traditional Dharma values and sustainable living.',
        icon: 'Cow',
        color: 'bg-gradient-to-br from-sandalwood to-deep-brown',
        order: 3,
      }
    }),
    prisma.category.create({
      data: {
        name: 'Vastra Danam',
        slug: 'vastra-danam',
        title: 'Vastra Danam – Clothing the Needy',
        description: 'Providing clothes to those in need, especially during festivals, winters, and emergencies. Vastra Danam restores dignity along with warmth.',
        icon: 'Shirt',
        color: 'bg-gradient-to-br from-saffron to-sandalwood',
        order: 4,
      }
    }),
    prisma.category.create({
      data: {
        name: 'Arogya Danam',
        slug: 'arogya-danam',
        title: 'Arogya Danam – Healthcare & Well-Being',
        description: 'Supporting medical camps, treatments, hospitals, and healthcare initiatives for the underprivileged.',
        icon: 'HeartPulse',
        color: 'bg-gradient-to-br from-gold to-saffron',
        order: 5,
      }
    }),
    prisma.category.create({
      data: {
        name: 'Jala Danam',
        slug: 'jala-danam',
        title: 'Jala Danam – Water & Sustainability',
        description: 'Providing access to clean drinking water through wells, tanks, rainwater harvesting, and water conservation projects.',
        icon: 'Droplets',
        color: 'bg-gradient-to-br from-sandalwood to-gold',
        order: 6,
      }
    }),
    prisma.category.create({
      data: {
        name: 'Ashraya Danam',
        slug: 'ashraya-danam',
        title: 'Ashraya Danam – Shelter & Care',
        description: 'Supporting orphanages, old-age homes, shelters, and rehabilitation centers for those without a home or family support.',
        icon: 'Home',
        color: 'bg-gradient-to-br from-saffron to-deep-brown',
        order: 7,
      }
    }),
  ])

  console.log('Created categories:', categories.length)

  // Create sample organizations for each category
  const annaCategory = categories.find(c => c.slug === 'anna-danam')!
  const vidyaCategory = categories.find(c => c.slug === 'vidya-danam')!
  const goCategory = categories.find(c => c.slug === 'go-danam')!
  const vastraCategory = categories.find(c => c.slug === 'vastra-danam')!
  const arogyaCategory = categories.find(c => c.slug === 'arogya-danam')!
  const jalaCategory = categories.find(c => c.slug === 'jala-danam')!
  const ashrayaCategory = categories.find(c => c.slug === 'ashraya-danam')!

  // Anna Danam Organizations
  await prisma.organization.createMany({
    data: [
      {
        categoryId: annaCategory.id,
        name: 'Annadhanam Trust',
        slug: 'annadhanam-trust',
        shortDesc: 'Serving free meals to thousands of devotees and the needy across 10 temples daily.',
        description: 'Annadhanam Trust is dedicated to the noble cause of serving free nutritious meals to devotees, pilgrims, and the underprivileged. With operations across 10 major temples in South India, we serve over 50,000 meals daily, ensuring no one goes hungry.',
        history: 'Founded in 2010, Annadhanam Trust began with a small kitchen serving 100 meals a day. Today, through the generous support of donors, we have expanded our operations significantly.',
        values: 'Our values are rooted in the principle that Anna (food) is Brahma. We believe that serving food is the highest form of worship.',
        impactHighlights: JSON.stringify({
          mealsServed: '50,000+ meals daily',
          peopleBenefited: '15,000+ people daily',
          yearsOfService: '14 years'
        }),
        donationLink: 'https://example.com/annadhanam-donate',
        website: 'https://example.com',
        verified: true,
      },
      {
        categoryId: annaCategory.id,
        name: 'Sri Krishna Prasadam Seva',
        slug: 'sri-krishna-prasadam-seva',
        shortDesc: 'Providing prasadam distribution at Krishna temples across 5 states.',
        description: 'Sri Krishna Prasadam Seva is committed to serving sacred prasadam to all devotees visiting Krishna temples. Our mission is to ensure that every devotee leaves the temple with a full stomach and a happy heart.',
        history: 'Started in 2015 by a group of devoted Krishna bhaktas, we now operate in 5 states with over 20 dedicated volunteers.',
        values: 'Service to Krishna through service to His devotees is our core philosophy.',
        impactHighlights: JSON.stringify({
          mealsServed: '25,000+ prasadam daily',
          peopleBenefited: '8,000+ devotees daily',
          yearsOfService: '9 years'
        }),
        bankDetails: JSON.stringify({
          accountName: 'Sri Krishna Prasadam Seva',
          bankName: 'State Bank of India',
          accountNumber: '1234567890123456',
          ifscCode: 'SBIN0001234',
          branch: 'Mumbai Main Branch'
        }),
        verified: true,
      }
    ]
  })

  // Vidya Danam Organizations
  await prisma.organization.createMany({
    data: [
      {
        categoryId: vidyaCategory.id,
        name: 'Gurukulam Vidya Trust',
        slug: 'gurukulam-vidya-trust',
        shortDesc: 'Providing free education and accommodation to underprivileged children in traditional Gurukul system.',
        description: 'Gurukulam Vidya Trust runs traditional gurukuls where children from underprivileged backgrounds receive free education, accommodation, and moral values. We combine modern education with ancient wisdom.',
        history: 'Established in 2008, our first gurukul had 20 students. Today, we have 5 gurukuls with over 500 students.',
        values: 'We believe in the holistic development of children through the ancient Gurukul system of education.',
        impactHighlights: JSON.stringify({
          studentsSupported: '500+ students',
          gurukulsOperated: '5 gurukuls',
          yearsOfService: '16 years'
        }),
        donationLink: 'https://example.com/gurukulam-donate',
        website: 'https://example.com',
        verified: true,
      }
    ]
  })

  // Go Danam Organizations
  await prisma.organization.createMany({
    data: [
      {
        categoryId: goCategory.id,
        name: 'Gau Seva Sansthan',
        slug: 'gau-seva-sansthan',
        shortDesc: 'Operating goshalas across 8 locations, providing shelter and care to 2,000+ cows.',
        description: 'Gau Seva Sansthan is dedicated to the protection and care of cows (Go Mata). We operate goshalas across 8 locations, providing shelter, food, and medical care to abandoned and sick cows.',
        history: 'Founded in 2012, our first goshala had 50 cows. Today, we care for over 2,000 cows across all our centers.',
        values: 'Service to Go Mata is our dharma. We treat every cow with love, respect, and dignity.',
        impactHighlights: JSON.stringify({
          cowsProtected: '2,000+ cows',
          goshalasOperated: '8 goshalas',
          yearsOfService: '12 years'
        }),
        donationLink: 'https://example.com/gauseva-donate',
        website: 'https://example.com',
        verified: true,
      }
    ]
  })

  // Vastra Danam Organizations
  await prisma.organization.createMany({
    data: [
      {
        categoryId: vastraCategory.id,
        name: 'Vastra Danam Foundation',
        slug: 'vastra-danam-foundation',
        shortDesc: 'Distributing clothes to 10,000+ people annually across rural areas.',
        description: 'Vastra Danam Foundation collects and distributes new and gently used clothes to people in rural areas, especially during festivals and winter seasons. Our mission is to ensure no one suffers from lack of clothing.',
        history: 'Started in 2013 as a small initiative, we now serve communities across 50 villages.',
        values: 'We believe that clothing is a basic human right and a form of dignity.',
        impactHighlights: JSON.stringify({
          peopleSupported: '10,000+ annually',
          villagesServed: '50+ villages',
          yearsOfService: '11 years'
        }),
        bankDetails: JSON.stringify({
          accountName: 'Vastra Danam Foundation',
          bankName: 'Bank of Baroda',
          accountNumber: '2345678901234567',
          ifscCode: 'BARB0VASFON',
          branch: 'Delhi Main Branch'
        }),
        verified: true,
      }
    ]
  })

  // Arogya Danam Organizations
  await prisma.organization.createMany({
    data: [
      {
        categoryId: arogyaCategory.id,
        name: 'Arogya Seva Trust',
        slug: 'arogya-seva-trust',
        shortDesc: 'Conducting free medical camps and providing healthcare to 100,000+ patients annually.',
        description: 'Arogya Seva Trust conducts free medical camps across rural and semi-urban areas, providing healthcare services to those who cannot afford it. We also run a small hospital with free treatments.',
        history: 'Established in 2011 by a group of doctors, we have conducted over 500 medical camps.',
        values: 'Health is wealth. We believe in providing quality healthcare to every section of society.',
        impactHighlights: JSON.stringify({
          patientsTreated: '100,000+ annually',
          medicalCamps: '500+ camps',
          yearsOfService: '13 years'
        }),
        donationLink: 'https://example.com/arogya-donate',
        website: 'https://example.com',
        verified: true,
      }
    ]
  })

  // Jala Danam Organizations
  await prisma.organization.createMany({
    data: [
      {
        categoryId: jalaCategory.id,
        name: 'Jala Seva Mission',
        slug: 'jala-seva-mission',
        shortDesc: 'Building wells and rainwater harvesting systems in water-scarce villages.',
        description: 'Jala Seva Mission works towards providing clean drinking water to water-scarce villages by building wells, installing water tanks, and implementing rainwater harvesting systems.',
        history: 'Founded in 2014, we have completed 200 water projects across drought-prone areas.',
        values: 'Water is life. Every person deserves access to clean drinking water.',
        impactHighlights: JSON.stringify({
          waterProjects: '200+ projects',
          villagesBenefited: '150+ villages',
          yearsOfService: '10 years'
        }),
        donationLink: 'https://example.com/jala-donate',
        website: 'https://example.com',
        verified: true,
      }
    ]
  })

  // Ashraya Danam Organizations
  await prisma.organization.createMany({
    data: [
      {
        categoryId: ashrayaCategory.id,
        name: 'Ashraya Home for Elders',
        slug: 'ashraya-home-for-elders',
        shortDesc: 'Providing shelter, care, and love to 200+ abandoned elders.',
        description: 'Ashraya Home for Elders provides a loving home to abandoned and destitute elders. We offer food, shelter, medical care, and most importantly, love and respect to our elderly residents.',
        history: 'Started in 2015 with 10 elders, we now house over 200 elders across 3 centers.',
        values: 'Serving elders is serving God. We treat every resident as a member of our family.',
        impactHighlights: JSON.stringify({
          eldersSupported: '200+ elders',
          homesOperated: '3 homes',
          yearsOfService: '9 years'
        }),
        donationLink: 'https://example.com/ashraya-donate',
        website: 'https://example.com',
        verified: true,
      }
    ]
  })

  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
