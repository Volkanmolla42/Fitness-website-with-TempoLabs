import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const classes = [
  {
    id: 1,
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our expert-led strength training classes.',
    image: 'https://images.unsplash.com/photo-1604247584233-99c80a8aae2c?w=800',
    schedule: 'Mon, Wed, Fri - 10:00 AM'
  },
  {
    id: 2,
    title: 'HIIT Workout',
    description: 'High-intensity interval training for maximum calorie burn and endurance.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800',
    schedule: 'Tue, Thu - 9:00 AM'
  },
  {
    id: 3,
    title: 'Yoga Flow',
    description: 'Find balance and flexibility through our rejuvenating yoga sessions.',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800',
    schedule: 'Daily - 8:00 AM'
  },
  {
    id: 4,
    title: 'Boxing',
    description: 'Learn boxing techniques while getting an intense full-body workout.',
    image: 'https://images.unsplash.com/photo-1593476123561-9516f2097158?w=800',
    schedule: 'Mon, Wed, Fri - 6:00 PM'
  }
]

const ClassesSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title with a gentle fade and float effect
      gsap.fromTo(
        '.classes-title',
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: .5,
          ease: "back.inOut",
          scrollTrigger: {
            trigger: '.classes-title',
            start: 'top 70%',
          }
        }
      )

      // Animate cards with a gentle stagger and scale effect
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 40,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .5,
            ease: "power2.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="classes-title text-4xl md:text-5xl font-bold text-center text-pink-600 mb-16">
          Our Fitness Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={classItem.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 transition-all duration-500 hover:shadow-xl hover:shadow-pink-100 border border-pink-100"
            >
              <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">
                {classItem.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {classItem.description}
              </p>
              <div className="flex items-center text-purple-500">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">{classItem.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClassesSection